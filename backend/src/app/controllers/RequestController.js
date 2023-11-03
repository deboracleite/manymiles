import * as Yup from 'yup';
import User from '../schemas/User';
import RentalRequest from '../schemas/RentalRequest';
import Vehicle from '../schemas/Vehicle';
class RequestController{
    async store(req,res){

        const request = Yup.object().shape({
            start_date: Yup.date(),
            end_date: Yup.date(),
            user_id: Yup.string(),
            vehicle_id:Yup.string(),
            owner_id: Yup.string(),
            vehicle_details:Yup.string(),
            priceWithoutTax:Yup.number(),
            priceWithTax: Yup.number()
        })

        if (!(await request.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }   
        
        const { vehicle_id} = req.body;
        console.log("USER",req.userId)
        const vehicleId = await Vehicle.findOne({_id: vehicle_id})
        //console.log("request body", vehicleId); 
        const userId = await User.findOne({_id: req.userId})

        if (!(vehicleId && userId)) {
            return res.status(400).json({ error: 'Vehicle already exists.' });
        }
       //console.log("request body", req.body);   
        const reponse = await RentalRequest.create({...req.body, user_id: req.userId, owner_id: req.userId})
        

        return res.json(reponse);
        // const request = Request({
        //     start_date: req.body.fromDate,
        //     end_date: req.body.untilDate, 
        //     user_id:req.userId, 
        //     vehicle_id: req.body.vehicleDetails._id, 
        //     owner_id:req.body.vehicleDetails.user_id, 
        //     vehicle_details:req.body.returnVehicle
        // })
        
        
        //     let vehicleId=await RentalRequest.find({vehicle_id: req.body.vehicleDetails._id});
        //     let ownerId=await RentalRequest.findOne({owner_id:req.body.vehicleDetails.user_id})
        //     let userId=await RentalRequest.findOne({user_id:req.userId});
            
        //     //TO prevent duplicate requests

        //     if(ownerId && vehicleId && userId){
        //         console.log(true);
        //     }else{
        //         console.log(false);
        //         const requestSaved=await request.save();
        //         res.json(requestSaved)
        //         console.log(requestSaved)
        //     }
    }
    async fetchDetails(req,res){
        //const {vehicleId}=req.body;
        const requests=await RentalRequest.find({user_id: req.userId});
        console.log(requests);
       
        //let vehicle_detail = Object.assign(vehicles, image);
    //    res.send(data:vehicles);
        return res.json(requests);
       
      } 
}

export default new RequestController();
