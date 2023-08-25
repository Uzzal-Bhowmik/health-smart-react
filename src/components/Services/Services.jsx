import React, { useEffect, useState } from "react";
import "./Services.css";
import ratings from "../../assets/ratings.png";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendarRange } from "react-icons/bs";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ellipse1 from "../../assets/banner-bg-1.png";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://64e8cbb899cf45b15fe02718.mockapi.io/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // slick slider settings
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="container position-relative">
      <img src={ellipse1} alt="" className="bg-blur-ellipse" />
      <h4 className="fw-bold section-title fs-1">Our Services</h4>
      <h1 className="fs-2 fw-bold ms-1 mt-4 mb-5 ms-2">
        Have Inquiry? Appoint and Disscus With Our Dietitian
      </h1>

      <Slider {...settings}>
        {services &&
          services.map((service) => (
            <div key={service.id} className="service-card">
              <span className="field">{service?.field}</span>

              <img src={service?.img} alt="" className="service-img" />
              <h4 className="service-title">{service?.title}</h4>

              <div className="mb-3 flex-start">
                <img src={ratings} alt="" />
                <span className="ms-1">{service?.rating} | </span>
                <span className="ms-1">{service?.reviews} Reviews</span>
              </div>

              <p className="mb-3 text-muted">{service?.description}</p>

              <div className="service-location">
                <CiLocationOn />
                <span>{service?.location}</span>
              </div>

              <div className="service-price">
                <span>{service?.price}</span>
                <span>USD</span>
              </div>

              <Link
                to={`/services/${service?.id}`}
                className="text-decoration-none"
              >
                <button className="service-btn">
                  Make an Appointment <BsCalendarRange />
                </button>
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Services;
