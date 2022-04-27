import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGlobalContext } from './Context/appContext';

function ProtectedRoutes() {
  const { user } = useGlobalContext();
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
