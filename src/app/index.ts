import express from 'express';
import '@/config/dotenvLoader';
import { helmetMiddleware, httpLogger } from './middlewares';
import { logger } from '@/config/logger';
import setupRouter from './router';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

const app = express();
const port = process.env.PORT;
const isProdEnv = process.env.NODE_ENV === 'production';

app.use(helmetMiddleware, httpLogger, express.json());
if (isProdEnv) {
	app.use(ClerkExpressRequireAuth({}));
}
setupRouter(app);

export const server = app.listen(port, () =>
	logger.info(`Server started on port: ${port}`)
);
