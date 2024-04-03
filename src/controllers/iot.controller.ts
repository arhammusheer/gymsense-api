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

  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params as { id: string };
      const user = req.user;

      if (!user) {
        const iot = await Iot.get(id);
        return res.json({ status: true, data: iot });
      }

      const hasPermission =
        user.permissions.hasPermission({
          domain: "iot",
          action: "read",
          target: id,
        }) ||
        user.permissions.hasPermission({
          domain: "iot",
          action: "read",
          target: "*",
        });

      const iot = await Iot.get(id, hasPermission);

      res.json({
        status: true,
        data: iot,
      });
    } catch (err) {
      next(err);
    }
  },

  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      if (!user) {
        return res.json({ status: true, data: await Iot.getAll() });
      }
      // Handle wildcard permission
      if (
        user.permissions.hasPermission({
          domain: "iot",
          action: "read",
          target: "*",
        })
      ) {
        const iots = await Iot.getAll();
        return res.json({ status: true, data: iots });
      }

      // Handle regular user
      const elevatedIds = user.permissions.getIds("iot", "read");
      const iots = await Iot.getAll(elevatedIds);

      res.json({
        status: true,
        data: iots,
      });
    } catch (err) {
      next(err);
    }
  },
  // PUT
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params as { id: string };
      const user = req.user;
      const { name, location } = req.body as { name: string; location: string };

      if (!user) {
        throw new Error("401: Not authenticated");
      }

      if (
        !user.permissions.hasPermission({
          domain: "iot",
          action: "update",
          target: id,
        }) ||
        !user.permissions.hasPermission({
          domain: "iot",
          action: "update",
          target: "*",
        })
      ) {
        throw new Error(
          `403:Insufficient permissions, need 'iot:update:${id}'`
        );
      }

      const iot = await Iot.update(id, { name, location });

      res.json({ status: true, data: iot });
    } catch (err) {
      next(err);
    }
  },
};

export default iotController;
