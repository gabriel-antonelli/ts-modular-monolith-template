import { UserRepositoryWithPrisma } from '@/modules/user/external';
import { DatabaseUserCreator, UserCreator } from '@/modules/user/use-case';

export const userCreatorFactory = (): UserCreator => {
	return new DatabaseUserCreator(new UserRepositoryWithPrisma());
};
