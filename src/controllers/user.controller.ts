import { Request, Response, NextFunction } from "express";
import UserCore from "../core/user.core";
import { bodyFieldExist, isEmail } from "../core/utils";
import PermissionCore, { Permission } from "../core/permissions.core";

const userController = {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      // Body Field Exist
      bodyFieldExist(req.body, ["email", "password"]);

      const user = await UserCore.login(email, password);
      const token = await user.generateToken();

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        domain: process.env.NODE_ENV === "production" ? "sdp.croissant.one" : "",
        expires: new Date(Date.now() + 1000 * 60 * 60 ), // 1 hour
      });

      res.json({ user, token });
    } catch (err) {
      next(err);
    }
  },

  async recoverLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.cookies.token;
      res.json({user: req.user.toJSON(), token: token});
    } catch (err) {
      next(err);
    }
  },


  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      // Body Field Exist
      bodyFieldExist(req.body, ["email", "password"]);

      const user = await UserCore.create(email, password);
      const token = await user.generateToken();
      res.json({ user, token });
    } catch (err) {
      next(err);
    }
  },

  async addPermission(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, permission } = req.body;

      // Body Field Exist
      bodyFieldExist(req.body, ["email", "permission"]);

      if (!isEmail(email)) throw new Error("400:Invalid email");

      const { action, domain, target } = Permission.fromString(permission);

      // Check if current user has permission to add permission
      const canEditThisUser = req.user.permissions.hasPermission({
        domain: "user",
        action: "update",
        target: email,
      });

      if (!canEditThisUser) {
        throw new Error("You do not have permission to add permission");
      }

      const userToModify = await UserCore.fromEmail(email);

      if (!userToModify) {
        throw new Error("User not found");
      }

      await userToModify.permissions.addPermission({ domain, action, target });
      res.json({ status: true });
    } catch (err) {
      next(err);
    }
  },

  async removePermission(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, permission } = req.body;

      // Body Field Exist
      bodyFieldExist(req.body, ["email", "permission"]);

      if (!isEmail(email)) throw new Error("400:Invalid email");

      const { action, domain, target } = Permission.fromString(permission);

      // Check if current user has permission to remove permission
      const canEditThisUser = req.user.permissions.hasPermission({
        domain: "user",
        action: "update",
        target: email,
      });

      if (!canEditThisUser) {
        throw new Error("You do not have permission to remove permission");
      }

      const userToModify = await UserCore.fromEmail(email);

      if (!userToModify) {
        throw new Error("User not found");
      }

      await userToModify.permissions.removePermission({
        domain,
        action,
        target,
      });
      res.json({ status: true });
    } catch (err) {
      next(err);
    }
  },

  async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const { limit, offset, users } = req.query as {
        limit: string;
        offset: string;
        users: string[];
      };


        

      const parsedLimit = parseInt(limit) || 10;
      const parsedOffset = parseInt(offset) || 0;

      res.json({ users });
    } catch (err) {
      next(err);
    }
  },
};

export default userController;
