import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/ContextAuth";
import logo from "../../assets/logo.png";
import { Spinner } from "react-rainbow-components";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="rainbow-position_relative rainbow-p-vertical_xx-large">
          <Spinner size="x-large" type="arc" variant="brand">
            <img src={logo} alt="" style={{ width: "60%" }} />
          </Spinner>
        </div>
      </div>
    );
  }

  if (user?.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
