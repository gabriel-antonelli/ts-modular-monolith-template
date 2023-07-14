import { mock } from 'jest-mock-extended';
import { EventCreator } from '../../use-case';
import { CreateEventController } from '../../controllers';
import { CreateEventDTO } from '../../controllers/dto';
import { InvalidSubjectError } from '../../domain';

describe('Create Event Controller', () => {
	const eventCreator = mock<EventCreator>();
	const createEventController = new CreateEventController(eventCreator);

	const baseRequest: CreateEventDTO = {
		userId: 'user123',
		user: '',
		title: 'Sample Event',
		subject: ['Mathematics', 'Science'],
		category: ['Conference', 'Workshop'],
		description: 'Sample event description',
		isPrivate: true,
		ageGroup: 'Young Adults (18-25)',
	};

	test('Should return 200 status and message', async () => {
		eventCreator.createEvent.mockResolvedValue(true);

		const response = await createEventController.handle(baseRequest);

		expect(response.body).toEqual('Created new event.');
		expect(response.statusCode).toEqual(200);
	});

	test('Should return 400 and validation error', async () => {
		const request: Partial<CreateEventDTO> = {
			...baseRequest,
			title: undefined,
		};

		const response = await createEventController.handle(
			request as CreateEventDTO
		);

		expect(response.body).toEqual('Missing param: title');
		expect(response.statusCode).toEqual(400);
	});

	test('Should return 400 and invalid subject', async () => {
		const request: Partial<CreateEventDTO> = {
			...baseRequest,
			subject: ['Mathematics', 'Sc'],
		};

		const expectedError = new InvalidSubjectError('Invalid subject: Sc');

		eventCreator.createEvent.mockResolvedValue(expectedError);

		const response = await createEventController.handle(
			request as CreateEventDTO
		);

		expect(response.body).toEqual('Invalid subject: Sc');
		expect(response.statusCode).toEqual(400);
	});

	test('Should return 500 status and internal server error message', async () => {
		const error = new Error('test exception');

		eventCreator.createEvent.mockRejectedValue(error);

		const response = await createEventController.handle(baseRequest);

		expect(response.body).toEqual('Internal Server Error');
		expect(response.statusCode).toEqual(500);
	});
});
