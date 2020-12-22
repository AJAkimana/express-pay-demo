import { Router } from 'express';
import { monitorDevActions, route404 } from '../middlewares/app';
import apiRoutes from './apis';
import { msgs, serverResponse } from '../helpers';
import { getCheckoutPage, getConfirmPage } from '../controllers/product';

const routes = Router();

routes.use(monitorDevActions);
routes.get('/', (req, res) => {
	serverResponse(res, 200, msgs.WELCOME);
});
routes.get('/checkout', getCheckoutPage);
routes.get('/confirm', getConfirmPage);
routes.use('/api', apiRoutes);
routes.all('*', route404);

export default routes;
