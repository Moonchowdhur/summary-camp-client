import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../provider/Authprovider";
import useUser from "../hooks/useUser";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const [isUser] = useUser();
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="radial-progress text-primary" style={{ "--value": 70 }}>
        70%
      </div>
    );
  }

  if (user && isUser) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
