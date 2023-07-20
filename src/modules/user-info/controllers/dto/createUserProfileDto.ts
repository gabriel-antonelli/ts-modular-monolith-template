import { AuthDTO } from '@/modules/shared/controller';

export interface CreateUserProfileDTO extends AuthDTO {
	bio: string;
}
