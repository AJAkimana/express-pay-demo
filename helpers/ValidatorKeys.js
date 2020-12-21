import Joi from 'joi';

export class ValidatorKeys {
	getAuthKeys() {
		const login = {
			username: Joi.string().required(),
			password: Joi.string().required()
		};
		return login;
	}
}
