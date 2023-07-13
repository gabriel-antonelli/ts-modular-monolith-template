import { DomainError } from '@/modules/shared/domain';

export class InvalidAgeGroupError extends Error implements DomainError {
	constructor(ageGroup: string) {
		super(`Age Group ${ageGroup} is invalid`);
		this.name = 'InvalidAgeGroup';
	}
}
