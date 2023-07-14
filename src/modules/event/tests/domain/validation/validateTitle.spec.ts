import { isValidTitle } from '@/modules/event/domain';

describe('Title validator', () => {
	test('Should return false for title with less than 3 characters', () => {
		const title = 'ab';
		const result = isValidTitle(title);
		expect(result).toBe(false);
	});

	test('Should return false for title with more than 200 characters', () => {
		const title = 't'.repeat(201);
		const result = isValidTitle(title);
		expect(result).toBe(false);
	});

	test('Should return true for title with exactly 200 characters', () => {
		const title = 't'.repeat(200);
		const result = isValidTitle(title);
		expect(result).toBe(true);
	});

	test('Should return true for valid title', () => {
		const title = 'Valid title';
		const result = isValidTitle(title);
		expect(result).toBe(true);
	});
});
