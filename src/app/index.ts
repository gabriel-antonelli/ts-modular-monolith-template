import express from 'express';
import '@/config/dotenvLoader';
import { helmetMiddleware, httpLogger } from './middlewares';
import { logger } from '@/config/logger';
import setupRouter from './router';

const app = express();
const port = process.env.PORT;

app.use(helmetMiddleware, httpLogger, express.json());
setupRouter(app);

export const server = app.listen(port, () =>
	logger.info(`Server started on port: ${port}`)
);
