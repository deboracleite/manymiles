import User from '../schemas/User';
import Request from '../schemas/RentalRequest'
class RequestController{
    async store(req,res){
        console.log(req.body);
        const request=Request({
            start_date: req.body.fromDate,end_date: req.body.untilDate, user_id:req.userId, vehicle_id: req.body.vehicleDetails._id, owner_id:req.body.vehicleDetails.user_id
        })
        const requestSaved=await request.save();
        res.json(requestSaved)
        console.log(requestSaved)
    //    console.log(req.body.vehicleDetails._id);
    //    console.log(req.userId);
    //    try{
         
            
    //     const {start_date, end_date,status}=req.body;
    //     const errors = validationResult(req);
        
    //     if (!errors.isEmpty()) {
    //         return res.status(400).json({ errors: errors.array() });
    //     }
        
    //      let uName=await User.findById(req.user.id)
        
    //     const vehicle=new Vehicle({
    //     start_date:req.body.startDate,vehicleType,startDate,endDate,userid:req.user.id,userName:uName.name
    //     })

    //     const vehicleSaved=await vehicle.save();
    //     res.json(vehicleSaved);
    // }catch(error){
    //     console.error(error.message);
    //     res.status(500).send("Internal Server Error");
    // } 
    }
}
export default new RequestController();
