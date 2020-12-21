import { serverResponse, msgs } from '../helpers';

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const monitorDevActions = (req, res, next) => {
	if (process.env.NODE_ENV === 'development') {
		console.log(
			`Route: ${req.path}, method: ${req.method}, 
        body: ${JSON.stringify(req.body)}`
		);
	}
	return next();
};

export const route404 = (req, res) => {
	return serverResponse(res, 404, msgs.ROUTE_NOT_FOUND);
};
/**
 *
 * @param {function} fn Express callback promise function
 * @returns {promise} Resolve the promise irrespective
 * resolved or rejected
 */
export const catchErrors = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch(next);
};
export const handleErrors = (err, req, res, next) => {
	if (process.env.NODE_ENV === 'development') {
		console.log(err.stack);
	}
	return serverResponse(res, 500, err.message);
};
