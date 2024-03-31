import { Router } from "express";
import iotController from "../controllers/iot.controller";
import { optionalToken, requireToken } from "../middleware/requireToken";
import OpenApi from "../openapi";

const iotRouter = Router();

// Update IoT status
iotRouter.post("/status", iotController.statusUpdate);
iotRouter.post("/create", requireToken, iotController.create);

// Removes secrets when token is not present
iotRouter.get("/:id", optionalToken, iotController.get);

// Add Status Route to document
OpenApi.addRouteToOpenApiDocument("/iot/status", "post", {
  summary: "Update IoT status",
  description: "Update the status of an IoT device",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            status: {
              type: "string",
              description: "Status of the IoT device",
            },
          },
          required: ["status"],
        },
      },
    },
  },
  responses: {
    "200": {
      description: "Success",
    },
    "400": {
      description: "Error",
    },
  },
});

export default iotRouter;
