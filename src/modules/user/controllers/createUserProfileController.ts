import {
	Controller,
	HttpResponse,
	badRequest,
	ok,
	serverError,
	validateRequest,
} from '@/modules/shared/controller';
import { CreateUserProfileDTO } from './dto';
import { UserProfileCreator } from '../use-case';

export class CreateUserProfileController implements Controller {
	constructor(private readonly userProfileCreator: UserProfileCreator) {}
	async handle(req: CreateUserProfileDTO): Promise<HttpResponse> {
		try {
			const isRequestValid = validateRequest(['id', 'bio'], req);
			if (isRequestValid !== true) {
				return badRequest(isRequestValid);
			}
			const createdOrError = await this.userProfileCreator.createUserProfile(
				req.id,
				req.bio
			);
			if (createdOrError instanceof Error) {
				return badRequest(createdOrError);
			}
			return ok('Created user profile.');
		} catch (error) {
			return serverError(error as Error);
		}
	}
}
