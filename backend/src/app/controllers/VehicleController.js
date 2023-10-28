/* eslint-disable no-underscore-dangle */
import * as Yup from 'yup';
import Vehicle, {
  parseCreateVehicle,
  formatGetVehicle,
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

    const photos = await File.insertMany(req.files.map(parseFile));

    const vehicle = await Vehicle.create(
      parseCreateVehicle({ ...req.body, userId: req.userId, photos })
    );

    return res.json(vehicle);
  }

  async index(req, res) {
    const vehicles = await Vehicle.find().populate('photo_list');

    return res.json(formatGetVehicle(vehicles));
  }
 
  async fetchDetails(req,res){
    //const {vehicleId}=req.body;
    const vehicles=await Vehicle.findById(req.params.id);

    const image=await File.findById(req.params.id);

    //let vehicle_detail = Object.assign(vehicles, image);
//    res.send(data:vehicles);
    res.json(vehicles)
    console.log(vehicles);
  } 
}

export default new VehicleController();
