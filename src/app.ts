import express from "express";
import { config } from "./config";
import iotRouter from "./routes/iot.routes";
import hubRouter from "./routes/hub.routes";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/iot", iotRouter);
app.use("/hub", hubRouter);

// Health check
app.get("/", (_, res) => {
  res.json({
    status: true,
  });
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
  const message = errMessage[1] || errMessage[0];

  res.status(statusCode || 500).json({
    status: false,
    message,
  });
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}!`);
});
