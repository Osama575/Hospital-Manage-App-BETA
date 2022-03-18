import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children }) => {
  const { user, isLoading, userRole } = useAuth()
  console.log(userRole)
  const location = useLocation()
  if (isLoading || userRole !== "admin") {
    return <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh" }}><CircularProgress /></Box>
  } else {
    if (user.email && userRole === "admin") {
      return children
    } else {
      return <Navigate to="/login" replace state={{ from: location }} />;
    }
  }
};

export default AdminRoute;
