import { Router } from 'express';
import * as handler from '../controllers/productController.js';
import { createProductBody } from '../validator/productValidation.js';
import { validate } from '../middlewares/validate.js';

const r = Router();

r.get('/', handler.getAllProducts);
r.post('/', validate(createProductBody), handler.createNewProduct);
r.get('/:id', handler.getProductById);
r.put('/:id', validate(createProductBody), handler.updateProductById);
r.delete('/:id', handler.deleteProductById);

export default r;
