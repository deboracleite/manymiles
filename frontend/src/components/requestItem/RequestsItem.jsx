import React, { useEffect, useState } from 'react';
import { Container } from "./requestItemStyle";
import api from '../../services/api';

const RequestsList = ({ request }) => {

  const id = request.vehicle_id
  const [vehicleDetails, setVehicleDetails] = useState("");

  useEffect(() => {
    api.get(`/fetchDetails/${id}`, { id })
      .then(({ data }) => setVehicleDetails(data))
  }, [id])

  return (

    <Container>
      <div className='blockItem'>
        <div className='block-information'>
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

        <div className='group-button'>
          <button>Approve</button>
          <button>Decline</button>
        </div>

      </div>
    </Container>

  )
}



export default RequestsList