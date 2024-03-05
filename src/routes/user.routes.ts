import { Router } from "express";
import userController from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);

// Permission Routes
userRouter.post("/permission/add", userController.addPermission);
userRouter.post("/permission/remove", userController.removePermission);

export default userRouter;
