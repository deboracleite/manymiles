import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import axios from 'axios'
import api from '../../services/api'
const details=() => {
    const params=useParams();
    const id=params.id;
    const [vehicleDetails, setVehicleDetails] = useState("");
    
    useEffect(()=>{
        api.get(`/fetchDetails/${id}`,{id})
        .then((res)=>res.data)        
        .then((data) => {setVehicleDetails(data),console.log(data)})
    },[id])
    
  return (
    <div className='container'>
    <img src={vehicleDetails.photo_list} className="ImgItem" alt="ImgItem"/>
    <h1 className='vehicle' style={{color:"black"}}>{vehicleDetails.brand}</h1>
    <h2 className='vehicle'style={{color:"black"}}>{vehicleDetails.model}{console.log(vehicleDetails.photo_list)}</h2>
    <h3 className='vehicle' style={{color:"black"}}>{vehicleDetails.description}</h3>
    
    

    </div>
    
  )
}

export default details