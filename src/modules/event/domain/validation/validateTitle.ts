export const isValidTitle = (title: string) => {
	if (!title || title.length < 3 || title.length > 200) {
		return false;
	}
	return true;
};
