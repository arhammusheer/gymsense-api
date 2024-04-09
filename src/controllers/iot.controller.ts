import { NextFunction, Request, Response } from "express";
import Hub from "../core/hub.core";
import Iot from "../core/iot.core";
import { bodyFieldExist } from "../core/utils";
import SSECore from "../core/sse.core";
import NotificationEvent from "../core/notificationevent.core";

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

      if (!occupancy) {
        // Notify user
        NotificationEvent.isNowAvailable(iot.id);
      }

      // Send real-time update to all clients for dashboard
      SSECore.sendToAll({
        domain: "iot",
        data: {
          id: iot.id,
          name: iot.name,
          occupancy,
          location: iot.location,
        },
      });

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

      const iot = await Iot.create();
      // Add permission for created Iot to user
      await req.user.permissions.addPermission({
        domain: "iot",
        action: "read",
        target: iot.id,
      });
      await req.user.permissions.addPermission({
        domain: "iot",
        action: "update",
        target: iot.id,
      });
      await req.user.permissions.addPermission({
        domain: "iot",
        action: "delete",
        target: iot.id,
      });

      res.json({ iot });
    } catch (err) {
      next(err);
    }
  },

  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params as { id: string };
      const user = req.user;

      const hasPermission = !!user
        ? user.permissions.hasPermission({
            domain: "iot",
            action: "read",
            target: id,
          }) ||
          user.permissions.hasPermission({
            domain: "iot",
            action: "read",
            target: "*",
          })
        : false;

      const iot = await Iot.get(id, hasPermission);

      if (!iot) {
        throw new Error("404:IoT not found");
      }

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
        const iots = await Iot.getAll([], true);
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

  // DELETE
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params as { id: string };
      const user = req.user;

      if (!user) {
        throw new Error("401: Not authenticated");
      }

      if (
        !user.permissions.hasPermission({
          domain: "iot",
          action: "delete",
          target: id,
        }) ||
        !user.permissions.hasPermission({
          domain: "iot",
          action: "delete",
          target: "*",
        })
      ) {
        throw new Error(
          `403:Insufficient permissions, need 'iot:delete:${id}'`
        );
      }

      await Iot.delete(id);

      await user.permissions.removePermission({
        domain: "iot",
        action: "read",
        target: id,
      });
      await user.permissions.removePermission({
        domain: "iot",
        action: "update",
        target: id,
      });
      await user.permissions.removePermission({
        domain: "iot",
        action: "delete",
        target: id,
      });

      res.json({ status: true });
    } catch (err) {
      next(err);
    }
  },
};

export default iotController;
