import { DomainError } from '@/modules/shared/domain';

export class InvalidCategoryError extends Error implements DomainError {
	constructor(customInvalidCategoryMessage: string) {
		super(customInvalidCategoryMessage);
		this.name = 'InvalidCategory';
	}
}
