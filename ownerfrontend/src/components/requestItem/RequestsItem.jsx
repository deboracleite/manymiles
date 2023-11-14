import React, { useEffect, useState } from 'react';
import {Container} from "./requestItemStyle" ;
import api from '../../services/api';
import { Link } from 'react-router-dom';

const RequestsList=({request}) => {

  const id = request.vehicle_id
  const [vehicleDetails, setVehicleDetails] = useState("");
  const user_id=request.user_id;
  const requestId=request._id;
  // console.log(user_id);
  // console.log("di veiculo", id);
  // console.log("requeste ", request);
  useEffect(()=>{
    api.get(`/fetchDetail/${id}/${user_id}`,{id},{user_id})
    .then((res)=>res.data)        
    .then((data) => {setVehicleDetails(data), console.log(data)})
  },[id,user_id])
const handleSubmit=(e)=>{
  let status=e.target.value;
    if(e.target.value=="true"){
      status=true;
      
    }else{
      console.log("Decline Button")
      status=false;
    }
    console.log(status);
    api.post(`notifyUser/${requestId}/${status}`)
    // if()
}
  return (

    <Container>
      <div className='blockItem'>
              <h2>{vehicleDetails.brand} {vehicleDetails.model} {vehicleDetails.year}</h2>
              <div className='detailItem'>
                <div className='date-info'>
                    <p>From: {request.start_date.slice(0, 10)}</p>
                    <p>Until: {request.end_date.slice(0, 10)}</p>
                </div>
                <div className='price-info'>
                  <p>Total: {request.priceWithTax}</p>
                </div>
                <div className='customer_info'>
                {vehicleDetails!="" && <p>Customer Name: {vehicleDetails._doc.first_name+" "+vehicleDetails._doc.last_name}</p>}
                </div>
                </div>
              <div className="btnContainer">
                <button type="button" className="btn btn-success" onClick={handleSubmit} value="true">Accept</button>
                <button type="button" className="btn btn-danger"  onClick={handleSubmit} value="false">Decline</button>
              </div>
            </div>
    </Container>
   
  )
}



export default RequestsList