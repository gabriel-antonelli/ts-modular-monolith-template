import {
	InvalidEmailError,
	InvalidNameError,
	InvalidPasswordError,
} from './errors';
import { isEmailValid, isNameValid, isPasswordValid } from './validators';

export class User {
	private constructor(
		public readonly name: string,
		public readonly email: string,
		public readonly password: string
	) {
		Object.freeze(this);
	}
	static create(
		name: string,
		email: string,
		password: string
	): User | InvalidNameError | InvalidEmailError | InvalidPasswordError {
		if (isNameValid(name) === false) {
			return new InvalidNameError(name);
		}
		if (isEmailValid(email) === false) {
			return new InvalidEmailError(email);
		}
		if (isPasswordValid(password) === false) {
			return new InvalidPasswordError();
		}
		return new User(name, email, password);
	}
}
