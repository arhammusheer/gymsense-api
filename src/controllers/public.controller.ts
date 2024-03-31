import { NextFunction, Request, Response } from "express";
import prisma from "../prisma";

const publicController = {
  iot: {
    get: async (req: Request, res: Response, next: NextFunction) => {
      try {
        const iot = await prisma.iot.findMany({
          select: {
            id: true,
            occupancy: true,
          },
        });

        res.json({
          status: true,
          data: iot,
        });
      } catch (err) {
        next(err);
      }
    },
  },
};

export default publicController;
