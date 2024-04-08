import { NextFunction, Request, Response } from "express";
import SSECore from "../core/sse.core";
import UserCore from "../core/user.core";

// SSE handler
export const notifications = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.query.token as string;
    if (!token) {
      throw new Error("401:Missing token");
    }
    const user = await UserCore.fromToken(token);

    if (!user) {
      throw new Error("401:Invalid token");
    }

    const sse = new SSECore(user, res);

    req.on("close", () => {
      sse.close();
    });
  } catch (err) {
    next(err);
  }
};
