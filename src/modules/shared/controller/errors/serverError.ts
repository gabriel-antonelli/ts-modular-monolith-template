import { logger } from "@/config/logger";
import { ControllerError } from "./controllerError";

export class ServerError extends Error implements ControllerError {
  constructor(exception: Error) {
    logger.error(exception);
    super(`Internal Server Error`);
    this.name = "ServerError";
  }
}
