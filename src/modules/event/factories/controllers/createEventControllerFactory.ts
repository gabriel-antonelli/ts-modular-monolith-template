import { CreateEventController } from '../../controllers';
import { Controller } from '@/modules/shared/controller';
import { createEventCreator } from '../use-case';

export const createEventControllerFactory = (): Controller => {
	return new CreateEventController(createEventCreator());
};
