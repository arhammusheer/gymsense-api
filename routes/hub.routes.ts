import { Router } from "express";
import hubController from "../controllers/hub.controller";

const hubRouter = Router();

hubRouter.post("/create", hubController.create);

export default hubRouter;