import { Request, Response, NextFunction } from "express";
import UserCore from "../core/user.core";
import { bodyFieldExist } from "../core/utils";

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
};

export default userController;
