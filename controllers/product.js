import path from 'path';
import { serverResponse, QueryHelper, mockproducts, msgs } from '../helpers';

const productDb = new QueryHelper(mockproducts);
const cartDb = new QueryHelper([]);

export const getCheckoutPage = (req, res) => {
	return res.sendFile(path.resolve(__dirname, '../public/checkout.html'));
};
export const getConfirmPage = (req, res) => {
	return res.sendFile(path.resolve(__dirname, '../public/confirm.html'));
};

export const getProducts = (req, res) => {
	const products = productDb.findAll();
	return serverResponse(res, 200, msgs.SUCCESS_MSG, products);
};
export const addProductToCart = (req, res) => {
	const { productId } = req.body;
	const { id: userId } = req.user;
	const product = productDb.findOne('id', productId);
	let currentAmount = 0;
	if (product) {
		cartDb.create({
			id: Math.floor(Math.random() * 100),
			userId,
			productId,
			price: product.price
		});
		currentAmount = cartDb
			.findAll()
			.reduce((accum, item) => accum + item.price, 0);
	}
	return serverResponse(res, 200, msgs.SUCCESS_MSG, currentAmount);
};
export const finishShopping = (req, res) => {
	cartDb.clearAll();
	const confirmMsg = {
		message: 'Thank you',
		detail: `Welcome back to shop with us`
	};
	return serverResponse(res, 200, msgs.SUCCESS_MSG, confirmMsg);
};
