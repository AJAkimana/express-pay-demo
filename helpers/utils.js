import jwt, { verify } from 'jsonwebtoken';
import { mockUsers } from './constants';
import { QueryHelper } from './QueryHelper';

// Set defaut SECRET  for the demo purpose
const SECRET_KEY = process.env.SECRET || 'kdsHDSKH242&%$$22';

const userDb = new QueryHelper(mockUsers);
/**
 *
 * @param {Response} res Server response
 * @param {Number} statusCode Status code
 * @param {string} message Response message
 * @param {*} data Response data
 */
export const serverResponse = (res, statusCode, message, data) => {
	const messageType = statusCode >= 400 ? 'error' : 'message';
	return res
		.status(statusCode)
		.json({ status: statusCode, [messageType]: message, data });
};
export const renderPage = (res, page, data) => {
	const pageData = {
		title: 'APTest',
		...data
	};
	return res.render(page, pageData);
};
/**
 *
 * @param {Object} userInfo User info to generate the token from
 */
export const generatJWT = (userInfo) => {
	const token = jwt.sign(userInfo, SECRET_KEY, { expiresIn: '1w' });
	return token;
};
/**
 *
 * @param {*} req
 */
export const authenticatedUser = (req) => {
	const { headers } = req;
	const token = headers.authorization;
	try {
		const { id } = verify(token, SECRET_KEY);
		const user = userDb.findOne('id', id);
		if (user.id) {
			return user;
		}
	} catch (error) {
		return null;
	}
	return null;
};
