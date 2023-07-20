import { prisma } from '@/config/prisma/prismaClient';
import { UserProfileRepository } from '@/modules/user-info/ports';

export class UserProfileRepositoryWithPrisma implements UserProfileRepository {
	async createUserProfile(id: string, bio: string): Promise<void> {
		await prisma.userProfile.create({
			data: {
				Id: id,
				Bio: bio,
			},
		});
	}
	async isUserSaved(id: string): Promise<boolean> {
		return (
			(await prisma.userProfile.findFirst({
				where: {
					Id: id,
				},
			})) !== null
		);
	}
}
