import { DomainError } from '@/modules/shared/domain';

export interface EventCreator {
	createEvent: (
		userId: string,
		title: string,
		subject: string[],
		category: string[],
		description: string,
		isPrivate: boolean,
		ageGroup: string
	) => Promise<true | DomainError>;
}
