/* eslint-disable no-underscore-dangle */
import * as Yup from 'yup';
import Vehicle, {
  parseCreateVehicle,
  formatGetVehicle,
} from '../schemas/Vehicle';
import File, { parseFile } from '../schemas/File';
import User from '../schemas/User';
import Owner from '../schemas/Owner';

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
      console.log(req.body);
    const vehicle = await Vehicle.create(
      parseCreateVehicle({ ...req.body, owner_id:req.params.id, photos })
    );

    return res.json(vehicle);
  }

  async index(req, res) {
    const vehicles = await Vehicle.find().populate('photo_list');

    return res.json(formatGetVehicle(vehicles));
  }
 
  
  async fetchAllVehicle(req,res){
    let owner_id=req.params.id;
    const vehicles = await Vehicle.find({owner_id}).populate('photo_list');
   console.log(vehicles);
    return res.json(vehicles);
    
  }
  async fetchDetails(req,res){

    
    
    // console.log(user);
    


    const vehicles=await Vehicle.findById(req.params.id).populate('photo_list');
    const date=new Date(vehicles.createdAt).toISOString().split('T')[0];
    const owner=await Owner.findOne({_id:vehicles.owner_id});
    
    // let allDetails=Object.assign({},);
    let details={...formatGetVehicle([vehicles])[0],...owner,date}
    // console.log(allDetails);
    return res.json(details);
   
  } 
  async fetchDetail(req,res){

    
    
    // console.log(user);
    const vehicles=await Vehicle.findById(req.params.id).populate('photo_list');
    const date=new Date(vehicles.createdAt).toISOString().split('T')[0];
    const user=await User.findOne({_id:req.params.user_id});
    //console.log(user);
    // let allDetails=Object.assign({},);
    let details={...formatGetVehicle([vehicles])[0],...user}
    // console.log(allDetails);
    
    return res.json(details);
   
  } 
}

export default new VehicleController();
