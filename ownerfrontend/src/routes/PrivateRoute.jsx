import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

const PrivateRoute = () => {
  const { user } = useAuth();
  return !!user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;