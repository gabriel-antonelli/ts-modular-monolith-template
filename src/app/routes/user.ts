import { Router } from 'express';
import { createUserProfileController } from '@/modules/user/factories';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { controllerAdapter } from '@/app/adapters/controllerAdapter';

export default (router: Router): void => {
	router.post(
		'/user-profile',
		ClerkExpressRequireAuth({}),
		controllerAdapter(createUserProfileController())
	);
};
