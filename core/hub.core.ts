import prisma from "../prisma";
import { KEY_LENGTH, generateKey } from "./utils";

// Hub should be able to authenticate using id and key
export default class Hub {
  private _id: string;
  private _key: string;

  private constructor({ id, key }: { id: string; key: string }) {
    this._id = id;
    this._key = key;
  }

  public get id(): string {
    return this._id;
  }

  private async isAuthenticated(): Promise<boolean> {
    const hub = await prisma.hub.findUnique({
      where: {
        id: this._id,
      },
    });
    // If hub not found
    if (!hub) throw new Error("Hub not found");
    // If incorrect key
    if (hub.key !== this._key) throw new Error("Incorrect key");
    return true;
  }

  // Initializer
  public static async initialize({
    id,
    key,
  }: {
    id: string;
    key: string;
  }): Promise<Hub> {
    const hub = new Hub({ id, key });
    await hub.isAuthenticated();
    return hub;
  }
  private static generateKey(): string {
    return `hub-${generateKey(KEY_LENGTH)}`;
  }

  // Create Hub device
  public static async create() {
    const iot = await prisma.hub.create({
      data: {
        key: this.generateKey(),
      },
    });
    return iot;
  }
}
