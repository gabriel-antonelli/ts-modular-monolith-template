import { InvalidSubjectError } from '../errors';

export const isValidSubject = (subjects: string[]) => {
	if (!subjects || subjects.length === 0) {
		return new InvalidSubjectError('Subject cannot be null or empty');
	}

	for (const subject of subjects) {
		if (!subject || subject.length < 3 || subject.length > 50) {
			return new InvalidSubjectError(`Invalid subject: ${subject}`);
		}
	}
};
