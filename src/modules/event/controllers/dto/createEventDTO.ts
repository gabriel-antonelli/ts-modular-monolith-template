import { AuthDTO } from '@/modules/shared/controller';

export interface CreateEventDTO extends AuthDTO {
	title: string;
	subject: string[];
	category: string[];
	description: string;
	isPrivate: boolean;
	ageGroup: string;
}
