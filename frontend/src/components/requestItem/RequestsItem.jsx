import React,{ useEffect, useState } from 'react';
import {Container} from "./requestItemStyle" ;
import api from '../../services/api';
import { Link} from 'react-router-dom'; 
const RequestsList=({request}) => {

  const id = request.vehicle_id
  const [vehicleDetails, setVehicleDetails] = useState("");

  console.log("di veiculo", id);
  console.log("requeste ", request);
  useEffect(()=>{
    api.get(`/fetchDetails/${id}`,{id})
    .then((res)=>res.data)        
    .then((data) => {setVehicleDetails(data), console.log(data)})
  },[id])
const status=()=>{
  console.log(request.status)
  if(request.status==true){
    
  //  return <p>Request Accepted</p>
   return { colorClass: 'accepted-status', text: 'Request Accepted' };
  }else if(request.status==false){
    // return <p>Request Declined</p>
    return { colorClass: 'declined-status', text: 'Request Declined' };
  }
  return null;
 
}
const getStatus = status();
  return (

    <Container >
      <div className={`blockItem ${getStatus ? getStatus.colorClass : ''}`}>
              <h2>{vehicleDetails.brand} {vehicleDetails.model} {vehicleDetails.year}</h2>
              <div className='detailItem'>
                <div className='date-info'>
                    <p>From: {request.start_date.slice(0, 10)}</p>
                    <p>Until: {request.end_date.slice(0, 10)}</p>
                </div>
                <div className='price-info'>
                  <p>Total: {request.priceWithTax}</p>
                </div>
                <div className='status-info'>
                {getStatus && <p>{getStatus.text}</p>}
                </div>
              </div>
              <div className='submitButton'></div>
              {/* For Now I am redirecting to home page */}
              {request.status && <Link to="/"> <button type="submit" >More details</button></Link>}
              
      </div>
    </Container>
   
  )
}



export default RequestsList