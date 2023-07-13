import { DomainError } from '@/modules/shared/domain';

export class InvalidIsPrivateError extends Error implements DomainError {
	constructor() {
		super(`IsPrivate should be a valid boolean`);
		this.name = 'InvalidIsPrivate';
	}
}
