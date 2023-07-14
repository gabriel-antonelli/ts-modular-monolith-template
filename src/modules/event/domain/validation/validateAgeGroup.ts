import { AgeGroup } from '../enums';

export const isValidAgeGroup = (ageGroup: string) => {
	if (!ageGroup) {
		return false;
	}
	const ageGroups = Object.values(AgeGroup);

	for (const ageGroupValue of ageGroups) {
		if (ageGroupValue === ageGroup) {
			return true;
		}
	}
	return false;
};
