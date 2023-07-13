import { UseCaseError } from '@/modules/shared/use-case';

export interface UserProfileCreator {
	createOrUpdateUserProfile: (
		id: string,
		bio: string
	) => Promise<true | UseCaseError>;
}
