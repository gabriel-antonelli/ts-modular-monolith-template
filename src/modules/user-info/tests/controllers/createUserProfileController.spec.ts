import { mock } from 'jest-mock-extended';
import {
	UserProfileAlreadySavedError,
	UserProfileCreator,
} from '../../use-case';
import { CreateUserProfileController } from '../../controllers';
import { CreateUserProfileDTO } from '../../controllers/dto';

describe('Create User Profile Controller', () => {
	const userProfileCreator = mock<UserProfileCreator>();
	const createUserProfileController = new CreateUserProfileController(
		userProfileCreator
	);

	const baseRequest: CreateUserProfileDTO = {
		userId: 'user123',
		bio: 'Sample bio',
		user: '',
	};

	test('Should return 200 status and message', async () => {
		userProfileCreator.createOrUpdateUserProfile.mockResolvedValue(true);

		const response = await createUserProfileController.handle(baseRequest);

		expect(response.body).toEqual('Created user profile.');
		expect(response.statusCode).toEqual(200);
	});

	test('Should return 400 and validation error', async () => {
		const request: Partial<CreateUserProfileDTO> = {
			...baseRequest,
			userId: undefined,
		};

		const response = await createUserProfileController.handle(
			request as CreateUserProfileDTO
		);

		expect(response.body).toEqual('Missing param: userId');
		expect(response.statusCode).toEqual(400);
	});

	test('Should return 409 and user profile already saved error', async () => {
		userProfileCreator.createOrUpdateUserProfile.mockResolvedValue(
			new UserProfileAlreadySavedError()
		);

		const response = await createUserProfileController.handle(baseRequest);

		expect(response.body).toEqual('User profile already saved');
		expect(response.statusCode).toEqual(409);
	});

	test('Should return 500 status and internal server error message', async () => {
		const error = new Error('test exception');

		userProfileCreator.createOrUpdateUserProfile.mockRejectedValue(error);

		const response = await createUserProfileController.handle(baseRequest);

		expect(response.body).toEqual('Internal Server Error');
		expect(response.statusCode).toEqual(500);
	});
});
