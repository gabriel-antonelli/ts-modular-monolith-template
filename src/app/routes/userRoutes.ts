import { Router } from 'express';
import { controllerAdapter } from '../adapters/controllerAdapter';
import { createUserProfileController } from '@/modules/user/factories';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

export default (router: Router): void => {
	router.post(
		'/user-profile',
		ClerkExpressRequireAuth({}),
		controllerAdapter(createUserProfileController())
	);
};
