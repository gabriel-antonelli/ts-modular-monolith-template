import { CreateUserController } from "../controllers";

export const createUserController = (): CreateUserController => {
  return new CreateUserController();
};
