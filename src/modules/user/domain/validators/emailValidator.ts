export const isEmailValid = (email: string): boolean => {
	const tester = /^\S+@\S+\.\S+$/;
	if (!email || email.length > 255 || !tester.test(email)) {
		return false;
	}
	const [account, address] = email.split('@');

	if (account.length > 64) {
		return false;
	}
	const domainParts = address.split('.');
	const isPartTooLong = domainParts.some((part) => part.length > 63);

	if (isPartTooLong) {
		return false;
	}
	return true;
};
