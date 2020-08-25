import mongoose from 'mongoose';
import Department from './Department';

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    department_id: { type: mongoose.Schema.Types.ObjectId, ref: Department },
  },
  { timestamps: true }
);
const Product = mongoose.model('Product', productSchema);

export default Product;
