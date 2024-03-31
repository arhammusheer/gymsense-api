import { PrismaClient, User } from "@prisma/client";
import { passwordUtils } from "./utils";
import {
  sign,
  verify,
  Secret,
  SignOptions,
  VerifyOptions,
  JwtPayload,
} from "jsonwebtoken";
import PermissionCore from "./permissions.core";

const prisma = new PrismaClient();

const TOKEN_AUDIENCE = "croissant-apis";
const TOKEN_ISSUER = "croissant-apis";

export default class UserCore {
  private userData: User;
  public permissions: PermissionCore;

  get email() {
    return this.userData.email;
  }

  private constructor(userData: User) {
    this.userData = userData;
    this.permissions = new PermissionCore(this);
  }

  // Create User
  static async create(email: string, password: string): Promise<UserCore> {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new Error("409:User already exists");
    }

    // Password Hashing
    const hashedPassword = await passwordUtils.hash(password);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return new UserCore(user);
  }

  // Login User
  static async login(email: string, password: string): Promise<UserCore> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordCorrect = await passwordUtils.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("401:Invalid password");
    }

    return new UserCore(user);
  }

  async updatePassword(oldPassword: string, newPassword: string) {
    const isPasswordCorrect = await passwordUtils.compare(
      oldPassword,
      this.userData.password
    );
    if (!isPasswordCorrect) {
      throw new Error("401:Invalid password");
    }
    const hashedPassword = await passwordUtils.hash(newPassword);
    const user = await prisma.user.update({
      where: {
        email: this.userData.email,
      },
      data: {
        password: hashedPassword,
      },
    });
    this.userData = user;
    return this;
  }

  async updatePermissions(permissions: string[]) {
    const user = await prisma.user.update({
      where: {
        email: this.userData.email,
      },
      data: {
        permissions: permissions,
      },
    });
    this.userData = user;
    return this;
  }

  getPermissions() {
    return this.userData.permissions;
  }

  toJSON() {
    return {
      email: this.userData.email,
      permissions: this.userData.permissions,
    };
  }

  

  async generateToken() {
    const payload: JwtPayload = {
      email: this.userData.email,
    };
    const secret: Secret = process.env.JWT_SECRET as Secret;

    const options: SignOptions = {
      expiresIn: "1h",
      audience: TOKEN_AUDIENCE,
      issuer: TOKEN_ISSUER,
    };

    const token = sign(payload, secret, options);

    return token;
  }

  static async fromToken(token: string) {
    const secret: Secret = process.env.JWT_SECRET as Secret;

    const options: VerifyOptions = {
      audience: TOKEN_AUDIENCE,
      issuer: TOKEN_ISSUER,
    };

    const payload = verify(token, secret, options) as JwtPayload;

    const user = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    });

    if (!user) {
      throw new Error("404:User not found");
    }

    return new UserCore(user);
  }

  static async fromEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("404:User not found");
    }

    return new UserCore(user);
  }

  static async getAll(limit?: number, offset?: number) {
    // Get all users, strip sensitive data
    const users = await prisma.user.findMany({
      select: { email: true, permissions: true },
      take: limit || 10,
      skip: offset || 0,
    });
    return users.map((user) => new UserCore({ ...user, password: "REDACTED" }));
  }
}
