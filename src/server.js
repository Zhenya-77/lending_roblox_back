import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { logger } from './middlewares/logger.js';
import { errors } from 'celebrate';
import connectMongoDB from './db/connectMongoDB.js';
import applicationRoutes from './routes/applicationRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(express.json());
app.use(cors());
app.use(logger);

app.use(applicationRoutes);

app.use(notFoundHandler);

app.use(errors());

app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
