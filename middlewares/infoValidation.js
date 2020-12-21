import { Validator, serverResponse } from '../helpers';

export const isLoginInfoValid = (req, res, next) => {
	let validator = new Validator(req.body);
	const { error } = validator.validateInput('user');
	if (!error) return next();

	const errorMsg = validator.getErrorMessage(error);
	return serverResponse(res, 400, errorMsg);
};
