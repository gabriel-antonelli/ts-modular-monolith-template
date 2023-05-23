import { CreateUserController } from '../controllers';
import { userCreatorFactory } from './use-case';

export const createUserController = (): CreateUserController => {
	return new CreateUserController(userCreatorFactory());
};
