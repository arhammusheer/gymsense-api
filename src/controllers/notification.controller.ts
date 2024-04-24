import { NextFunction, Request, Response } from "express";
import SSECore from "../core/sse.core";
import UserCore from "../core/user.core";
import NotificationEvent from "../core/notificationevent.core";

// SSE handler
export const notifications = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Randomly generate an anonymous ID
    const anonyID = req.query.anonyID as string;

    if (!anonyID) {
      throw new Error("401: Missing anonyID query parameter");
    }
    // Set this in cookie

    const sse = new SSECore(anonyID, res);

    req.on("close", () => {
      // Remove the connection
      sse.close();
      // Clear all notifications for this user
      NotificationEvent.remove(anonyID);
    });
  } catch (err) {
    next(err);
  }
};

export const notifyWhenAvailable = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const anonyID = req.query.anonyID as string;
    const { iotId } = req.body as { iotId: string };

    if (!anonyID) {
      throw new Error(
        "401: Missing sse_id cookie, please connect to the SSE endpoint first"
      );
    }

    await NotificationEvent.initialize(anonyID, iotId);

    res.json({
      status: "success",
    });
  } catch (err) {
    next(err);
  }
};

export const listNotifications = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;
    const { id } = req.query as { id: string };

    if (!user) {
      throw new Error("401: Not authenticated");
    }

    const notifications = NotificationEvent.viewAllRequests(id);

    res.json({
      status: true,
      data: notifications,
    });
  } catch (err) {
    next(err);
  }
};
