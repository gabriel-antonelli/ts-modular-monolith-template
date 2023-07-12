import { UseCaseError } from '@/modules/shared/use-case';

export interface UserProfileCreator {
	createUserProfile: (id: string, bio: string) => Promise<true | UseCaseError>;
}
