import { EventRepositoryWithPrisma } from '../../external';
import { CreateEvent } from '../../use-case';

export const createEventCreator = () => {
	return new CreateEvent(new EventRepositoryWithPrisma());
};
