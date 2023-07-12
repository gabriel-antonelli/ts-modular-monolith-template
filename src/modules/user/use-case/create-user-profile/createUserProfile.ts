import { UseCaseError } from '@/modules/shared/use-case';
import { UserProfileCreator } from './userProfileCreator';
import { UserRepository } from '../../ports';
import clerk from '@clerk/clerk-sdk-node';

export class CreateUserProfile implements UserProfileCreator {
	constructor(private readonly userRepository: UserRepository) {}

	async createUserProfile(
		id: string,
		bio: string
	): Promise<true | UseCaseError> {
		const client = await clerk.users.getUser(id);
		console.log(client);
		await this.userRepository.createProfile(id, bio);
		return true;
	}
}
