import React from "react";
import "./ErrorPage.css";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const errorObj = useRouteError();

  return (
    <div id="error-page">
      <div>
        <h1 className="text-danger fw-bold mb-4">Oops!</h1>
        <p>{errorObj?.data}</p>
        <p>
          <i className="">
            <span className="text-danger fw-bolder">
              {errorObj?.status || "404"}
            </span>
            , Route {errorObj?.statusText}
          </i>
        </p>
        <Link to="/" className="text-decoration-none">
          <button className="btn btn-primary px-4 mt-4">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
