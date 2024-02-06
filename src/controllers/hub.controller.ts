import { NextFunction, Request, Response } from "express";
import Hub from "../core/hub.core";

const hubController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (
        !req.user.permissions.hasPermission({
          domain: "hub",
          action: "create",
          target: "*",
        })
      )
        throw new Error(`403:Insufficient permissions, need 'hub:create:*'`);

      const hub = await Hub.create();
      res.json({ hub });
    } catch (err) {
      next(err);
    }
  },
};

export default hubController;
