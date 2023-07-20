import {
	Controller,
	HttpResponse,
	badRequest,
	conflict,
	ok,
	serverError,
	validateRequest,
} from '@/modules/shared/controller';
import { CreateUserProfileDTO } from './dto';
import { UserProfileAlreadySavedError, UserProfileCreator } from '../use-case';

export class CreateUserProfileController implements Controller {
	constructor(private readonly userProfileCreator: UserProfileCreator) {}
	async handle(req: CreateUserProfileDTO): Promise<HttpResponse> {
		try {
			const isRequestValid = validateRequest(['userId', 'bio'], req);
			if (isRequestValid !== true) {
				return badRequest(isRequestValid);
			}
			const createdOrError =
				await this.userProfileCreator.createOrUpdateUserProfile(
					req.userId,
					req.bio
				);
			if (createdOrError instanceof UserProfileAlreadySavedError) {
				return conflict(createdOrError);
			}
			return ok('Created user profile.');
		} catch (error) {
			return serverError(error as Error);
		}
	}
}
