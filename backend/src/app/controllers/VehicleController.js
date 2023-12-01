/* eslint-disable no-underscore-dangle */
import * as Yup from 'yup';
import Vehicle, {
  parseCreateVehicle,
  formatGetVehicle,
  filterByRange
} from '../schemas/Vehicle';
import File, { parseFile } from '../schemas/File';

class VehicleController {

  async store(req, res) {
    const schema = Yup.object().shape({
      type: Yup.string().required(),
      brand: Yup.string().required(),
      model: Yup.string().required(),
      year: Yup.number().required(),
      plateNumber: Yup.string().required(),
      color: Yup.string().required(),
      fuelType: Yup.string().required(),
      description: Yup.string().required(),
      hourPrice: Yup.number(),
      dayPrice: Yup.number(),
      weekPrice: Yup.number(),
      monthPrice: Yup.number(),

    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { plateNumber } = req.body;

    const hasVehicle = await Vehicle.findOne({ plate_number: plateNumber });

    if (hasVehicle) {
      return res.status(400).json({ error: 'Vehicle already exists.' });
    }

    const photos = req.files ? await File.insertMany(req.files.map(parseFile)) : [];

    const vehicle = await Vehicle.create(
      parseCreateVehicle({ ...req.body, userId: req.userId, photos })
    );

    return res.json(vehicle);
  }

  async index(req, res) {
    const { fromDate, untilDate } = req.query;
console.log({fromDate, untilDate})
    const vehicles = await Vehicle.aggregate([
      {
        $lookup: {
          from: 'rentalrequests',
          localField: '_id',
          foreignField: 'vehicle_id',
          as: 'rentalRequests',
        },
      },
      {
        $unwind: {
          path: '$rentalRequests',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'files',
          localField: 'photo_list',
          foreignField: '_id',
          as: 'photo_list',
        },
      },
      {
        $project: {
          _id: 1,
          type: 1,
          brand: 1,
          model: 1,
          year: 1,
          plate_number: 1,
          color: 1,
          fuel_type: 1,
          description: 1,
          hour_price: 1,
          day_price: 1,
          week_price: 1,
          month_price: 1,
          availability: 1,
          owner_id: 1,
          photo_list: 1,
          rentalRequests: {
            start_date: 1,
            end_date: 1,
            user_id: 1,
            owner_id: 1,
            vehicle_details: 1,
            priceWithoutTax: 1,
            priceWithTax: 1,
          },
          // photoDetails: 1,
        },
      },
    ]);


    const groupVehicles = vehicles.reduce((acc, cur) => {
      const vehicleIndex = acc.findIndex(el => `${el['_id']}` === `${cur['_id']}`);
      if (vehicleIndex >= 0) {
        acc[vehicleIndex].rentals.push(cur.rentalRequests);
      } else {
        acc.push({ ...cur, rentals: [cur.rentalRequests] });
      }


      return acc;
    }, [])

    const hasValidFilter = !isNaN(new Date(fromDate)) || !isNaN(new Date(untilDate));
    console.log({hasValidFilter})
    const filteredVehicleList = hasValidFilter ? filterByRange(groupVehicles, new Date(fromDate), new Date(untilDate)) : groupVehicles;
    console.log({filteredVehicleList})
    return res.json(formatGetVehicle(filteredVehicleList));
  }

  async fetchDetails(req, res) {

    const vehicles = await Vehicle.findById(req.params.id).populate('photo_list');

    return res.json(formatGetVehicle([vehicles])[0]);

  }
}

export default new VehicleController();
