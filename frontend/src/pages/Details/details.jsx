
import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import axios from 'axios'
import api from '../../services/api'
import Header from '../../components/header/Header'
import {Container} from "./detailsStyle"

const details=() => {
  
    const params=useParams();
    const id=params.id;
    // const [returnVehicle,setReturnVehicle]=useState("");
    const [vehicleDetails, setVehicleDetails] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [untilDate, setUntilDate] = useState("");
    const [allVehicleDetails,setAllVehicleDetails]=useState("");
    const [priceWithoutTax, setPriceWithoutTax] = useState(0);
    const [priceWithTax, setPriceWithTax] = useState(0);
    
    useEffect(()=>{
        api.get(`/fetchDetails/${id}`,{id})
        .then((res)=>res.data)        
        .then((data) => {setVehicleDetails(data)})
    },[id])
    console.log("debora",vehicleDetails);
   
   
  //  useEffect(()=>{
  //   api.get('/vehicles')
  //   .then((res)=>res.data)
  //   .then((data)=>{setAllVehicleDetails(data)})
  //   findData();
  //  },[vehicleDetails]); 

   useEffect(() => {
    calculatePrice();
  }, [fromDate, untilDate]);

    
  //  const findData=()=>{
      
     
  //     for(var i=0;i<allVehicleDetails.length;i++){
  //       // console.log(allVehicleDetails[i].id);
  //         if(id==allVehicleDetails[i].id){
  //           // console.log(allVehicleDetails[i]);
  //           setReturnVehicle(allVehicleDetails[i]);
  //           // calculatePrice(allVehicleDetails[i]);
  //         }
  //     }
  //  }

   const calculatePrice = () => {
    console.log("selectedVehicle mario " ,vehicleDetails );
    if (fromDate && untilDate) {
      const from = new Date(fromDate);
      console.log("date from" ,from );
      const until = new Date(untilDate);
      console.log("date until" ,until );
      const timeDifference = Math.abs(until - from);
      const days = Math.ceil(timeDifference / (1000 * 3600 * 24));
      console.log("date days" ,days );
      console.log("selectedVehicle.day_price" ,vehicleDetails.dayPrice);
      const dayPrice = vehicleDetails.dayPrice;
      const weekPrice = vehicleDetails.weekPrice;
      const monthPrice = vehicleDetails.monthPrice;
      const taxRate = 0.13; // Tax rate for Ontario
  
      let totalPrice = 0;
  
      if (days >= 30) {
        totalPrice = monthPrice * (Math.floor(days / 30));
      } else if (days >= 7) {
        totalPrice = weekPrice * (Math.floor(days / 7));
        totalPrice += dayPrice * (days % 7);
      } else {
        totalPrice = dayPrice * days;
        console.log("dayPrice" ,dayPrice );
        console.log("totalPrice" ,totalPrice );
      }
  
      const priceWithoutTax = totalPrice;
      const priceWithTax = priceWithoutTax + (priceWithoutTax * taxRate);
  
      setPriceWithoutTax(priceWithoutTax);
      setPriceWithTax(priceWithTax);
    }
  };
    console.log(vehicleDetails);
   const handleSubmit = async (e)=>{
    e.preventDefault();  
   api.post(`/requestBooking/${vehicleDetails.id}`,
   {
    vehicle_id: vehicleDetails.id, 
    owner_id: vehicleDetails.id,
    start_date: fromDate,
    end_date: untilDate,
    vehicle_details: vehicleDetails.description,
    priceWithoutTax, 
    priceWithTax
  });   
  //  api.post(`/requestBooking/${vehicleDetails._id}`,{vehicleDetails,returnVehicle,fromDate,untilDate,priceWithoutTax, priceWithTax});   
   
  }
   
  return (
    <>
    <Header/>
    <Container>
      <div className='body'>
          <div className='img_container'>
            {vehicleDetails!="" && <img src={vehicleDetails.photoList[0].url} className="ImgItem" alt="ImgItem"/>}
          </div>
          <div className='informationVehicle'>
            <h1 className='vehicle_brand' >{vehicleDetails.brand} {vehicleDetails.model}</h1>
            <h3 className='vehicle_description' >{vehicleDetails.description}</h3>
            <div className="line"></div>
            <h3>Rent Informations</h3>
            <div className='rentIformation'>
              <p>Per Day: ${vehicleDetails.dayPrice}</p>
              <p>|</p>
              <p>Per Week: ${vehicleDetails.weekPrice}</p>
              <p>|</p>
              <p>Per Month: ${vehicleDetails.monthPrice}</p>
            </div>
             <form >
               <div className="date-input">
                  <div className="date-input-field">
                    <label>From</label>
                    <div className="input-container">
                       <input type="date" placeholder="" onChange={(e)=>{setFromDate(e.target.value); calculatePrice();}} />             
                    </div>
                  </div>
                  <div className="date-input-field">
                   <label>Until</label>
                    <div className="input-container">
                       <input type="date" placeholder="+1" onChange={(e)=>{setUntilDate(e.target.value); calculatePrice();}}/>
                    </div>
                  </div>
                </div>
                <div className="price-details">
                    <p>Price without tax: ${priceWithoutTax.toFixed(2)}</p>
                    <p>Price with tax (Ontario 13%): ${priceWithTax.toFixed(2)}</p>
              </div>
               <button type="submit" onClick={handleSubmit}>Request booking</button>
            </form>
          </div>
      </div>
      
    </Container>
    </>    
  )
}

export default details