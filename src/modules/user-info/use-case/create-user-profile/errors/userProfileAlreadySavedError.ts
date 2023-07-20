import { UseCaseError } from '@/modules/shared/use-case';

export class UserProfileAlreadySavedError
	extends Error
	implements UseCaseError
{
	constructor() {
		super(`User profile already saved`);
		this.name = 'UserProfileAlreadySaved';
	}
}
