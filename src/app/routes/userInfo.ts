import { Router } from 'express';
import { controllerAdapter } from '@/app/adapters/controllerAdapter';
import { createUserProfileController } from '@/modules/user-info';

export default (router: Router): void => {
	router.post(
		'/user-profile',
		controllerAdapter(createUserProfileController())
	);
};
