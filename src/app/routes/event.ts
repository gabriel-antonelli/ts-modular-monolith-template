import { Router } from 'express';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { controllerAdapter } from '@/app/adapters/controllerAdapter';
import { createEventControllerFactory } from '@/modules/event/factories/controllers/createEventControllerFactory';

export default (router: Router): void => {
	router.post(
		'/event',
		ClerkExpressRequireAuth({}),
		controllerAdapter(createEventControllerFactory())
	);
};
