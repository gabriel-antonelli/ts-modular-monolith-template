import { Router } from 'express';
import { createUserController } from '@/modules/user';
import { controllerAdapter } from '../adapters/controllerAdapter';

export default (router: Router): void => {
	router.post('/user', controllerAdapter(createUserController()));
};
