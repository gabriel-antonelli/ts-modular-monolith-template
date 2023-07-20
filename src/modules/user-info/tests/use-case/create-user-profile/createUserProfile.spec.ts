import { UserProfileRepository } from '@/modules/user-info/ports';
import {
	CreateUserProfile,
	UserProfileAlreadySavedError,
} from '@/modules/user-info/use-case';
import { mock } from 'jest-mock-extended';

const userId = 'user123';
const bio = 'Sample bio';

describe('CreateUserProfile', () => {
	const userProfileRepository = mock<UserProfileRepository>();
	const createUserProfile: CreateUserProfile = new CreateUserProfile(
		userProfileRepository
	);

	test('Should create and save user profile', async () => {
		userProfileRepository.isUserSaved.mockResolvedValue(false);

		const result = await createUserProfile.createOrUpdateUserProfile(
			userId,
			bio
		);

		expect(result).toEqual(true);
		expect(userProfileRepository.isUserSaved).toHaveBeenCalledWith(userId);
		expect(userProfileRepository.createUserProfile).toHaveBeenCalledWith(
			userId,
			bio
		);
	});

	test('Should return UserProfileAlreadySavedError when user profile is already saved', async () => {
		userProfileRepository.isUserSaved.mockResolvedValue(true);

		const result = await createUserProfile.createOrUpdateUserProfile(
			userId,
			bio
		);

		expect(result).toBeInstanceOf(UserProfileAlreadySavedError);
	});

	test('Should return error when repository throws an error', async () => {
		const repositoryError = 'Test repository error';
		userProfileRepository.isUserSaved.mockResolvedValue(false);
		userProfileRepository.createUserProfile.mockRejectedValueOnce(
			new Error(repositoryError)
		);

		try {
			await createUserProfile.createOrUpdateUserProfile(userId, bio);
		} catch (error) {
			const castedError = error as Error;
			expect(castedError.message).toEqual(repositoryError);
		}

		expect(userProfileRepository.isUserSaved).toHaveBeenCalledWith(userId);
		expect(userProfileRepository.createUserProfile).toHaveBeenCalledWith(
			userId,
			bio
		);
	});
});
