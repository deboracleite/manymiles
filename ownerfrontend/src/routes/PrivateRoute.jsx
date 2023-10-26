import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

const PrivateRoute = () => {
  const { owner } = useAuth();
  return !!owner ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;