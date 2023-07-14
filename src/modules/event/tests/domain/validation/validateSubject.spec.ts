import { InvalidSubjectError, isValidSubject } from '@/modules/event/domain';

describe('Subject validator', () => {
	test('Should return error if subjects is null or empty', () => {
		const subjects: string[] = [];
		const result = isValidSubject(subjects);
		expect(result).toBeInstanceOf(InvalidSubjectError);
		expect(result?.message).toBe('Subject cannot be null or empty');
	});

	test('Should return error if any subject is invalid', () => {
		const subjects = ['Math', 's'];
		const result = isValidSubject(subjects);
		expect(result).toBeInstanceOf(InvalidSubjectError);
		expect(result?.message).toBe('Invalid subject: s');
	});

	test('Should not return error if all subjects are valid', () => {
		const subjects = ['Math', 'Science'];
		const result = isValidSubject(subjects);
		expect(result).not.toBeInstanceOf(InvalidSubjectError);
	});
});
