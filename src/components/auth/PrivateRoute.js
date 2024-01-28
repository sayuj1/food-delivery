import React from 'react';
import {
  Navigate
} from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  if (localStorage.getItem("isAuth") === "true") return children;
  return <Navigate to='/login' replace />;
}

export default PrivateRoute;