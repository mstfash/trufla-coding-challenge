import express from 'express';
import Product from '../models/Product';
import * as helper from '../utils/helper';
import ProductPromotion from '../models/ProductPromotion';

function getProductsRoutes() {
  const router = express.Router();
  router.get('/', fetchProducts);
  return router;
}

async function fetchProducts(req, res) {
  const { limit, page, dep_id, promo_code, query } = req.query;
  const perPage = Number(limit) || 10;
  const pageNumber = Math.max(0, Number(page ? page : 0));
  let products;
  if (dep_id) {
    products = await Product.find({ department_id: dep_id })
      .populate('department_id', '_id name')
      .lean();
  } else {
    products = await Product.find({})
      .populate('department_id', '_id name')
      .lean();
  }

  if (query) {
    products = products.filter((prod) =>
      prod.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  products = await Promise.all(
    products.map(async (prod) => {
      const productPromotion = await ProductPromotion.find({
        product_id: prod._id,
      })
        .select('product_id promotion_id')
        .populate('promotion_id', 'code active discount')
        .lean();
      return { ...prod, promotion: productPromotion };
    })
  );

  products = products.map((prod) => ({
    ...prod,
    promotion: Object.assign(...prod.promotion),
  }));
  if (promo_code) {
    products = products.filter(
      (prod) => prod.promotion.promotion_id.code === promo_code
    );
  }

  const paginatedProducts = await helper.paginate({
    limit: perPage,
    page: pageNumber,
    data: products,
    type: 'products',
  });
  res.send(paginatedProducts);
}

export { getProductsRoutes };
