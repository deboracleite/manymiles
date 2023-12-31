import React from 'react';

import { Route, Router, Routes as RouterDOM } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home/Home';

import SignIn from '../pages/SignIn/SignIn';

import SignUp from '../pages/SignUp/SignUp';

import RegisterVehicle from '../pages/Registervehicle/RegisterVehicle';
import Details from '../pages/Details/details';
import BookingRequest from '../pages/BookingRequest/BookingRequest';
import MyRentals from '../pages/MyRentals/MyRentals';
import RateExperience from '../pages/RateExperience/RateExperience';
import Payment from '../pages/Payment/Payment';

import MyAccount from '../pages/MyAccount/MyAccount'
import VehicleHistory from '../pages/VehicleHistory/VehicleHistory';

const Routes = () => {
  return (
    <RouterDOM>
      <Route exact path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/registerVehicle" element={<RegisterVehicle />} />
      <Route path="/registerVehicle" element={<PrivateRoute />}>
        <Route path="/registerVehicle" element={<RegisterVehicle />} />
      </Route>
      <Route path="/myAccount" element={<PrivateRoute />}>
        <Route path="/myAccount" element={<MyAccount />} />
      </Route>
      <Route path="/bookingRequest" element={<PrivateRoute />}>
        <Route path="/bookingRequest" element={<BookingRequest />} />
      </Route>
      <Route path="/details/:id" element={<Details />} />

      <Route path="/rateExperience/:rentalRequestId" element={<RateExperience />} />
      <Route path="/myRentals" element={<MyRentals />} />
      <Route path="/vehicleHistory" element={<VehicleHistory />} />
      <Route path="/payment/:id" element={<Payment />} />
    </RouterDOM>
  );
};



export default Routes;