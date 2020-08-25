import mongoose from 'mongoose';

const { Schema } = mongoose;

const promotionSchema = new Schema(
  {
    code: String,
    active: Boolean,
    discount: Number,
  },
  { timestamps: true }
);
const Promotion = mongoose.model('Promotion', promotionSchema);

export default Promotion;
