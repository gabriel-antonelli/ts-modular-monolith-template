import { Event } from '../domain';

export interface EventRepository {
	createEvent: (userId: string, event: Event) => Promise<void>;
}
