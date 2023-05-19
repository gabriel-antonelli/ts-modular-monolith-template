import { DomainError } from '@/modules/shared/domain';

export class InvalidPasswordError extends Error implements DomainError {
	constructor() {
		super(`The password is invalid or do not met the parameters.`);
		this.name = 'InvalidPasswordError';
	}
}
