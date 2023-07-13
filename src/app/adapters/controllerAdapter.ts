import { Request, Response } from 'express';
import { Controller } from '@/modules/shared/controller';
import { StrictAuthProp, WithAuthProp } from '@clerk/clerk-sdk-node';

declare global {
	/* eslint-disable @typescript-eslint/no-namespace, @typescript-eslint/no-empty-interface */
	namespace Express {
		interface Request extends StrictAuthProp {}
	}
}

export const controllerAdapter = (controller: Controller) => {
	return async (
		req: WithAuthProp<Request>,
		res: Response
	): Promise<Response> => {
		const httpRequest = {
			...(req.body || {}),
			...(req.params || {}),
			...(req.auth || {}),
		};
		const httpResponse = await controller.handle(httpRequest);
		return res.status(httpResponse.statusCode).json(httpResponse.body);
	};
};
