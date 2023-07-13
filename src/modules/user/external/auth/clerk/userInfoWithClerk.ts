import { UserInfo } from '@/modules/user/ports/userInfo';
import clerk from '@clerk/clerk-sdk-node';

export class UserInfoWithClerk implements UserInfo {
	async isUserIdValid(id: string): Promise<boolean> {
		return !!(await clerk.users.getUser(id));
	}
}
