import {
	Controller,
	HttpResponse,
	badRequest,
	ok,
	serverError,
	validateRequest,
} from '@/modules/shared/controller';
import { CreateEventDTO } from './dto';
import { EventCreator } from '../use-case';

export class CreateEventController implements Controller {
	constructor(private readonly eventCreator: EventCreator) {}
	async handle(req: CreateEventDTO): Promise<HttpResponse> {
		try {
			const isRequestValid = validateRequest(
				[
					'userId',
					'title',
					'subject',
					'category',
					'description',
					'isPrivate',
					'ageGroup',
				],
				req
			);
			if (isRequestValid !== true) {
				return badRequest(isRequestValid);
			}
			const createEventOrError = await this.eventCreator.createEvent(
				req.userId,
				req.title,
				req.subject,
				req.category,
				req.description,
				req.isPrivate,
				req.ageGroup
			);
			if (createEventOrError instanceof Error) {
				return badRequest(createEventOrError);
			}
			return ok('Created new event.');
		} catch (error) {
			return serverError(error as Error);
		}
	}
}
