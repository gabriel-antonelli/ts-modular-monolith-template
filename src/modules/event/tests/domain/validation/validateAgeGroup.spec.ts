import { isValidAgeGroup } from '@/modules/event/domain';

describe('Age Group validator', () => {
	test('Should return true for valid age group', () => {
		expect(isValidAgeGroup('Young Adults (18-25)')).toBeTruthy();
	});

	test('Should return false for empty age group', () => {
		expect(isValidAgeGroup('')).toBeFalsy();
	});

	test('Should return false for invalid age group', () => {
		expect(isValidAgeGroup('Invalid Age Group')).toBeFalsy();
	});
});
