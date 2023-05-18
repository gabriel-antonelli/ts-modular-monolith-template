import {
  Controller,
  HttpResponse,
  badRequest,
  ok,
  serverError,
  validateRequest,
} from "@/modules/shared/controller";
import { CreateUserDTO } from "./dto";

export class CreateUserController implements Controller {
  async handle(req: CreateUserDTO): Promise<HttpResponse> {
    try {
      const isRequestValid = validateRequest(
        ["name", "email", "password"],
        req
      );
      if (isRequestValid instanceof Error) {
        return badRequest(isRequestValid);
      }
      return ok(`Created user ${req.name}`);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
