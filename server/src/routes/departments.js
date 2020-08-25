import express from 'express';
import Department from '../models/Department';

function getDepartmentsRoutes() {
  const router = express.Router();
  router.get('/', fetchDepartments);
  return router;
}

async function fetchDepartments(req, res) {
  const products = await Department.find({}).select('_id name').lean();
  res.send(products);
}

export { getDepartmentsRoutes };
