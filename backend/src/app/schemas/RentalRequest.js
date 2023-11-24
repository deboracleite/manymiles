import mongoose from 'mongoose';
import { formatDate, dollarFormat } from '../utils/utils';
const RentalRequestSchema = new mongoose.Schema(
  {
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    vehicle_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vehicle',
    },
    owner_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    vehicle_details: {
      type: Array,
      required: true
    },
    priceWithoutTax: {
      type: Number,
      default: 0
    },
    priceWithTax: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

export const parseRentalRequestList = (rentalRequestList) => {
  return rentalRequestList.map(rent => ({
    id: rent._id,
    title: `${rent.vehicle_id.brand} ${rent.vehicle_id.model} ${rent.vehicle_id.year}`,
    from: formatDate(rent.start_date),
    until: formatDate(rent.end_date),
    price: dollarFormat(rent.priceWithTax)
  }))
}

export const parseRentalRequest = (rental) => {
  return {
    brand: rental.vehicle_id.brand,
    model: rental.vehicle_id.model,
    year: rental.vehicle_id.year,
    from: formatDate(rental.start_date),
    until: formatDate(rental.end_date),
    price: dollarFormat(rental.priceWithTax),
    vehicleId: rental.vehicle_id._id,
    rentalRequestId: rental._id
  }
}

export default mongoose.model('RentalRequest', RentalRequestSchema);
