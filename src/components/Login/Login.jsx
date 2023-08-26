import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import bgBlur from "../../assets/banner-bg-1.png";

const Login = () => {
  return (
    <div className="login-register-container">
      <div className="user-account-page container flex-center">
        <div className="left">
          <h1 className="fs-1 fw-bold">
            Sign In to <br />
            get your nutrients
          </h1>

          <p className="fw-semibold text-muted mb-0 fs-6">
            If you don't have an account <br />
            you can <Link to="/register">Register Here!</Link>
          </p>

          <img src={bgBlur} alt="" className="bg-blur" />
        </div>

        <div className="right">
          <h1 className="fs-1 fw-bold my-5">Welcome Back</h1>

          <form action="">
            <input
              type="email"
              name="email"
              id=""
              required
              placeholder="Enter Email"
            />
            <br />
            <input
              type="password"
              name="password"
              id=""
              required
              placeholder="Enter Password"
            />

            <br />
            <a
              className="text-end fw-semibold text-decoration-none d-block"
              href="#"
              style={{ color: "#C7C7C7" }}
            >
              Recover Password?
            </a>

            <button type="submit">Sign In</button>
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

export default Login;
