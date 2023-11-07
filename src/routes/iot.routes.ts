import { Router } from "express";
import iotController from "../controllers/iot.controller";

const iotRouter = Router();

// Update IoT status
iotRouter.post("/status", iotController.statusUpdate);
iotRouter.post("/create", iotController.create);

export default iotRouter;
