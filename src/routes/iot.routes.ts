import { Router } from "express";
import iotController from "../controllers/iot.controller";
import requireToken from "../middleware/requireToken";

const iotRouter = Router();

// Update IoT status
iotRouter.post("/status", iotController.statusUpdate);
iotRouter.post("/create", requireToken, iotController.create);

export default iotRouter;
