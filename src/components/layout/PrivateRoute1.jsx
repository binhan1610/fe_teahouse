import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute1 = (props) => {
  const userLoggedIn = () => {
    const role = localStorage.getItem("role"); // User da login

    if (role==="admin") return true;
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

export default PrivateRoute1;
