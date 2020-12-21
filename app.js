import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { security } from './config';
import { handleErrors } from './middlewares/app';
import routes from './routes';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

security(app);
/**
 * App routes
 */
app.use(routes);
/**
 * Catch unexpected errors
 */
app.use(handleErrors);
/**
 * Start express server
 */
app.listen(port, () => console.log(`listening on port ${port}`));

export default app;
