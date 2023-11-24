import mongoose from 'mongoose';
import { formatDate, dollarFormat } from '../utils/utils';
const PaymentSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      require: true,
    },
    payment_method: {
      type: String,
    },
    payment_details: {
      type: String,
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
    last_four_digit: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

export const parsePaymentDetail = (payment) => {
  return {
    brand: payment.rental_request_id.vehicle_id.brand,
    model: payment.rental_request_id.vehicle_id.model,
    year: payment.rental_request_id.vehicle_id.year,
    from: formatDate(payment.rental_request_id.start_date),
    until: formatDate(payment.rental_request_id.end_date),
    price: dollarFormat(payment.rental_request_id.priceWithTax)
  }
}

export const parsePaymentList = (paymentList) => {
  return paymentList.map(payment => {
    return {
      id: payment._id,
      status: payment.status,
      booking: {
        title: `${payment.rental_request_id.vehicle_id.brand} ${payment.rental_request_id.vehicle_id.model} ${payment.rental_request_id.vehicle_id.year}`,
        from: formatDate(payment.rental_request_id.start_date),
        until: formatDate(payment.rental_request_id.end_date),
        price: dollarFormat(payment.rental_request_id.priceWithTax),
        rentalRequestId: payment.rental_request_id._id,
        hasRate: payment.hasRate
      }
    }
  })
}

export default mongoose.model('Payment', PaymentSchema);
