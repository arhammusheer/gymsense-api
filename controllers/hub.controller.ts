import { Request, Response } from "express";
import Hub from "../core/hub.core";

const hubController = {
  create: async (_: Request, res: Response) => {
    const hub = await Hub.create();
    res.json({ hub });
  },
};

export default hubController;
