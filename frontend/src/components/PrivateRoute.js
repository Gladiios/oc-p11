import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// children rend  conditionnel les composants dans privateroute
const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.token != null);

  return isLoggedIn ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
