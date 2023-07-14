import {
	Event,
	InvalidAgeGroupError,
	InvalidCategoryError,
	InvalidDescriptionError,
	InvalidIsPrivateError,
	InvalidSubjectError,
	InvalidTitleError,
} from '@/modules/event/domain';

describe('Event', () => {
	describe('create', () => {
		test('Should create a valid event', () => {
			const title = 'Sample Event';
			const subject = ['Mathematics', 'Science'];
			const category = ['Conference', 'Workshop'];
			const description = 'Sample event description';
			const isPrivate = false;
			const ageGroup = 'Young Adults (18-25)';

			let event = Event.create(
				title,
				subject,
				category,
				description,
				isPrivate,
				ageGroup
			);

			expect(event).toBeInstanceOf(Event);
			event = event as Event;
			expect(event.title).toBe(title);
			expect(event.subject).toEqual(subject);
			expect(event.category).toEqual(category);
			expect(event.description).toBe(description);
			expect(event.isPrivate).toBe(isPrivate);
			expect(event.ageGroup).toBe(ageGroup);
		});

		test('Should return InvalidTitleError for invalid title', () => {
			const title = '';
			const subject = ['Mathematics', 'Science'];
			const category = ['Conference', 'Workshop'];
			const description = 'Sample event description';
			const isPrivate = false;
			const ageGroup = 'Young Adults (18-25)';

			let result = Event.create(
				title,
				subject,
				category,
				description,
				isPrivate,
				ageGroup
			);

			expect(result).toBeInstanceOf(InvalidTitleError);
			result = result as InvalidTitleError;
			expect(result.message).toBe(`Title ${title} is invalid`);
		});

		test('Should return InvalidDescriptionError for invalid description', () => {
			const title = 'Sample Event';
			const subject = ['Mathematics', 'Science'];
			const category = ['Conference', 'Workshop'];
			const description = '';
			const isPrivate = false;
			const ageGroup = 'Young Adults (18-25)';

			let result = Event.create(
				title,
				subject,
				category,
				description,
				isPrivate,
				ageGroup
			);

			expect(result).toBeInstanceOf(InvalidDescriptionError);
			result = result as InvalidDescriptionError;
			expect(result.message).toBe(`Description ${description} is invalid`);
		});

		test('Should return InvalidAgeGroupError for invalid age group', () => {
			const title = 'Sample Event';
			const subject = ['Mathematics', 'Science'];
			const category = ['Conference', 'Workshop'];
			const description = 'Sample event description';
			const isPrivate = false;
			const ageGroup = 'Invalid Age Group';

			let result = Event.create(
				title,
				subject,
				category,
				description,
				isPrivate,
				ageGroup
			);

			expect(result).toBeInstanceOf(InvalidAgeGroupError);
			result = result as InvalidAgeGroupError;
			expect(result.message).toBe(`Age Group ${ageGroup} is invalid`);
		});

		test('Should return InvalidIsPrivateError for invalid isPrivate', () => {
			const title = 'Sample Event';
			const subject = ['Mathematics', 'Science'];
			const category = ['Conference', 'Workshop'];
			const description = 'Sample event description';
			const isPrivate = null;
			const ageGroup = 'Young Adults (18-25)';

			let result = Event.create(
				title,
				subject,
				category,
				description,
				//eslint-disable-next-line
				isPrivate as any,
				ageGroup
			);

			expect(result).toBeInstanceOf(InvalidIsPrivateError);
			result = result as InvalidIsPrivateError;
			expect(result.message).toBe('IsPrivate should be a valid boolean');
		});
		test('Should return InvalidSubjectError for invalid subject', () => {
			const title = 'Sample Event';
			const subject = ['Valid', 'in'];
			const category = ['Conference', 'Workshop'];
			const description = 'Sample event description';
			const isPrivate = false;
			const ageGroup = 'Young Adults (18-25)';

			let result = Event.create(
				title,
				subject,
				category,
				description,
				isPrivate,
				ageGroup
			);

			expect(result).toBeInstanceOf(InvalidSubjectError);
			result = result as InvalidSubjectError;
			expect(result.message).toBe(`Invalid subject: ${subject[1]}`);
		});

		test('Should return InvalidCategoryError for invalid category', () => {
			const title = 'Sample Event';
			const subject = ['Mathematics', 'Science'];
			const category = ['Valid', 'in'];
			const description = 'Sample event description';
			const isPrivate = false;
			const ageGroup = 'Young Adults (18-25)';

			let result = Event.create(
				title,
				subject,
				category,
				description,
				isPrivate,
				ageGroup
			);

			expect(result).toBeInstanceOf(InvalidCategoryError);
			result = result as InvalidCategoryError;
			expect(result.message).toBe(`Invalid category: ${category[1]}`);
		});
	});
});
