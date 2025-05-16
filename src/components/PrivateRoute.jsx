import React from 'react';
import { Navigate } from 'react-router-dom';
import { isTokenValid, getUserRole } from '../services/AuthServices';

const PrivateRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = isTokenValid(token);
  const userRole = getUserRole(token);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default PrivateRoute;