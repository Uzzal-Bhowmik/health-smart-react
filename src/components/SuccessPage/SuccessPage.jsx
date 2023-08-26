import React from "react";
import "./SuccessPage.css";
import { BsCheckAll } from "react-icons/bs";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="success-page flex-center">
      <div className="success-card">
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#f8faf5",
            margin: "0 auto 1rem auto",
          }}
        >
          <BsCheckAll />
        </div>
        <h1 className="mt-5 text-success fw-bold">Success</h1>
        <p className="mt-3">
          Your appointment has been successfully scheduled.
          <br />
          Thanks for being a valuable member!
        </p>

        <div className="mt-5">
          <Link to="/#services">
            <button className="btn btn-outline-success fw-bold continue-btn w-100">
              Explore Other Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
