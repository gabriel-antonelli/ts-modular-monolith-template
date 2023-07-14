import { InvalidCategoryError, isValidCategory } from '@/modules/event/domain';

describe('Category validator', () => {
	test('Should return error if categories is null or empty', () => {
		const categories: string[] = [];
		const result = isValidCategory(categories);
		expect(result).toBeInstanceOf(InvalidCategoryError);
		expect(result?.message).toBe('Category cannot be null or empty');
	});

	test('Should return error if any category is invalid', () => {
		const categories = ['Conference', 's'];
		const result = isValidCategory(categories);
		expect(result).toBeInstanceOf(InvalidCategoryError);
		expect(result?.message).toBe('Invalid category: s');
	});

	test('Should not return error if all categories are valid', () => {
		const categories = ['Conference', 'Workshop'];
		const result = isValidCategory(categories);
		expect(result).not.toBeInstanceOf(InvalidCategoryError);
	});
});
