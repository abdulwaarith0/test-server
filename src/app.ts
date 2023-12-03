import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import { NODE_ENV } from "./constants";
import routes from "./routes";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(morgan(NODE_ENV === "production" ? "combined" : "dev"));
app.use("/api/", routes);

export default app;
