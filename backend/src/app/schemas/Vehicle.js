/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';

const VehicleSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    plate_number: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    fuel_type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hour_price: {
      type: Number,
      default: 0,
    },
    day_price: {
      type: Number,
      default: 0,
    },
    week_price: {
      type: Number,
      default: 0,
    },
    month_price: {
      type: Number,
      default: 0,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    photo_list: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const parseCreateVehicle = vehicleBody => {
  return {
    type: vehicleBody.type,
    brand: vehicleBody.brand,
    model: vehicleBody.model,
    year: vehicleBody.year,
    plate_number: vehicleBody.plateNumber,
    color: vehicleBody.color,
    fuel_type: vehicleBody.fuelType,
    description: vehicleBody.description,
    hour_price: vehicleBody.hourPrice || 0,
    day_price: vehicleBody.dayPrice || 0,
    week_price: vehicleBody.weekPrice || 0,
    month_price: vehicleBody.monthPrice || 0,
    user_id: vehicleBody.userId,
    photo_list: vehicleBody.photos,
  };
};

export const checkPhoto = (photoList) => {
  if (!photoList.length) {
    return [{
      id: 1,
      name: "default",
      url: `${process.env.APP_URL}/files/default_list_car.png`
    }]
  }

  return photoList.map(photo => ({
    id: photo._id,
    name: photo.name,
    url: photo.url,
  }))
}

export const formatGetVehicle = vehicles => {

  return vehicles.map(vehicle => {
    return {
      availability: vehicle.availability,
      photoList: checkPhoto(vehicle.photo_list),
      id: vehicle._id,
      type: vehicle.type,
      brand: vehicle.brand,
      model: vehicle.model,
      year: vehicle.year,
      plateNumber: vehicle.plate_number,
      color: vehicle.color,
      fuelType: vehicle.fuel_type,
      description: vehicle.description,
      hourPrice: vehicle.hour_price,
      dayPrice: vehicle.day_price,
      weekPrice: vehicle.week_price,
      monthPrice: vehicle.month_price,
    };
  });
};

export const filterByRange = (vehicles, fromDate, untilDate) => {

  return vehicles.filter(({ rentals }) => {
    const hasConflict = rentals.some((object) => {
      const startDate = new Date(object.start_date);
      const endDate = new Date(object.end_date);
      return (untilDate >= startDate && untilDate < endDate) ||
        (fromDate >= startDate && untilDate <= endDate) ||
        (fromDate >= startDate && fromDate < endDate)
    })


    return !hasConflict;
  });
}
export default mongoose.model('Vehicle', VehicleSchema);
