import React from "react";
import "./Register.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import bgBlur from "../../assets/banner-bg-1.png";

const Register = () => {
  return (
    <div className="login-register-container">
      <div className="user-account-page container flex-center">
        <div className="left">
          <h1 className="fs-1 fw-bold">
            Sign Up to <br />
            get your nutrients
          </h1>

          <p className="fw-semibold text-muted mb-0 fs-6">
            If you have an account <br />
            you can <Link to="/login">Login Here!</Link>
          </p>

          <img src={bgBlur} alt="" className="bg-blur" />
        </div>

        <div className="right">
          <h1 className="fs-1 fw-bold my-5">Welcome User</h1>

          <form action="">
            <input type="text" name="name" placeholder="Enter Full Name" />
            <br />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Email"
            />
            <br />
            <input
              type="password"
              name="password"
              required
              placeholder="Enter Password"
            />

            <br />
            <a
              className="text-end fw-semibold text-decoration-none d-block"
              href="#"
              style={{ color: "#C7C7C7" }}
            >
              Having Issue?
            </a>

            <button type="submit">Sign Up</button>
          </form>

          <div className="or-divider">
            <div className="left-divider"></div>
            <div className="or-text">Or</div>
            <div className="right-divider"></div>
          </div>

          <div className="external-login-method flex-start justify-content-between bg-light">
            <FcGoogle /> <span>Continue with Google</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
