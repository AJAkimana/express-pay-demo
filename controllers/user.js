import {
	serverResponse,
	generatJWT,
	QueryHelper,
	mockUsers,
	msgs
} from '../helpers';

const userDb = new QueryHelper(mockUsers);
export const loginUser = (req, res) => {
	const { username, password } = req.body;
	let user = userDb.findOne('username', username);
	if (!user) {
		return serverResponse(res, 401, msgs.INVALID_USERNAME);
	}
	if (user.password !== password) {
		return serverResponse(res, 401, msgs.INVALID_PWD);
	}
	user.token = generatJWT({ id: user.id });
	delete user.password;
	return serverResponse(res, 200, `Welcome ${user.names}`, user);
};
