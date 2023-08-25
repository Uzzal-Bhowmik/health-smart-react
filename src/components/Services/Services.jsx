import React, { useEffect, useState } from "react";
import "./Services.css";
import ratings from "../../assets/ratings.png";
import { CiLocationOn } from "react-icons/ci";
import Slider from "react-slick";

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
    slidesToScroll: 3,
  };

  console.log(services);

  return (
    <div className="container">
      <h4 className="fw-bold section-title">Our Services</h4>

      <Slider {...settings}>
        {services &&
          services.map((service) => (
            <div key={service.id} className="service-card border">
              <span>{service?.field}</span>
              <img src={service?.img} alt="" />
              <h4>{service?.title}</h4>

              <div>
                <img src={ratings} alt="" />
                <span>{service?.rating} | </span>
                <span>{service?.reviews} Reviews</span>
              </div>

              <p>{service?.description}</p>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Services;
