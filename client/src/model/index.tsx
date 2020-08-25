import productModel, { ProductModel } from './productModel';

export interface StoreModel {
  productModel: ProductModel;
}

const model: StoreModel = {
  productModel,
};

export default model;
