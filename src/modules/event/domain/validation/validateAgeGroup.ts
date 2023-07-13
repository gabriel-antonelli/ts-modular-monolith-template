import { AgeGroup } from '../enums';

export const isValidAgeGroup = (ageGroup: string) => {
	if (!ageGroup) {
		return false;
	}
	const ageGroups = Object.values(AgeGroup);

	for (const ageGroup of ageGroups) {
		if (ageGroup === ageGroup) {
			return true;
		}
	}
	return false;
};
