import pinoHttp from "pino-http";
import { logger } from "@/config/logger";

export const httpLogger = pinoHttp({
  logger,
  autoLogging: true,
});
