import React from "react";
import "./Home.css";
import heartIcon from "../../assets/banner-heart.png";
import searchOps from "../../assets/search-options.png";
import doctor from "../../assets/doctor.png";
import bannerBg1 from "../../assets/banner-bg-1.png";
import bannerBg2 from "../../assets/banner-bg-2.png";
import BmiCalculator from "../BmiCalculator/BmiCalculator";
import Services from "../Services/Services";
import WeightSection from "../WeightSection/WeightSection";

const Home = () => {
  return (
    <div className="home">
      <img src={bannerBg1} alt="" className="banner-bg bg-1" />
      <img src={bannerBg2} alt="" className="banner-bg bg-2" />

      {/* Top Banner Start */}
      <div className=" p-2 home-banner">
        <div className=" left-side">
          <div className="health-token">
            <p className="mb-0">Health Matters </p>
            <img src={heartIcon} alt="" />
          </div>

          <div className="banner-title">
            <h1>
              <span>One Step Solution</span>
              <br />
              for all your dietary <br />
              needs.
            </h1>

            <p className="mb-0">
              Using your BMI index we advise the best diet plans that is
              suitable for you.
            </p>
          </div>

          <div className="search-bar">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search your service"
            />
            <img src={searchOps} alt="" style={{ cursor: "pointer" }} />
          </div>
        </div>

        <div className=" right-side">
          <img src={doctor} alt="" />
        </div>
      </div>
      {/* Top Banner End */}

      {/* Bmi Calculator Start */}
      <div className="py-5 bmi-container">
        <BmiCalculator />
      </div>
      {/* Bmi Calculator End */}

      {/* Services Section Start */}
      <div className="py-5 services-container">
        <Services />
      </div>
      {/* Services Section End */}

      {/* Weight Section Start */}
      <div className="py-5 weight-section">
        <WeightSection />
      </div>
      {/* Weight Section End */}
    </div>
  );
};

export default Home;
