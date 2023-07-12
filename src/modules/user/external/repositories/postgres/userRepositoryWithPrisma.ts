import { prisma } from '@/config/prisma/prismaClient';
import { UserRepository } from '@/modules/user/ports';

export class UserRepositoryWithPrisma implements UserRepository {
	async createProfile(id: string, bio: string): Promise<void> {
		await prisma.userProfile.create({
			data: {
				Id: id,
				Bio: bio,
			},
		});
	}
}
