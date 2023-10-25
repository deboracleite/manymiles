import React from 'react';

import { Route, Router, Routes as RouterDOM } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home/Home';

import SignIn from '../pages/SignIn/SignIn';

import SignUp from '../pages/SignUp/SignUp';

import RegisterVehicle from '../pages/Registervehicle/RegisterVehicle';
import Details from '../pages/Details/details';

const Routes = () => {
  return (
    <RouterDOM>
        <Route exact path="/" element={<Home />}/>
        <Route path="/signIn" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/registerVehicle" element={<RegisterVehicle />} /> 
        <Route path="/registerVehicle" element={<PrivateRoute />}>
          <Route path="/registerVehicle" element={<RegisterVehicle />} /> 
        </Route>
        
    </RouterDOM>
  );
};



export default Routes;