import { DomainError } from '@/modules/shared/domain';
import { AgeGroup } from './enums';
import {
	InvalidAgeGroupError,
	InvalidDescriptionError,
	InvalidIsPrivateError,
	InvalidTitleError,
} from './errors';
import {
	isValidAgeGroup,
	isValidCategory,
	isValidDescription,
	isValidSubject,
	isValidTitle,
} from './validation';

export class Event {
	private constructor(
		public readonly title: string,
		public readonly subject: string[],
		public readonly category: string[],
		public readonly description: string,
		public readonly isPrivate: boolean,
		public readonly ageGroup: AgeGroup
	) {
		Object.freeze(this);
	}
	static create(
		title: string,
		subject: string[],
		category: string[],
		description: string,
		isPrivate: boolean,
		ageGroup: string
	): Event | DomainError {
		if (!isValidTitle(title)) {
			return new InvalidTitleError(title);
		}
		if (!isValidDescription(description)) {
			return new InvalidDescriptionError(description);
		}
		if (!isValidAgeGroup(ageGroup)) {
			return new InvalidAgeGroupError(ageGroup);
		}
		const validSubjectOrError = isValidSubject(subject);
		if (validSubjectOrError instanceof Error) {
			return validSubjectOrError as DomainError;
		}
		const validCategotyOrError = isValidCategory(category);
		if (validCategotyOrError instanceof Error) {
			return validCategotyOrError as DomainError;
		}
		if (typeof isPrivate !== 'boolean') {
			return new InvalidIsPrivateError();
		}
		return new Event(
			title,
			subject,
			category,
			description,
			isPrivate,
			ageGroup as AgeGroup
		);
	}
}
