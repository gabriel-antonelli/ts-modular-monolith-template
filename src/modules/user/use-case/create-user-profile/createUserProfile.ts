import { UseCaseError } from '@/modules/shared/use-case';
import { UserProfileCreator } from './userProfileCreator';
import { UserInfo, UserRepository } from '../../ports';
import { InvalidUserIdError } from './errors';

export class CreateUserProfile implements UserProfileCreator {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly userInfo: UserInfo
	) {}

	async createOrUpdateUserProfile(
		id: string,
		bio: string
	): Promise<true | UseCaseError> {
		const isUserIdValid = this.userInfo.isUserIdValid(id);
		if (!isUserIdValid) {
			throw new InvalidUserIdError(id);
		}
		await this.userRepository.createOrUpdateUserProfile(id, bio);
		return true;
	}
}
