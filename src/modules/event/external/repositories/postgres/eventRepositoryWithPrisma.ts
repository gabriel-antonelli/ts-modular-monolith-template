import { prisma } from '@/config/prisma/prismaClient';
import { Event } from '@/modules/event/domain';
import { EventRepository } from '@/modules/event/ports';

export class EventRepositoryWithPrisma implements EventRepository {
	async createEvent(userId: string, event: Event): Promise<void> {
		await prisma.event.create({
			data: {
				UserId: userId,
				Title: event.title,
				Subject: event.subject,
				Category: event.category,
				Description: event.description,
				IsPrivate: event.isPrivate,
				AgeGroup: event.ageGroup,
			},
		});
	}
}
