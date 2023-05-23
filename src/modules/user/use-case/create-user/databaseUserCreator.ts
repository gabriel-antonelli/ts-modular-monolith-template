import { DomainError } from '@/modules/shared/domain';
import { UseCaseError } from '@/modules/shared/use-case';
import { UserCreator } from './userCreator';
import { UserRepository } from '../../ports';
import { User } from '../../domain';

export class DatabaseUserCreator implements UserCreator {
	constructor(private readonly userRepository: UserRepository) {}

	async createUser(
		name: string,
		email: string,
		password: string
	): Promise<true | DomainError | UseCaseError> {
		const userOrError = User.create(name, email, password);
		if (userOrError instanceof Error) {
			return userOrError;
		}
		await this.userRepository.create(name, email, password);
		return true;
	}
}
