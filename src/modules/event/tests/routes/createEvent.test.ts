import { server } from '@/app';
import { prisma } from '@/config/prisma/prismaClient';
import request from 'supertest';

describe('POST /v1/event', () => {
	const uri = '/api/v1/event';

	beforeEach(async () => {
		await prisma.event.deleteMany();
		await prisma.userProfile.deleteMany();
		await prisma.userProfile.create({
			data: {
				Id: 'test',
			},
		});
	});

	afterAll(async () => {
		await prisma.event.deleteMany();
		await prisma.userProfile.deleteMany();
		await prisma.$disconnect();
		server.close();
	});

	test('Should return 200 and created event', async () => {
		const requestBody = {
			userId: 'test',
			category: ['Seminar'],
			title: 'Sample Event',
			subject: ['Mathematics', 'Science'],
			description: 'test',
			isPrivate: false,
			ageGroup: 'Young Adults (18-25)',
		};

		const response = await request(server).post(uri).send(requestBody);

		expect(response.statusCode).toEqual(200);
		expect(response.body).toEqual('Created new event.');

		const event = await prisma.event.findFirst();

		expect(event).not.toBeNull();
		expect(event?.UserId).toEqual(requestBody.userId);
		expect(event?.Category).toEqual(requestBody.category);
		expect(event?.Title).toEqual(requestBody.title);
		expect(event?.Subject).toEqual(requestBody.subject);
		expect(event?.Description).toEqual(requestBody.description);
		expect(event?.IsPrivate).toEqual(requestBody.isPrivate);
		expect(event?.AgeGroup).toEqual(requestBody.ageGroup);
	});
	test('Should return 400 and missing param error', async () => {
		const requestBody = {
			// Missing userId
			category: ['Seminar'],
			title: 'Sample Event',
			subject: ['Mathematics', 'Science'],
			description: 'test',
			isPrivate: false,
			ageGroup: 'Young Adults (18-25)',
		};

		const response = await request(server).post(uri).send(requestBody);

		expect(response.statusCode).toEqual(400);
		expect(response.body).toEqual('Missing param: userId');
	});

	test('Should return 400 and invalid subject error', async () => {
		const requestBody = {
			userId: 'test',
			category: ['Seminar'],
			title: 'Sample Event',
			subject: ['Ma'], // Invalid subject with less than 3 characters
			description: 'test',
			isPrivate: false,
			ageGroup: 'Young Adults (18-25)',
		};

		const response = await request(server).post(uri).send(requestBody);

		expect(response.statusCode).toEqual(400);
		expect(response.body).toEqual('Invalid subject: Ma');
	});

	test('Should return 500 and internal server error', async () => {
		const requestBody = {
			userId: 'invalidUserId', // Wrong userId that will cause prisma create to fail
			category: ['Seminar'],
			title: 'Sample Event',
			subject: ['Mathematics', 'Science'],
			description: 'test',
			isPrivate: false,
			ageGroup: 'Young Adults (18-25)',
		};

		const response = await request(server).post(uri).send(requestBody);

		expect(response.statusCode).toEqual(500);
		expect(response.body).toEqual('Internal Server Error');
	});
});
