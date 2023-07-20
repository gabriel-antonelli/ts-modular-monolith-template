import { Router } from 'express';
import { controllerAdapter } from '@/app/adapters/controllerAdapter';
import { createEventControllerFactory } from '@/modules/event';

export default (router: Router): void => {
	router.post('/event', controllerAdapter(createEventControllerFactory()));
};
