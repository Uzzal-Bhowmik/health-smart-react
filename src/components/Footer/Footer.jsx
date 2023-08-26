import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsInstagram,
  BsTelephone,
  BsYoutube,
} from "react-icons/bs";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container container flex-between align-items-start">
      <div className="left">
        <Link to="/" className="text-decoration-none">
          <img src={logo} alt="" />

          <h3 className="fw-bold my-3" style={{ color: "rgb(81, 107, 248)" }}>
            Health Smart
          </h3>
        </Link>

        <p className="text-muted fw-semibold">
          Health matters to us and we provide best <br />
          dietary advice and medicines.
        </p>

        <div className="social-icons">
          <BsFacebook />
          <BsTwitter />
          <BsPinterest />
          <BsInstagram />
          <BsYoutube />
        </div>
      </div>

      <div className="middle">
        <h5 className="fs-4 fw-bold">Important Links</h5>
        <HashLink smooth to="/#home">
          Home
        </HashLink>
        <HashLink smooth to="/#features">
          Features
        </HashLink>
        <HashLink smooth to="/#services">
          Services
        </HashLink>
        <HashLink smooth to="/#products">
          Products
        </HashLink>
        <HashLink smooth to="/#newsletter">
          Contact Us
        </HashLink>
      </div>

      <div className="right">
        <h5 className="fs-4 fw-bold">Contact Us</h5>
        <div>
          <IoMailOutline />
          <span>ubcreativity111@gmail.com</span>
        </div>
        <div>
          <BsTelephone />
          <span>01938051064</span>
        </div>
        <div>
          <IoLocationOutline />
          <span>Amin Residential Area, Bandar, Narayanganj</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
