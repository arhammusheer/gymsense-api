import { Request, Response } from "express";
import UserCore from "./user.core";

// Define the SSE event types
interface SSEEvent {
  domain: "iot" | "notification";
}
interface IotEvent extends SSEEvent {
  domain: "iot";
  data: {
    id: string;
    name: string;
    occupancy: boolean;
    location: string;
  };
}
interface NotificationEvent extends SSEEvent {
  domain: "notification";
  data: {
    message: string;
  };
}

interface Connection {
  response: Response;
  id: string;
}

const connections = new Set<SSECore>();

export default class SSECore {
  connection: Connection;
  constructor(user: UserCore, res: Response) {
    this.connection = {
      response: res,
      id: user.email,
    };
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    connections.add(this);

    this.send({
      domain: "notification",
      data: { message: "You'll now receive real-time updates" },
    });
  }

  send(data: IotEvent | NotificationEvent) {
    this.connection.response.write(`data: ${JSON.stringify(data)}\n\n`);
  }

  close() {
    this.connection.response.end();
    connections.delete(this);
  }

  static sendToAll(data: IotEvent | NotificationEvent) {
    for (const connection of connections) {
      connection.send(data);
    }
  }

  static closeAll() {
    for (const connection of connections) {
      connection.close();
    }
  }

  static sendToUser(email: string, data: IotEvent | NotificationEvent) {
    for (const connection of connections) {
      if (connection.connection.id === email) {
        connection.send(data);
      }
    }
  }
}
