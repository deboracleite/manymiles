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
    // status: {
    //   type: String,
    //   required: true,
    // },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    vehicle_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vehicle',
    },
    owner_id:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
    },
    vehicle_details:{
      type:Array,
      required:true
    },
    priceWithoutTax:{
      type: Number,
      default: 0
    },
    priceWithTax:{
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('RentalRequest', RentalRequestSchema);
