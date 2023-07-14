import { UserProfileRepositoryWithPrisma } from '@/modules/user/external/repositories/postgres/userProfileRepositoryWithPrisma';
import { CreateUserProfile, UserProfileCreator } from '@/modules/user/use-case';

export const createUserProfile = (): UserProfileCreator => {
	return new CreateUserProfile(new UserProfileRepositoryWithPrisma());
};
