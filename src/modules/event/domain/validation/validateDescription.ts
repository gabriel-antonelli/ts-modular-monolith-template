export const isValidDescription = (description: string) => {
	if (!description || description.length < 3 || description.length > 500) {
		return false;
	}
	return true;
};
