import bcrypt from "bcrypt";

export const KEY_LENGTH = 16;
export const SALT_ROUNDS = 11;

export const generateKey = (length: number) => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
};

const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);

  return bcrypt.hash(password, salt);
};

const comparePassword = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const passwordUtils = {
  hash: hashPassword,
  compare: comparePassword,
};

export const bodyFieldExist = (body: any, fields: string[]) => {
  const missingFields: string[] = [];
  fields.forEach((field) => {
    if (!body[field]) {
      missingFields.push(field);
    }
  });
  if (missingFields.length > 0) {
    throw new Error(`400:Missing fields: ${missingFields.join(", ")}`);
  }
  return true;
};

export const isEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
