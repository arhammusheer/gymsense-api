import Iot from "./iot.core";
import SSECore from "./sse.core";

export const notify = new Set<NotificationEvent>();

export default class NotificationEvent {
  userId: string;
  iot: {
    id: string;
    name: string;
    occupancy: boolean;
  };

  private constructor(
    userId: string,
    iot: { id: string; occupancy: boolean; name: string }
  ) {
    this.userId = userId;
    this.iot = iot;

    notify.add(this);
  }

  public static async initialize(email: string, iotId: string) {
    const iot = await Iot.get(iotId, true);
    if (!iot) throw new Error("Iot Device not found");

    return new NotificationEvent(email, {
      id: iot.id,
      name: iot.name,
      occupancy: iot.occupancy,
    });
  }

  notify() {
    SSECore.sendToUser(this.userId, {
      domain: "notification",
      data: {
        message: `IoT Device ${this.iot.name} is now available`,
      },
    });
    this.complete();
  }

  static isNowAvailable(iotId: string) {
    for (const event of notify) {
      if (event.iot.id === iotId) {
        event.notify();
      }
    }
  }

  complete() {
    notify.delete(this);
  }

  static remove(userId: string) {
    for (const event of notify) {
      if (event.userId === userId) {
        notify.delete(event);
      }
    }
  }

  static viewAllRequests(userId?: string) {
    if (userId) {
      return Array.from(notify).filter((event) => event.userId === userId);
    }
    return Array.from(notify);
  }
}
