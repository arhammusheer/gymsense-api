import { Request, Response } from "express";
import Hub from "../core/hub.core";
import Iot from "../core/iot.core";

const iotController = {
  statusUpdate: async (req: Request, res: Response) => {
    const {
      id: hubId,
      key: hubKey,
      iot_id: iotId,
      iot_key: iotKey,
      battery_level: batteryLevel,
      occupancy,
    } = req.body as unknown as {
      id: string;
      key: string;
      iot_id: string;
      iot_key: string;
      battery_level: number;
      occupancy: boolean;
    };
    const hub = await Hub.initialize({ id: hubId, key: hubKey });
    const iot = await Iot.initialize({ id: iotId, key: iotKey, hubId: hub.id });

    // Update battery level
    await iot.updateBatteryLevel({ batteryLevel });

    // Update occupancy
    await iot.updateOccupancy({ occupancy });

    res.json({ status: true });
  },

  // TODO: Protect this route
  create: async (_: Request, res: Response) => {
    const iot = await Iot.create();
    res.json({ iot });
  },
};

export default iotController;
