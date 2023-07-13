import { DomainError } from '@/modules/shared/domain';

export class InvalidSubjectError extends Error implements DomainError {
	constructor(customInvalidSubjectMessage: string) {
		super(customInvalidSubjectMessage);
		this.name = 'InvalidSubject';
	}
}
