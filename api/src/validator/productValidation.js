import z from 'zod';

const fileSchema = z
  .object({
    originalname: z.string(),
    mimetype: z.string(),
    size: z.number().max(2 * 1024 * 1024, 'File maksimal 2MB'),
    buffer: z.instanceof(Buffer).optional(),
  })
  .nullable();

export const createProductBody = z.object({
  name: z
    .string({
      error: (issue) =>
        issue.input === undefined ? 'This field is required' : 'Not a string',
    })
    .trim()
    .min(3),
  description: z.string().nullish(),
  price: z.coerce.number().gte(1),
  stock: z.coerce.number().gte(0),
});
