import React from 'react';
import { AuthProvider } from './auth';

const AppProvider = ({ children }) => (
  <AuthProvider>
    {/* <ToastProvider> */}
      {children}
      {/* </ToastProvider> */}
  </AuthProvider>
);

export default AppProvider;