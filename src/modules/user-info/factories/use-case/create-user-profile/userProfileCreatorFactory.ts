import { UserProfileRepositoryWithPrisma } from '@/modules/user-info/external/repositories/postgres/userProfileRepositoryWithPrisma';
import {
	CreateUserProfile,
	UserProfileCreator,
} from '@/modules/user-info/use-case';

export const createUserProfile = (): UserProfileCreator => {
	return new CreateUserProfile(new UserProfileRepositoryWithPrisma());
};
