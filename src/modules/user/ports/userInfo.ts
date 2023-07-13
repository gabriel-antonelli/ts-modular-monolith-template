export interface UserInfo {
	isUserIdValid: (id: string) => Promise<boolean>;
}
