import { DomainError } from '@/modules/shared/domain';

export class InvalidDescriptionError extends Error implements DomainError {
	constructor(description: string) {
		super(`Description ${description} is invalid`);
		this.name = 'InvalidDescription';
	}
}
