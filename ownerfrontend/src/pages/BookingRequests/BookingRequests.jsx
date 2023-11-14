import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../services/api'
import RequestsList from '../../components/requestItem/RequestsItem'
import { useEffect } from 'react';
import Header from '../../components/header/Header';
import { Container } from './BookingRequestStyle';

const Requests = () => {
  const params=useParams();
    const id=params.id;
  const[requests, setRequests]= useState([]);
  const [checkRequest,setCheckRequest]=useState(false);
  useEffect(()=>{
     api.get(`/fetchRequests/${id}`)
    .then((res)=>res.data)        
    .then((data) => {setRequests(data),console.log(data)})
    
},[])

useEffect(()=> {
  setCheckRequest(true);    
 }, [requests]);

    return (
      <>
      <Header/>
      <Container>
        <ul className='requestList'>
            {/* {requests.length && requests.map(request => (<RequestsList key={request.id} className="requests" {...request}/>))} */}
            {requests.length && requests.map(request => (<RequestsList key={request._id} className="requests" request = {request}/>))}
        </ul>
      </Container>
      </>   
  )
}

export default Requests