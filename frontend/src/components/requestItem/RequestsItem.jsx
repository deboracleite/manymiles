import React, { useEffect, useState } from 'react';
import {Container} from "./requestItemStyle" ;
import api from '../../services/api';

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
              </div>
              
      </div>
    </Container>
   
  )
}



export default RequestsList