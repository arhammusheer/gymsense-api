import { randomBytes } from "crypto";

export const KEY_LENGTH = 16;

export const generateKey = (length: number) => {
  return randomBytes(length).toString("hex");
};
