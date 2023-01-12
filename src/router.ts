import express, { Router } from "express";
import { authRoutes } from "./routes/auth.router";
const expressRouter = express.Router();

export function router(app: Router): Router {
  app.use("/auth", authRoutes());

  return expressRouter;
}
