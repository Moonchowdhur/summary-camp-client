import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../provider/Authprovider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div>
        <span className="loading loading-bars mx-auto loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
