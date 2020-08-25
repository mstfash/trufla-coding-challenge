import express from 'express';
import { getProductsRoutes } from './products';
import { getDepartmentsRoutes } from './departments';

function getRoutes() {
  const router = express.Router();
  router.use('/products', getProductsRoutes());
  router.use('/departments', getDepartmentsRoutes());
  return router;
}

export { getRoutes };
