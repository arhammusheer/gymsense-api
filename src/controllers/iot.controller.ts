import { NextFunction, Request, Response } from "express";
import Hub from "../core/hub.core";
import Iot from "../core/iot.core";
import { bodyFieldExist } from "../core/utils";

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
      bodyFieldExist(req.body, [
        "hub_id",
        "hub_key",
        "id",
        "key",
        "battery_level",
        "occupancy",
      ]);

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
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (
        !req.user.permissions.hasPermission({
          domain: "iot",
          action: "create",
          target: "*",
        })
      ) {
        throw new Error("403:Insufficient permissions, need 'iot:create:*'");
      }

      console.log(
        req.user.permissions.hasPermission({
          domain: "iot",
          action: "create",
          target: "*",
        })
      );

      const iot = await Iot.create();
      res.json({ iot });
    } catch (err) {
      next(err);
    }
  },
};

export default iotController;
