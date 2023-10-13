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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('RentalRequest', RentalRequestSchema);
