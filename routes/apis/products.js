import { Router } from 'express';
import {
	addProductToCart,
	finishShopping,
	getProducts
} from '../../controllers/product';
import { catchErrors } from '../../middlewares/app';
import { isAuthenticated } from '../../middlewares/auth';

const productRoutes = Router();

productRoutes.get('/', catchErrors(getProducts));
productRoutes.post(
	'/addToCard',
	isAuthenticated,
	catchErrors(addProductToCart)
);
productRoutes.get('/finish', catchErrors(finishShopping));

export default productRoutes;
