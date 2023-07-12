export interface UserRepository {
	createProfile: (id: string, bio: string) => Promise<void>;
}
