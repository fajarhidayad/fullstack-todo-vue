import z from 'zod';

export const createProductBody = z.object({
  name: z
    .string({
      error: (issue) =>
        issue.input === undefined ? 'This field is required' : 'Not a string',
    })
    .trim()
    .min(3),
  description: z.string().nullish(),
  price: z.number().gte(1),
  stock: z.number().gte(0),
});
