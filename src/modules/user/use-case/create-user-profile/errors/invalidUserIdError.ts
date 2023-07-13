import { UseCaseError } from '@/modules/shared/use-case';

export class InvalidUserIdError extends Error implements UseCaseError {
	constructor(id: string) {
		super(`Id ${id} is invalid`);
		this.name = 'InvalidUserId';
	}
}
