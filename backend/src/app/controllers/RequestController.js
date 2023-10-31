import User from '../schemas/User';
import Request from '../schemas/RentalRequest'
import RentalRequest from '../schemas/RentalRequest';
class RequestController{
    async store(req,res){
                
        
        const request=Request({
            start_date: req.body.fromDate,end_date: req.body.untilDate, user_id:req.userId, vehicle_id: req.body.vehicleDetails._id, owner_id:req.body.vehicleDetails.user_id, vehicle_details:req.body.returnVehicle
        })
        
        
            let vehicleId=await RentalRequest.find({vehicle_id: req.body.vehicleDetails._id});
            let ownerId=await RentalRequest.findOne({owner_id:req.body.vehicleDetails.user_id})
            let userId=await RentalRequest.findOne({user_id:req.userId});
            
            //TO prevent duplicate requests

            if(ownerId && vehicleId && userId){
                console.log(true);
            }else{
                console.log(false);
                const requestSaved=await request.save();
                res.json(requestSaved)
                console.log(requestSaved)
            }
    }
    async fetchDetails(req,res){
        //const {vehicleId}=req.body;
        const requests=await RentalRequest.find({user_id: req.userId});
       console.log(requests);
       
        //let vehicle_detail = Object.assign(vehicles, image);
    //    res.send(data:vehicles);
        res.json(requests);
       
      } 
}

export default new RequestController();
