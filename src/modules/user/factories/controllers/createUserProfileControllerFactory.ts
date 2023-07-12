import { Controller } from '@/modules/shared/controller';
import { CreateUserProfileController } from '../../controllers';
import { createUserProfile } from '../use-case/create-user-profile';

export const createUserProfileController = (): Controller => {
	return new CreateUserProfileController(createUserProfile());
};
