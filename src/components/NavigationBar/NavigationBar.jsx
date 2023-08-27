import React, { useContext, useEffect, useState } from "react";
import "./NavigationBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../../context/ContextAuth";
import { Spinner } from "react-rainbow-components";
import { NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
  const [path, setPath] = useState("");
  const { user, isLoading, logOut } = useContext(AuthContext);

  // finding pathname
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("login")) {
      setPath("login");
    } else {
      setPath("");
    }
  }, [location]);

  // log out
  const handleLogOut = () => {
    logOut()
      .then(() => {
        //sign out successful
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Link to="/" className="logo-container">
            <div>
              <img src={logo} alt="" />
              <p className="mb-0">
                Health Smart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 85 85"
                  fill="none"
                  className="logo-end-part"
                >
                  <g filter="url(#filter0_di_1_1081)">
                    <circle
                      cx="42.7926"
                      cy="37.2074"
                      r="16.2074"
                      fill="url(#paint0_linear_1_1081)"
                    />
                  </g>
                  <rect
                    x="39.2693"
                    y="28.0466"
                    width="7.04668"
                    height="18.3214"
                    rx="1.057"
                    fill="white"
                  />
                  <rect
                    x="51.9532"
                    y="33.6838"
                    width="7.04668"
                    height="18.3214"
                    rx="1.057"
                    transform="rotate(90 51.9532 33.6838)"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_di_1_1081"
                      x="0.923609"
                      y="0.740797"
                      width="83.738"
                      height="83.7381"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="5.40245" />
                      <feGaussianBlur stdDeviation="12.8308" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0862745 0 0 0 0 0.470588 0 0 0 0 0.94902 0 0 0 0.2 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_1081"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_1081"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="5.40245" />
                      <feGaussianBlur stdDeviation="2.70123" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect2_innerShadow_1_1081"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_1081"
                      x1="24.062"
                      y1="8.28834"
                      x2="97.7333"
                      y2="16.2146"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3A8EF6" />
                      <stop offset="1" stopColor="#6F3AFA" />
                    </linearGradient>
                  </defs>
                </svg>
              </p>
            </div>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <HashLink to="/#home" className="navlink">
                Home
              </HashLink>

              <HashLink to="/#features" className="navlink">
                Features
              </HashLink>

              <HashLink to="/#services" className="navlink">
                Services
              </HashLink>

              <HashLink to="/#products" className="navlink">
                Products
              </HashLink>
              <Link to="/blogs" className="navlink">
                Blog
              </Link>
              <Link to="/shop" className="navlink">
                Shop
              </Link>

              <HashLink to="/#newsletter" className="navlink">
                Contact Us
              </HashLink>

              {/* <NavDropdown title="Collections" id="basic-nav-dropdown">
                <HashLink
                  data-rr-ui-dropdown-item=""
                  class="dropdown-item navlink"
                  to="/blogs"
                >
                  Blog
                </HashLink>
                <HashLink
                  data-rr-ui-dropdown-item=""
                  class="dropdown-item navlink"
                  to="/all-products"
                >
                  Shop
                </HashLink>
              </NavDropdown> */}
            </Nav>

            {/* ****************************** 
              Conditions:

              # if isLoading true:
                    spinner
              # else  
                  if user true:

                    if userPhoto true:
                      photo img
                    else 
                      show user email or displayName first letter (uppercase)        
              
                  else 
                    // do nothing
            
              ****************************************************
            */}

            {isLoading ? (
              <div>
                <div className="rainbow-position_relative rainbow-p-vertical_xx-large">
                  <Spinner size="large" type="arc" variant="brand">
                    <img src={logo} alt="" style={{ width: "60%" }} />
                  </Spinner>
                </div>
              </div>
            ) : (
              <>
                {user?.uid && (
                  <div
                    className="me-3"
                    style={{ cursor: "pointer", width: "47px" }}
                  >
                    <>
                      {user?.photoURL ? (
                        <img
                          src={`${user.photoURL}`}
                          style={{
                            width: "100%",
                            borderRadius: "50%",
                          }}
                          title={`${user.email}`}
                        />
                      ) : (
                        <span
                          className="fs-3 fw-bold rounded-circle bg-success text-light d-block text-center"
                          title={`${user?.email}`}
                        >
                          {(user?.displayName !== null &&
                            user?.displayName[0].toUpperCase()) ||
                            user?.email[0].toUpperCase()}
                        </span>
                      )}
                    </>
                  </div>
                )}
              </>
            )}

            {!user?.uid ? (
              <>
                {path === "login" ? (
                  <Link to="/register" className="login-btn">
                    <button>Register</button>
                  </Link>
                ) : (
                  <Link to="/login" className="login-btn">
                    <button>Log In</button>
                  </Link>
                )}
              </>
            ) : (
              <button className="login-btn" onClick={handleLogOut}>
                Log Out
              </button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
