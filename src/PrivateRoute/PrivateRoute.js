import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth()
  const location = useLocation()
  if (isLoading) {
    return <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh" }}><CircularProgress /></Box>
  } else {
    return user.email ? children : <Navigate to="/login" replace state={{ from: location }} />;
  }
};

export default PrivateRoute;
