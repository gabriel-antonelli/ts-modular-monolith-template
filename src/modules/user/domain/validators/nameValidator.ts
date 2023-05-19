export const isNameValid = (name: string): boolean => {
	if (!name || name.trim().length < 2 || name.trim().length > 255) {
		return false;
	}
	return true;
};
