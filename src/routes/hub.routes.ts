import { Router } from "express";
import hubController from "../controllers/hub.controller";
import {requireToken} from "../middleware/requireToken";

const hubRouter = Router();

hubRouter.post("/create", requireToken, hubController.create);

export default hubRouter;
