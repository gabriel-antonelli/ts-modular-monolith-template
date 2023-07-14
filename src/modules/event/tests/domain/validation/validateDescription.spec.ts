import { isValidDescription } from '@/modules/event/domain';

describe('Description validator', () => {
	test('Should return false for description with less than 3 characters', () => {
		const description = 'ab';
		const result = isValidDescription(description);
		expect(result).toBe(false);
	});

	test('Should return false for description with more than 500 characters', () => {
		const description = 't'.repeat(501);
		const result = isValidDescription(description);
		expect(result).toBe(false);
	});

	test('Should return true for valid description with 500 characters', () => {
		const description = 't'.repeat(500);
		const result = isValidDescription(description);
		expect(result).toBe(true);
	});

	test('Should return true for valid description', () => {
		const description = 'Valid description';
		const result = isValidDescription(description);
		expect(result).toBe(true);
	});
});
