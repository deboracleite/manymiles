import mongoose from 'mongoose';

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

const formatDate = (dateString) => {
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const dollarFormat = (valor) => {
  return valor.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const parseRentalRequestList = (rentalRequestList) => {
  return rentalRequestList.map(rent => ({
    id: rent._id,
    title: `${rent.vehicle_id.brand} ${rent.vehicle_id.model} ${rent.vehicle_id.year}`,
    from: formatDate(rent.start_date),
    until: formatDate(rent.end_date),
    price: dollarFormat(rent.priceWithTax)
  }))
}


export default mongoose.model('RentalRequest', RentalRequestSchema);
