import { DomainError } from '@/modules/shared/domain';
import { UseCaseError } from '@/modules/shared/use-case';

export interface UserCreator {
	createUser: (
		name: string,
		email: string,
		password: string
	) => Promise<true | DomainError | UseCaseError>;
}
