import express from "express";
import "@/config/dotenvLoader";
import { helmetMiddleware, httpLogger } from "./middlewares";
import { logger } from "@/config/logger";

const app = express();
const port = process.env.PORT;

app.use(helmetMiddleware, httpLogger);
export const server = app.listen(port, () =>
  logger.info(`Server started on port: ${port}`)
);
