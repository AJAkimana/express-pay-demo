import { serverResponse, msgs, authenticatedUser } from '../helpers';

export const isAuthenticated = (req, res, next) => {
  const user = authenticatedUser(req);
  if (user) {
    req.user = user;
    return next();
  }
  return serverResponse(res, 401, msgs.NOT_AUTH);
};