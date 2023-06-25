import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
  const userLoggedIn = () => {
    const role = localStorage.getItem("role"); // User da login
    if (role==="user") return true;
    return false;
  };

  if (!userLoggedIn()) {
    return <Navigate to={""} replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
