export interface UserRepository {
	createOrUpdateUserProfile: (id: string, bio: string) => Promise<void>;
}
