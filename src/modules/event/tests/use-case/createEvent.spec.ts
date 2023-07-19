import { mock } from 'jest-mock-extended';
import { Event } from '../../domain';
import { EventRepository } from '../../ports';
import { InvalidSubjectError } from '../../domain/errors';
import { CreateEvent, EventCreator } from '../../use-case';

const userId = 'user123';
const title = 'Sample Event';
const baseSubject = ['Mathematics', 'Science'];
const category = ['Conference', 'Workshop'];
const description = 'Sample event description';
const isPrivate = true;
const ageGroup = 'Young Adults (18-25)';

describe('CreateEvent', () => {
	const eventRepository = mock<EventRepository>();
	const eventCreator: EventCreator = new CreateEvent(eventRepository);

	test('Should create and save event', async () => {
		const result = await eventCreator.createEvent(
			userId,
			title,
			baseSubject,
			category,
			description,
			isPrivate,
			ageGroup
		);

		expect(result).toEqual(true);
		expect(eventRepository.createEvent).toHaveBeenCalledWith(
			userId,
			expect.any(Event)
		);
	});

	test('Should return error when creating event with invalid title', async () => {
		let result = await eventCreator.createEvent(
			userId,
			'',
			baseSubject,
			category,
			description,
			isPrivate,
			ageGroup
		);

		expect(result).toBeInstanceOf(Error);
		result = result as Error;
		expect(result.message).toEqual('Title  is invalid');
		expect(eventRepository.createEvent).toHaveBeenCalledTimes(1);
	});

	test('Should return error when creating event with invalid subject', async () => {
		const invalidSubject: string[] = [];

		const expectedError = new InvalidSubjectError(
			'Subject cannot be null or empty'
		);

		const result = await eventCreator.createEvent(
			userId,
			title,
			invalidSubject,
			category,
			description,
			isPrivate,
			ageGroup
		);

		expect(result).toEqual(expectedError);
		expect(eventRepository.createEvent).toHaveBeenCalledTimes(1);
	});

	test('Should return error when repository throws an error', async () => {
		const repositoryError = 'Test repository error';
		eventRepository.createEvent.mockRejectedValueOnce(
			new Error(repositoryError)
		);

		try {
			await eventCreator.createEvent(
				userId,
				title,
				baseSubject,
				category,
				description,
				isPrivate,
				ageGroup
			);
		} catch (error) {
			const castedError = error as Error;
			expect(castedError.message).toEqual(repositoryError);
		}

		expect(eventRepository.createEvent).toHaveBeenCalledWith(
			userId,
			expect.any(Event)
		);
	});
});
