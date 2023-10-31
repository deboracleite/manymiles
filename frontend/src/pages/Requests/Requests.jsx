import React, { useState } from 'react'
import api from '../../services/api'
import RequestsList from '../Requests/RequestsList'
import { useEffect } from 'react';
import Header from '../../components/header/Header';
const Requests = () => {
  const[requests, setRequests]= useState([]);
  const [checkRequest,setCheckRequest]=useState(false);
  useEffect(()=>{
     api.get(`/fetchDetails`)
    .then((res)=>res.data)        
    .then((data) => {setRequests(data),console.log(data)})
    
},[])

useEffect(()=> {
  setCheckRequest(true);    
 }, [requests]);

    return (
      
    <div>

      <Header/>
      {requests.map(request => (<RequestsList key={request.id} className="requests" {...request}/>))}
      
    </div>
  )
}

export default Requests