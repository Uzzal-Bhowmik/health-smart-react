import React, { useContext } from "react";
import "./SingleProduct.css";
import { useNavigate } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { AuthContext } from "../../context/ContextAuth";
import { toast } from "react-hot-toast";

const SingleProduct = ({ product }) => {
  const { group, name, mg, img, price } = product;

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleShop = () => {
    if (user?.uid) {
      toast.success(<b>{name} is added to cart.</b>);
    } else {
      navigate("/shop");
    }
  };
  return (
    <div className="product-card">
      <span className="product-group">{group}</span>
      <img src={img} className="product-img" alt="" />
      <h4 className="fs-3 fw-semibold">{name}</h4>
      <p className="product-mg my-3">{mg} grams</p>

      <div className="service-price">
        <span>{price}</span>
        <span>USD</span>
      </div>

      <button className="service-btn" onClick={handleShop}>
        Add to Cart <BsCart2 />
      </button>
    </div>
  );
};

export default SingleProduct;
