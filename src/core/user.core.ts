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
      throw new Error("User already exists");
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
      throw new Error("Invalid password");
    }

    return new UserCore(user);
  }

  async updatePassword(oldPassword: string, newPassword: string) {
    const isPasswordCorrect = await passwordUtils.compare(
      oldPassword,
      this.userData.password
    );
    if (!isPasswordCorrect) {
      throw new Error("Invalid password");
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

  async _addPermission(permission: string) {
    // Check if permission already exists
    const exists = this.userData.permissions.some(
      (existingPermission) => existingPermission === permission
    );

    if (exists) {
      throw new Error("Permission already exists");
    }

    const user = await prisma.user.update({
      where: {
        email: this.userData.email,
      },
      data: {
        permissions: {
          push: permission,
        },
      },
    });

    this.userData = user;

    return this;
  }

  async _removePermission(permission: string) {
    // Check if permission exists
    const exists = this.userData.permissions.some(
      (existingPermission) => existingPermission === permission
    );

    if (!exists) {
      throw new Error("Permission does not exist");
    }

    const user = await prisma.user.update({
      where: {
        email: this.userData.email,
      },
      data: {
        permissions: {
          set: this.userData.permissions.filter(
            (existingPermission) => existingPermission !== permission
          ),
        },
      },
    });

    this.userData = user;

    return this;
  }

  _hasPermission(permission: string) {
    return this.userData.permissions.some(
      (existingPermission) => existingPermission === permission
    );
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

  get email() {
    return this.userData.email;
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
}
