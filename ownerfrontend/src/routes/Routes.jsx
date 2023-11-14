import React from 'react';

import { Route, Router, Routes as RouterDOM } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home/Home';

import SignIn from '../pages/SignIn/SignIn';

import SignUp from '../pages/SignUp/SignUp';

import RegisterVehicle from '../pages/Registervehicle/RegisterVehicle';
// import Details from '../pages/Details/details';
import BookingRequests from '../pages/BookingRequests/BookingRequests'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
const Routes = () => {
  
  const { owner } = useAuth();
  
  return (
    <RouterDOM>
        <Route exact path="/" element={owner ? <Home /> : <Navigate to="/signIn" />}></Route>
        
        <Route exact path="/" element={<Home />}/>
         <Route path="/signIn" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/registerVehicle" element={<RegisterVehicle />} /> 
        <Route path="/registerVehicle" element={<PrivateRoute />}>
          <Route path="/registerVehicle" element={<RegisterVehicle />} /> 
        </Route>
        {/* <Route path="/details/:id" element={<Details/>}/> */}
        <Route path="/details/:id" element={<PrivateRoute />}>
          <Route path="/details/:id" element={<BookingRequests/>} /> 
        </Route>

    </RouterDOM>
  );
};



export default Routes;