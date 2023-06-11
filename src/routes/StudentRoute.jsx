import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../provider/Authprovider";
import useUser from "../hooks/useUser";

const StudentRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const [isUser, , isLoading] = useUser();
  const location = useLocation();
  console.log(location);

  if (loading || isLoading) {
    return (
      <div className="radial-progress text-primary" style={{ "--value": 70 }}>
        70%
      </div>
    );
  }

  if (user && isUser?.role === "student") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;
