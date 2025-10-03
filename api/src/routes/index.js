import { Router } from 'express';
import productRoutes from './productRoutes.js';

const r = Router();

r.use('/api/products', productRoutes);

export default r;
