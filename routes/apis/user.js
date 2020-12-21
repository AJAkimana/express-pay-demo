import { Router } from 'express';
import { loginUser } from '../../controllers/user';
import { catchErrors } from '../../middlewares/app';
import { isLoginInfoValid } from '../../middlewares/infoValidation';

const userRoutes = Router();

userRoutes.post('/login', isLoginInfoValid, catchErrors(loginUser));

export default userRoutes;
