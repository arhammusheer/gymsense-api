import { Request, Response, NextFunction } from "express";
import UserCore from "../core/user.core";
import { bodyFieldExist, isEmail } from "../core/utils";
import PermissionCore from "../core/permissions.core";

const userController = {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      // Body Field Exist
      bodyFieldExist(req.body, ["email", "password"]);

      const user = await UserCore.login(email, password);
      const token = await user.generateToken();
      res.json({ user, token });
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

      const { action, domain, target } = PermissionCore.parse(permission);

      // Check if current user has permission to add permission
      const canEditThisUser = req.user.permissions.hasPermission({
        domain: "user",
        action: "update",
        target: email,
      });

      const canEditAnyUser = req.user.permissions.hasPermission({
        domain: "user",
        action: "update",
        target: "*",
      });

      if (!canEditThisUser && !canEditAnyUser) {
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

      const { action, domain, target } = PermissionCore.parse(permission);

      // Check if current user has permission to remove permission
      const canEditThisUser = req.user.permissions.hasPermission({
        domain: "user",
        action: "update",
        target: email,
      });

      const canEditAnyUser = req.user.permissions.hasPermission({
        domain: "user",
        action: "update",
        target: "*",
      });

      if (!canEditThisUser && !canEditAnyUser) {
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
};

export default userController;
