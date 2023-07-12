import { UserRepositoryWithPrisma } from '@/modules/user/external';
import { CreateUserProfile, UserProfileCreator } from '@/modules/user/use-case';

export const createUserProfile = (): UserProfileCreator => {
	return new CreateUserProfile(new UserRepositoryWithPrisma());
};
