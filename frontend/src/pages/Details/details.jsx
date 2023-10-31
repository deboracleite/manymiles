import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import axios from 'axios'
import api from '../../services/api'
const details=() => {
  
    const params=useParams();
    const id=params.id;
    const [vehicleDetails, setVehicleDetails] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [untilDate, setUntilDate] = useState("");
    
    useEffect(()=>{
        api.get(`/fetchDetails/${id}`,{id})
        .then((res)=>res.data)        
        .then((data) => {setVehicleDetails(data),console.log(data)})
    },[id])
   
   const [allVehicleDetails,setAllVehicleDetails]=useState("");
   const [returnVehicle,setReturnVehicle]=useState("");
   useEffect(()=>{
    api.get('/vehicles')
    .then((res)=>res.data)
    .then((data)=>{setAllVehicleDetails(data),console.log(data)})
    findData();
   },[vehicleDetails]); 

   
   const findData=()=>{
      console.log(id);
      
     
      for(var i=0;i<allVehicleDetails.length;i++){
        console.log(allVehicleDetails[i].id);
          if(id==allVehicleDetails[i].id){
            console.log(allVehicleDetails[i]);
            setReturnVehicle(allVehicleDetails[i]);
          }
      }
   }
   const handleSubmit = async (e)=>{
    e.preventDefault();  
   api.post(`/requestBooking/${vehicleDetails._id}`,{vehicleDetails,returnVehicle,fromDate,untilDate});   
 }
   
  return (
    <div className='container'>
    <div className='img_container'>
    
 
    {returnVehicle!="" && <img src={returnVehicle.photoList[0].url} className="ImgItem" alt="ImgItem"/>}
    </div> 
   
    <h1 className='vehicle_brand' style={{color:"black"}}>{vehicleDetails.brand}</h1>
    
    <h2 className='vehicle_model' style={{color:"black"}}>{vehicleDetails.model}</h2>
    <h3 className='vehicle_description' style={{color:"black"}}>{vehicleDetails.description}</h3>
    
    <table style={{color:"black"}} >
    <tbody>
    <tr>
      <th>Pricing</th>
    </tr>
    <tr>
      <td>Per Hour: {vehicleDetails.hour_price}</td>
      <td>Per Day: {vehicleDetails.day_price}</td>
      <td>Per Week: {vehicleDetails.week_price}</td>
      <td>Per Month: {vehicleDetails.month_price}</td>
    </tr>
    </tbody>
    </table>
    <form >
    <div className="date-input">
                <div className="date-input-field">
                    <label>From</label>
                    <div className="input-container">
                        {/* <DatePicker
                            selected={fromDate}
                            onChange={handleFromDatePickerChange}
                            open={isFromDatePickerOpen}
                            onCalendarOpen={() => setFromDatePickerOpen(true)}
                            onCalendarClose={() => setFromDatePickerOpen(false)}
                            calendarClassName="datepicker-calendar"
                            className="datepicker"
                        /> */}
                        <input type="date" placeholder="" onChange={(e)=>{setFromDate(e.target.value),console.log(e.target.value)}} />
                        
                        </div>
                        </div>
                        <div className="date-input-field">
                    <label>Until</label>
                    <div className="input-container">
                        {/* <DatePicker
                            selected={untilDate}
                            onChange={handleUntilDatePickerChange}
                            open={isUntilDatePickerOpen}
                            onCalendarOpen={() => setUntilDatePickerOpen(true)}
                            onCalendarClose={() => setUntilDatePickerOpen(false)}
                            calendarClassName="datepicker-calendar"
                            className="datepicker"
                        />
                        <KeyboardArrowDownIcon onClick={() => setUntilDatePickerOpen(!isUntilDatePickerOpen)} /> */}
                        <input type="date" placeholder="+1" onChange={(e)=>setUntilDate(e.target.value)}/>
                        
                        
                    </div>
                </div>
                        </div>
    <button type="submit" onClick={handleSubmit}>Request booking</button>


    </form>
    </div>
    
  )
}

export default details