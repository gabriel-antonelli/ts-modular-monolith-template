import { InvalidCategoryError } from '../errors';

export const isValidCategory = (categories: string[]) => {
	if (!categories || categories.length === 0) {
		return new InvalidCategoryError('Category cannot be null or empty');
	}

	for (const category of categories) {
		if (!category || category.length < 3 || category.length > 50) {
			return new InvalidCategoryError(`Invalid category: ${category}`);
		}
	}
};
