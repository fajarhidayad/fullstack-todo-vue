import { ZodError } from 'zod';

export function validate(schema, where = 'body') {
  return async (req, res, next) => {
    try {
      const result = await schema.safeParseAsync(req[where]);
      if (!result.success) {
        return res.status(422).json(formatZodError(result.error));
      }

      req[where] = result.data;
      return next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(422).json(formatZodError(err));
      }
      return next(err);
    }
  };
}

function formatZodError(error) {
  return {
    message: 'Validation failed',
    errors: error.issues.map((e) => ({
      path: e.path.join('.'),
      message: e.message,
      code: e.code,
    })),
  };
}
