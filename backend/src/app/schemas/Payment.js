import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema(
  {
    payment_method: {
      type: String,
      required: true,
    },
    payment_details: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rental_request_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RentalRequest',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Payment', PaymentSchema);
