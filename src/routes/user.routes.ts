import { Router } from "express";
import userController from "../controllers/user.controller";
import { optionalToken } from "../middleware/requireToken";

const userRouter = Router();

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);

// Permission Routes
userRouter.post("/permission/add", userController.addPermission);
userRouter.post("/permission/remove", userController.removePermission);

// User management routes
userRouter.post("/", userController.getList);

// Recover session from token
userRouter.post("/recover", userController.recoverLogin);

// Logout route
userRouter.post("/logout", optionalToken, userController.logout);

export default userRouter;
