import React from "react";
import "./NavigationBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
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
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/usage"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                How To Use
              </NavLink>
            </Nav>

            <Link to="/login" className="login-btn">
              <button>Log In</button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
