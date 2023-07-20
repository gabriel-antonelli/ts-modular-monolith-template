import { server } from '@/app';
import { prisma } from '@/config/prisma/prismaClient';
import request from 'supertest';

describe('POST /v1/user-profile', () => {
	const uri = '/api/v1/user-profile';

	beforeEach(async () => {
		await prisma.userProfile.deleteMany();
	});

	afterAll(async () => {
		await prisma.userProfile.deleteMany();
		await prisma.$disconnect();
		server.close();
	});

	test('Should return 200 and created user profile', async () => {
		const requestBody = {
			userId: 'test',
			bio: 'Sample bio',
		};

		const response = await request(server).post(uri).send(requestBody);

		expect(response.statusCode).toEqual(200);
		expect(response.body).toEqual('Created user profile.');

		const userProfile = await prisma.userProfile.findFirst();

		expect(userProfile).not.toBeNull();
		expect(userProfile?.Id).toEqual(requestBody.userId);
		expect(userProfile?.Bio).toEqual(requestBody.bio);
	});

	test('Should return 400 and missing param error', async () => {
		const requestBody = {
			// Missing userId
			bio: 'Sample bio',
		};

		const response = await request(server).post(uri).send(requestBody);

		expect(response.statusCode).toEqual(400);
		expect(response.body).toEqual('Missing param: userId');
	});

	test('Should return 409 and user profile already saved error', async () => {
		await prisma.userProfile.create({
			data: {
				Id: 'test',
			},
		});
		const requestBody = {
			userId: 'test',
			bio: 'Sample bio',
		};

		const response = await request(server).post(uri).send(requestBody);

		expect(response.statusCode).toEqual(409);
		expect(response.body).toEqual('User profile already saved');
	});
});
