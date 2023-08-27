import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import bgBlur from "../../assets/banner-bg-1.png";
import { AuthContext } from "../../context/ContextAuth";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const { signIn, googleSignIn } = useContext(AuthContext);

  // location path to redirect
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");

    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    signIn(email, pass)
      .then((result) => {
        // sign in successful

        // navigate to the desired route
        navigate(from, { replace: true });
      })
      .catch((err) => setLoginError(err?.code));
  };

  const handleGoogle = () => {
    setLoginError("");
    googleSignIn()
      .then((result) => {
        console.log(result.user);

        // navigate to the desired route
        navigate(from, { replace: true });
      })
      .catch((err) => setLoginError(err?.code));
  };

  return (
    <div className="login-register-container">
      <div className="user-account-page container flex-center">
        <div className="left">
          <h1 className="fs-1 fw-bold">
            Sign In to <br />
            get your nutrients
          </h1>

          <p className="fw-semibold text-muted mb-0 fs-6">
            If you dont have an account <br />
            you can <Link to="/register">Register Here!</Link>
          </p>

          <img src={bgBlur} alt="" className="bg-blur" />
        </div>

        <div className="right">
          <h1 className="fs-1 fw-bold my-5">Welcome Back</h1>

          <form action="" onSubmit={handleLogin}>
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
              Recover Password?
            </a>

            {loginError && (
              <p className="mb-0 mt-3 ms-2 text-danger fw-bolder">
                {loginError}
              </p>
            )}

            <button type="submit">Sign In</button>
          </form>

          <div className="or-divider">
            <div className="left-divider"></div>
            <div className="or-text">Or</div>
            <div className="right-divider"></div>
          </div>

          <button
            className="external-login-method flex-start justify-content-between"
            onClick={handleGoogle}
          >
            <FcGoogle /> <span>Continue with Google</span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
