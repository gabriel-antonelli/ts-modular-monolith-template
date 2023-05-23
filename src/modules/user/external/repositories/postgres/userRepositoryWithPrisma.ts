import { prisma } from '@/config/prisma/prismaClient';
import { UserRepository } from '@/modules/user/ports';

export class UserRepositoryWithPrisma implements UserRepository {
	async create(name: string, email: string, password: string): Promise<void> {
		await prisma.user.create({
			data: {
				Name: name,
				Email: email,
				Password: password,
			},
		});
	}
}
