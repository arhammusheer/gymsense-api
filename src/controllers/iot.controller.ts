import { NextFunction, Request, Response } from "express";
import Hub from "../core/hub.core";
import Iot from "../core/iot.core";

const iotController = {
  statusUpdate: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        hub_id: hubId,
        hub_key: hubKey,
        id: iotId,
        key: iotKey,
        battery_level: batteryLevel,
        occupancy,
      } = req.body as unknown as {
        id: string;
        key: string;
        hub_id: string;
        hub_key: string;
        battery_level: number;
        occupancy: boolean;
      };

      if (!hubId) throw new Error("400:hub_id is required");
      if (!hubKey) throw new Error("400:hub_key is required");
      if (!iotId) throw new Error("400:id is required");
      if (!iotKey) throw new Error("400:key is required");
      if (batteryLevel === undefined)
        throw new Error("battery_level is required");
      if (occupancy === undefined) throw new Error("occupancy is required");

      const hub = await Hub.initialize({ id: hubId, key: hubKey });
      const iot = await Iot.initialize({
        id: iotId,
        key: iotKey,
        hubId: hub.id,
      });

      // Update battery level
      await iot.updateBatteryLevel({ batteryLevel });

      // Update occupancy
      await iot.updateOccupancy({ occupancy });

      res.json({ status: true });
    } catch (err) {
      next(err);
    }
  },

  // TODO: Protect this route
  create: async (_: Request, res: Response) => {
    const iot = await Iot.create();
    res.json({ iot });
  },
};

export default iotController;
