// Require JWT Token Middleware

import { NextFunction, Request, Response } from "express";
import UserCore from "../core/user.core";

declare module "express-serve-static-core" {
  // eslint-disable-next-line no-unused-vars
  interface Request {
    user: UserCore;
  }
}

export const requireToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization");
    if (!token) throw new Error("401:Token required");
    const user = await UserCore.fromToken(token);

    req.user = user;

    next();
  } catch (err: string | any) {
    const errMessage = err.message.split(":");
    const statusCode = parseInt(errMessage[0]);

    const message =
      errMessage.length > 1 ? errMessage.slice(1).join(":") : errMessage[0];

    res.status(statusCode || 500).json({
      status: false,
      message,
    });
  }
};

// Inject user if token is present or else continue
export const optionalToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization");
    if (!token) return next();
    const user = await UserCore.fromToken(token);
    if (!user) return next();
    req.user = user;

    next();
  } catch (err: string | any) {
    // No Error
    console.log(err);
    req.user = {} as UserCore;
    next();
  }
};
