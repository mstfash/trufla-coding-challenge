import faker from 'faker';
import { MongoConnector } from '../mongo-connector';
import * as generate from './generate';
import Department from '../models/Department';
import Product from '../models/Product';
import Promotion from '../models/Promotion';
import ProductPromotion from '../models/ProductPromotion';

const mongoConnector = new MongoConnector();

async function initDb() {
  await mongoConnector.connect();
  const genDepartments = Array.from({ length: 6 }, () =>
    generate.buildDepartments()
  );
  const genPromotions = Array.from({ length: 6 }, () =>
    generate.buildPromotions()
  );

  const departments = await Department.insertMany(genDepartments);
  const promotions = await Promotion.insertMany(genPromotions);

  const depIds = departments.map((dep) => dep._id);
  const proIds = promotions.map((pro) => pro._id);

  const genProducts = Array.from({ length: 30 }, () =>
    generate.buildProducts({ department_id: faker.random.arrayElement(depIds) })
  );

  const products = await Product.insertMany(genProducts);
  const prodIds = products.map((prod) => prod._id);

  const genProductPromotion = prodIds.map((prod) => ({
    product_id: prod,
    promotion_id: faker.random.arrayElement(proIds),
  }));

  await ProductPromotion.insertMany(genProductPromotion);

  console.log('Seed data entered successfully!');
  await mongoConnector.disconnect();
}

async function resetDb() {
  await mongoConnector.connect();
  await ProductPromotion.deleteMany({});
  await Department.deleteMany({});
  await Promotion.deleteMany({});
  await Product.deleteMany({});
  console.log('Database has been reset');
  await mongoConnector.disconnect();
}

export { initDb, resetDb };
