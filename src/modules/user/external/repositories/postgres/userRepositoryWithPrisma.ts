import { prisma } from '@/config/prisma/prismaClient';
import { UserRepository } from '@/modules/user/ports';

export class UserRepositoryWithPrisma implements UserRepository {
	async createOrUpdateUserProfile(id: string, bio: string): Promise<void> {
		await prisma.userProfile.upsert({
			where: {
				Id: id,
			},
			update: {
				Bio: bio,
			},
			create: {
				Id: id,
				Bio: bio,
			},
		});
	}
}
