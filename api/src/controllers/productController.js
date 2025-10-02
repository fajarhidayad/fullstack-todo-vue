import { productsTable } from '../db/schema.js';
import { db } from '../index.js';

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await db.select().from(productsTable).limit(10);

    return res.json({
      data: products,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
