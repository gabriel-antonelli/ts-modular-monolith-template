import { DomainError } from '@/modules/shared/domain';

export class InvalidTitleError extends Error implements DomainError {
	constructor(title: string) {
		super(`Title ${title} is invalid`);
		this.name = 'InvalidTitle';
	}
}
