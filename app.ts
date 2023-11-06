import express from "express";
import { config } from "./config";
import iotRouter from "./routes/iot.routes";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/iot", iotRouter);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}!`);
});
