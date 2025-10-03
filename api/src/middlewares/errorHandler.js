import { ZodError } from 'zod';
import AppError from '../utils/AppError.js';
import multer from 'multer';

export const errorHandler = (err, req, res, next) => {
  // if (err instanceof multer.MulterError) {
  //   if (err.code === 'LIMIT_FILE_SIZE') {
  //     return res.status(413).json({
  //       status: 413,
  //       message: 'File too big. Maximum 2 MB.',
  //     });
  //   }
  //   if (err.code === 'LIMIT_UNEXPECTED_FILE') {
  //     return res.status(400).json({
  //       status: 400,
  //       message: 'File type is not allowed.',
  //     });
  //   }
  //   return res.status(400).json({
  //     status: 400,
  //     message: `Upload error: ${err.code}`,
  //   });
  // }

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
