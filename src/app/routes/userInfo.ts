import { Router } from 'express';
import { createUserProfileController } from '@/modules/user/factories';
import { controllerAdapter } from '@/app/adapters/controllerAdapter';

export default (router: Router): void => {
	router.post(
		'/user-profile',
		controllerAdapter(createUserProfileController())
	);
};
