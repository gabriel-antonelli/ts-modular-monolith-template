export interface UserRepository {
	create: (name: string, email: string, password: string) => Promise<void>;
}
