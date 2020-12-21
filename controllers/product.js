import path from 'path';
import { serverResponse, QueryHelper, mockproducts, msgs } from '../helpers';

const productDb = new QueryHelper(mockproducts);

export const getCheckoutPage = (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../public/index.html'));
};

export const getProducts = (req, res) => {
  const products = productDb.findAll();
  return serverResponse(res, 200, msgs.SUCCESS_MSG, products);
};