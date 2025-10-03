import { eq } from 'drizzle-orm';
import { productsTable } from '../db/schema.js';
import { db } from '../index.js';
import AppError from '../utils/AppError.js';

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

async function getOneProduct(id) {
  const [product] = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.id, id))
    .limit(1);

  if (!product) {
    throw new AppError(`product with ID ${id} not found`, 404);
  }

  return product;
}

export const getProductById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    const product = await getOneProduct(id);

    return res.json({
      message: 'success',
      data: product,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const createNewProduct = async (req, res, next) => {
  try {
    const body = req.body;

    const newProduct = await db
      .insert(productsTable)
      .values({
        ...body,
      })
      .returning();

    return res.json({
      message: 'success',
      data: newProduct,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const updateProductById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const body = req.body;

    await getOneProduct(id);

    const updated = await db
      .update(productsTable)
      .set({
        ...body,
      })
      .where(eq(productsTable.id, id))
      .returning();

    return res.json({
      message: 'success',
      data: updated,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteProductById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    await getOneProduct(id);

    const deleted = await db
      .delete(productsTable)
      .where(eq(productsTable.id, id))
      .returning();

    return res.json({
      message: 'success',
      data: deleted,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
