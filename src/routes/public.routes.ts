import { Router } from "express";
import publicController from "../controllers/public.controller";

const publicRouter = Router();

// Public Routes for the API
publicRouter.get("/", (_, res) => {
	res.json({
		status: true,
		message: "Welcome to the API",
	});
});

publicRouter.get("/iot", publicController.iot.get)

export default publicRouter;