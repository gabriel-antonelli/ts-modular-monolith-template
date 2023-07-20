import { Router } from 'express';
import { controllerAdapter } from '@/app/adapters/controllerAdapter';
import { createEventControllerFactory } from '../event';

export default (router: Router): void => {
	router.post('/event', controllerAdapter(createEventControllerFactory()));
};
