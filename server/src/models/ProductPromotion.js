import mongoose from 'mongoose';
import Department from './Department';
import Promotion from './Promotion';

const { Schema } = mongoose;

const productPromotionSchema = new Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: Department },
    promotion_id: { type: mongoose.Schema.Types.ObjectId, ref: Promotion },
  },
  { timestamps: true }
);
const ProductPromotion = mongoose.model(
  'ProductPromotion',
  productPromotionSchema
);

export default ProductPromotion;
