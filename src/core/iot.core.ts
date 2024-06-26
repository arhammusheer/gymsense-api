import prisma from "../prisma";
import { KEY_LENGTH, generateKey } from "./utils";
import { Iot as IotData } from "@prisma/client";

interface restrictedIotData {
  id: string;
  occupancy: boolean;
  name: string;
  location: string;
  isOffline: boolean;
}

export default class Iot {
  private data: IotData;
  private hubId: string;

  get id() {
    return this.data.id;
  }

  get name() {
    return this.data.name;
  }

  get location() {
    return this.data.location;
  }

  get occupancy() {
    return this.data.occupancy;
  }

  get isOffline() {
    return this.data.isOffline;
  }

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
    const isValidBatteryLevel =
      batteryLevel === -1 || (batteryLevel >= 0 && batteryLevel <= 1);

    if (!isValidBatteryLevel)
      throw new Error(
        "Battery level must be between 0 and 1 or -1 for no-battery"
      );

    // Update battery level
    this.data = await prisma.iot.update({
      where: {
        id: this.data.id,
      },
      data: {
        batteryLevel,
      },
    });

    // Log battery level update
    await prisma.iotLog.create({
      data: {
        changeType: "BATTERY_LEVEL",
        value: batteryLevel.toString(),
        iot: { connect: { id: this.data.id } },
        hub: { connect: { id: this.hubId } },
      },
    });
  }

  public async updateOccupancy({ occupancy }: { occupancy: boolean }) {
    // Update occupancy
    this.data = await prisma.iot.update({
      where: {
        id: this.data.id,
      },
      data: {
        occupancy,
      },
    });

    // Log occupancy update
    await prisma.iotLog.create({
      data: {
        changeType: "OCCUPANCY",
        value: occupancy.toString(),
        iot: { connect: { id: this.data.id } },
        hub: { connect: { id: this.hubId } },
      },
    });
  }

  private static generateKey(): string {
    return `iot-${generateKey(KEY_LENGTH)}`;
  }

  public static async getAll(
    extendedIds: string[] = [],
    admin?: boolean
  ): Promise<Iot[] | restrictedIotData[]> {
    // If admin, get all fields
    if (admin) {
      return prisma.iot.findMany();
    }

    // For ids listed in extendedIds, get all fields

    let iots: IotData[] = [];

    if (extendedIds.length) {
      iots = await prisma.iot.findMany({
        where: {
          id: {
            in: extendedIds,
          },
        },
      });
    }

    // For all other ids, get only id and occupancy
    const restrictedIots = await prisma.iot.findMany({
      where: {
        id: {
          notIn: extendedIds,
        },
      },
      select: {
        id: true,
        occupancy: true,
        name: true,
        location: true,
        isOffline: true,
      },
    });

    return [...iots, ...restrictedIots];
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

  public static async get(id: string, elevated: boolean = false) {
    if (elevated) {
      return prisma.iot.findUnique({
        where: {
          id,
        },
      });
    }

    return prisma.iot.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        occupancy: true,
        name: true,
        location: true,
        isOffline: true,
      },
    });
  }

  public static async update(
    id: string,
    data: {
      name: string;
      location: string;
      isOffline: boolean;
      occupancy: boolean;
    }
  ) {
    return prisma.iot.update({
      where: {
        id,
      },
      data,
    });
  }

  public static async delete(id: string) {
    return prisma.iot.delete({
      where: {
        id,
      },
    });
  }

  public static async getTimeline(
    id: string,
    fromDateTime: Date,
    toDateTime: Date
  ) {
    const logs = await prisma.iotLog.findMany({
      where: {
        iotId: id,
        changeType: "OCCUPANCY",
        createdAt: {
          gte: fromDateTime,
          lte: toDateTime,
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    if (!logs.length) return []; // No logs found

    // Convert logs to timeline
    // { from: Date, to: Date, occupancy: boolean }[]
    const timeline: { from: Date; to: Date; occupancy: boolean }[] = [];

    let currentOccupancy = !(logs[0].value == "true");
    let currentFrom = logs[0].createdAt;

    // Iterate over logs to create timeline
    for (const log of logs) {
      const value = log.value === "true";

      if (value !== currentOccupancy) {
        timeline.push({
          from: currentFrom,
          to: log.createdAt,
          occupancy: currentOccupancy,
        });

        currentOccupancy = value;
        currentFrom = log.createdAt;
      }
    }

    // Add last entry
    timeline.push({
      from: currentFrom,
      to: toDateTime,
      occupancy: currentOccupancy,
    });

    return timeline;
  }

  public static async markOfflineIfNoUpdate(id?: string) {
    const iots = await prisma.iot.findMany({
      where: {
        isOffline: false,
        id: id ? { equals: id } : undefined,
        updatedAt: {
          // 1 day
          lte: new Date(Date.now() - 24 * 60 * 60 * 1000),
        },
      },
    });

    for (const iot of iots) {
      await prisma.iot.update({
        where: {
          id: iot.id,
        },
        data: {
          isOffline: true,
        },
      });
    }
  }

  public static async markOnline(id: string): Promise<boolean> {
    const iot = await prisma.iot.findUnique({
      where: {
        id,
      },
    });

    if (!iot) throw new Error("Iot device not found");

    if (!iot.isOffline) return false;

    await prisma.iot.update({
      where: {
        id,
      },
      data: {
        isOffline: false,
      },
    });

    return true;
  }

  public async reload() {
    const iot = await prisma.iot.findUnique({
      where: {
        id: this.data.id,
      },
    });

    if (!iot) throw new Error("Iot device not found");

    this.data = iot;
  }
}
