export interface UserProfileRepository {
	createUserProfile: (id: string, bio: string) => Promise<void>;
	isUserSaved: (id: string) => Promise<boolean>;
}
