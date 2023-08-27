import React, { useEffect, useState } from "react";
import "./WeightSection.css";
import CountUp from "react-countup";
import { BsArrowRight, BsCart2 } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const WeightSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const notify = (name) => {
    toast.success(<b>{`${name} is added to cart.`}</b>, {
      position: "top-right",
    });
  };

  const navigate = useNavigate();
  const handleShop = () => {
    navigate("/shop");
  };

  return (
    <div className="container mt-5">
      <div className="flex-center weight-container">
        <div className="left-side">
          <h1 className="fs-1 fw-bolder" style={{ color: "white" }}>
            Weight Maintenance Products
          </h1>
          <p className="mt-3 text-muted fw-semibold">
            Health Smart provides international standard products with approval
            from thousands of dietitians known world-wide.
          </p>
        </div>

        <div className="flex-center right-side">
          <div>
            <h1>
              +
              <CountUp
                start={3000}
                end={4589}
                duration={3}
                enableScrollSpy={true}
                scrollSpyDelay={1}
              />
            </h1>
            <p>lean people</p>
          </div>

          <div>
            <h1>
              +
              <CountUp
                start={100}
                end={710}
                duration={3}
                enableScrollSpy={true}
                scrollSpyDelay={1}
              />
            </h1>
            <p>professional specialist</p>
          </div>

          <div>
            <h1>
              +
              <CountUp
                start={2000}
                end={5490}
                duration={4}
                enableScrollSpy={true}
                scrollSpyDelay={2}
              />
            </h1>
            <p>satisfied customer reviews</p>
          </div>
        </div>
      </div>

      <div className="flex-between">
        <h4 className="mt-5 mb-5 fs-1 text-light fw-bold">
          Top Selling Products This Week
        </h4>

        <button
          className="d-block service-btn bg-light fw-bold"
          style={{
            width: "220px",
            height: "50px",
            marginInline: "0",
            marginRight: "30px",
            color: "rgb(2, 165, 118)",
            border: "none",
          }}
          onClick={handleShop}
        >
          See More <BsArrowRight className="mt-1" />
        </button>
      </div>

      <div className="product-container flex-center pb-5">
        {products &&
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <span className="product-group">{product?.group}</span>
              <img src={product?.img} alt="" />
              <h4 className="fs-3 fw-semibold">{product?.name}</h4>
              <p className="product-mg my-3">{product?.mg} grams</p>

              <div className="service-price">
                <span>{product?.price}</span>
                <span>USD</span>
              </div>

              <button
                className="service-btn"
                onClick={() => notify(product?.name)}
              >
                Add to Cart <BsCart2 />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WeightSection;
