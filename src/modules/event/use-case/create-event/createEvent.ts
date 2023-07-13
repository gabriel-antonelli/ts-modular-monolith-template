import { DomainError } from '@/modules/shared/domain';
import { EventCreator } from './eventCreator';
import { Event } from '../../domain';
import { EventRepository } from '../../ports';

export class CreateEvent implements EventCreator {
	constructor(private readonly eventRepository: EventRepository) {}

	async createEvent(
		userId: string,
		title: string,
		subject: string[],
		category: string[],
		description: string,
		isPrivate: boolean,
		ageGroup: string
	): Promise<true | DomainError> {
		const event = Event.create(
			title,
			subject,
			category,
			description,
			isPrivate,
			ageGroup
		);
		if (event instanceof Error) {
			return event;
		}
		await this.eventRepository.createEvent(userId, event as Event);
		return true;
	}
}
