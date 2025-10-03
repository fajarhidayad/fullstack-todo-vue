import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler, errorNotFound } from './middlewares/errorHandler.js';
import path from 'path';

const app = express();

// Parsing & data handling
app.use(express.json());
// app.use(
//   '/api/images/products',
//   express.static(path.join(process.cwd(), 'uploads'), {
//     maxAge: '7d',
//   })
// );

// Security
app.use(helmet());
app.use(cors());

// Logger
app.use(morgan('dev'));

app.use('/', routes);

app.use(errorNotFound);
// Global error handling
app.use(errorHandler);

export default app;
