import {
	Controller,
	HttpResponse,
	badRequest,
	ok,
	serverError,
	validateRequest,
} from '@/modules/shared/controller';
import { CreateUserDTO } from './dto';
import { UserCreator } from '../use-case';

export class CreateUserController implements Controller {
	constructor(private readonly userCreator: UserCreator) {}
	async handle(req: CreateUserDTO): Promise<HttpResponse> {
		try {
			const isRequestValid = validateRequest(
				['name', 'email', 'password'],
				req
			);
			if (isRequestValid !== true) {
				return badRequest(isRequestValid);
			}
			const createdOrError = await this.userCreator.createUser(
				req.name,
				req.email,
				req.password
			);
			if (createdOrError instanceof Error) {
				return badRequest(createdOrError);
			}
			return ok(`Created user ${req.name}`);
		} catch (error) {
			return serverError(error as Error);
		}
	}
}
