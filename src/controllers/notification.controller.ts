import { NextFunction, Request, Response } from "express";
import SSECore from "../core/sse.core";

// SSE handler
export const notifications = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sse = new SSECore(req, res);

		req.on("close", () => {
			sse.close();
		});
  } catch (err) {
    next(err);
  }
};
