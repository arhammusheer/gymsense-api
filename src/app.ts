import express from "express";
import { config } from "./config";
import iotRouter from "./routes/iot.routes";
import hubRouter from "./routes/hub.routes";
import userRouter from "./routes/user.routes";
import morgan from "morgan";
import cors from "cors";
import OpenApi from "./openapi";
import publicRouter from "./routes/public.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("common"));

// TODO: Remove this in production and add a whitelist
app.use(cors());

app.use("/iot", iotRouter);
app.use("/hub", hubRouter);
app.use("/user", userRouter);
app.use("/public", publicRouter);

// Health check
app.get("/", (_, res) => {
  res.json({
    status: true,
  });
});

app.get("/openapi.json", (_, res) => {
  res.json(OpenApi.getDocument());
});

// Handle Errors
app.use((err: Error, _: any, res: any, __: any) => {
  /** Error Handling
   * Possible formats of error message:
   * 1. 400:Error message
   * 2. Error message
   */

  const errMessage = err.message.split(":");
  const statusCode = parseInt(errMessage[0]);

  const message =
    errMessage.length > 1 ? errMessage.slice(1).join(":") : errMessage[0];

  res.status(statusCode || 500).json({
    status: false,
    message,
  });
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}!`);
});
