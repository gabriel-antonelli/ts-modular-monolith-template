export class UserProfile {
	private constructor(public readonly id: string, public readonly bio: string) {
		Object.freeze(this);
	}
	static create(id: string, bio: string): UserProfile {
		return new UserProfile(id, bio);
	}
}
