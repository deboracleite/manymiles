import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/header/Header'

const RequestsList=(props) => {
  return (
    
    <div  style={{marginTop:"20px", backgroundColor:"ButtonShadow"}}>
        
        <h5 style={{color:"black"}}>{props.vehicle_details[0].brand}</h5>
        <h5 style={{color:"black"}}>{props.vehicle_details[0].model}</h5>
        <h5 style={{color:"black"}}>{props.vehicle_details[0].color}</h5>
        
        
        
    </div>
    
  )
}



export default RequestsList