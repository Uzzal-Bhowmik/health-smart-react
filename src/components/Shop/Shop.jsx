import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Pagination } from "react-pagination-bar";
import "react-pagination-bar/dist/index.css";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import "./Shop.css";
import SingleProduct from "../SingleProduct/SingleProduct";
import logo from "../../assets/logo.png";
import { Spinner } from "react-rainbow-components";

const Shop = () => {
  const products = useLoaderData();

  const [isPageLoading, setIsPageLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;

  // handle page change
  const handlePageChange = (pageNumber) => {
    setIsPageLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsPageLoading(false);
    }, 1000);
  };

  return (
    <div className="shop">
      <div className="shop-banner-container">
        <div className="section-banner container">
          <div>
            <Link to="/" className="back-btn-link text-muted">
              <div>
                <BsArrowLeft />
              </div>
              <p>Back to Home</p>
            </Link>

            <div className="animate__animated animate__fadeInLeft animate__slow">
              <h1 className="section-title fs-1 fw-bold mt-4 mb-3">Shop</h1>
              <p className="fw-semibold fs-6 text-muted ms-2">
                Welcome to our resourceful shop, with all your dietary and
                nutrition-based medicines and products <br /> of international
                standard, top quality and prescribed by doctors around the
                world.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="fw-bold ms-4 mt-5" style={{ color: "rgb(0, 56, 62)" }}>
          Top Selling Products of All Time
        </h1>

        {isPageLoading ? (
          <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="rainbow-position_relative rainbow-p-vertical_xx-large">
              <Spinner size="x-large" type="arc" variant="brand">
                <img src={logo} alt="" style={{ width: "60%" }} />
              </Spinner>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <div className="products-container container mt-5">
              {products
                ?.slice(
                  (currentPage - 1) * pagePostsLimit,
                  currentPage * pagePostsLimit
                )
                .map((product) => (
                  <div key={product.id}>
                    <SingleProduct product={product} />
                  </div>
                ))}
            </div>
          </>
        )}

        <Pagination
          currentPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageChange={(pageNumber) => handlePageChange(pageNumber)}
          totalItems={products.length}
          pageNeighbours={2}
          withProgressBar={true}
        />
      </div>
    </div>
  );
};
export default Shop;
