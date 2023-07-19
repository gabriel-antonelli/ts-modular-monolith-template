import { Router } from 'express';
import { controllerAdapter } from '@/app/adapters/controllerAdapter';
import { createEventControllerFactory } from '@/modules/event/factories/controllers/createEventControllerFactory';

export default (router: Router): void => {
	router.post('/event', controllerAdapter(createEventControllerFactory()));
};
