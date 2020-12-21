import { Router } from 'express';
import { getProducts } from '../../controllers/product';
import { catchErrors } from '../../middlewares/app';

const productRoutes = Router();

productRoutes.get('/', catchErrors(getProducts));

export default productRoutes;
