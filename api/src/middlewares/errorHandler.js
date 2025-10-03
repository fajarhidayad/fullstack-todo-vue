import { ZodError } from 'zod';
import AppError from '../utils/AppError.js';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    console.log(err);
    return res.status(422).json({
      message: 'Validation failed',
      errors: err.errors.map((e) => ({
        path: e.path.join('.'),
        message: e.message,
        code: e.code,
      })),
    });
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
  });
};

export const errorNotFound = (req, res, next) => {
  const err = new AppError(`Route ${req.originalUrl} is not found`, 404);
  next(err);
};
