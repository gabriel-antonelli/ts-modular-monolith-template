import { UseCaseError } from '@/modules/shared/use-case';
import { UserProfileCreator } from './userProfileCreator';
import { UserProfileRepository } from '../../ports';
import { UserProfileAlreadySavedError } from './errors';

export class CreateUserProfile implements UserProfileCreator {
	constructor(private readonly userRepository: UserProfileRepository) {}

	async createOrUpdateUserProfile(
		id: string,
		bio: string
	): Promise<true | UseCaseError> {
		const isUserSaved = await this.userRepository.isUserSaved(id);
		if (isUserSaved) {
			return new UserProfileAlreadySavedError();
		}
		await this.userRepository.createUserProfile(id, bio);
		return true;
	}
}
