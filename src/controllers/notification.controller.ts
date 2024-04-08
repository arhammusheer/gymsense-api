import { NextFunction, Request, Response } from "express";

// SSE handler
export const notifications = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    res.write("data: Connected\n\n");

    // pings every 5 seconds
    const interval = setInterval(() => {
      res.write("data: ping\n\n");
    }, 5000);

    req.on("close", () => {
      clearInterval(interval);
      res.end();
    });
  } catch (err) {
    next(err);
  }
};
