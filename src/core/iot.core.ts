import prisma from "../prisma";
import { KEY_LENGTH, generateKey } from "./utils";
import { Iot as IotData } from "@prisma/client";

export default class Iot {
  private data: IotData;
  private hubId: string;

  private constructor(data: IotData & { hubId: string }) {
    this.data = data;
    this.hubId = data.hubId;
  }

  public static async initialize({
    id,
    key,
    hubId,
  }: {
    id: string;
    key: string;
    hubId: string;
  }): Promise<Iot> {
    const iotFromDb = await prisma.iot.findUnique({
      where: {
        id,
      },
    });

    if (!iotFromDb) throw new Error("Iot Device not found");
    if (iotFromDb.key !== key) throw new Error("Incorrect key");

    return new Iot({ ...iotFromDb, hubId });
  }

  public async updateBatteryLevel({ batteryLevel }: { batteryLevel: number }) {
    // Validate battery level 0 to 1 or is -1
    const check_nobar = batteryLevel === -1;
    const check_bar = batteryLevel >= 0 && batteryLevel <= 1;

    if (!check_nobar && !check_bar)
      throw new Error(
        "Battery level must be between 0 and 1 or -1 for no-battery"
      );

    // Log battery level update
    await prisma.iotLog.create({
      data: {
        changeType: "BATTERY_LEVEL",
        value: batteryLevel.toString(),
        iot: { connect: { id: this.data.id } },
        hub: { connect: { id: this.hubId } },
      },
    });

    // Update battery level
    await prisma.iot.update({
      where: {
        id: this.data.id,
      },
      data: {
        batteryLevel,
      },
    });
  }

  public async updateOccupancy({ occupancy }: { occupancy: boolean }) {
    // Log occupancy update
    await prisma.iotLog.create({
      data: {
        changeType: "OCCUPANCY",
        value: occupancy.toString(),
        iot: { connect: { id: this.data.id } },
        hub: { connect: { id: this.hubId } },
      },
    });

    // Update occupancy
    await prisma.iot.update({
      where: {
        id: this.data.id,
      },
      data: {
        occupancy,
      },
    });
  }

  private static generateKey(): string {
    return `iot-${generateKey(KEY_LENGTH)}`;
  }

  // Create Hub device
  public static async create() {
    const iot = await prisma.iot.create({
      data: {
        key: this.generateKey(),
      },
    });
    return iot;
  }
}
