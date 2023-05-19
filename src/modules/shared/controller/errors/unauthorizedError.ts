import { ControllerError } from './controllerError';

export class UnauthorizedError extends Error implements ControllerError {
	constructor() {
		super('Unauthorized Request');
		this.name = 'UnauthorizedError';
	}
}
