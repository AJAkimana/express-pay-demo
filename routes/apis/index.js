import { Router } from 'express';
import productRoutes from './products';
import userRoutes from './user';

const apiRoutes = Router();

apiRoutes.use('/users', userRoutes);
apiRoutes.use('/products', productRoutes);

export default apiRoutes;
