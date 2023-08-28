import React, { useEffect } from "react";
import "./Blogs.css";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import SingleBlog from "../SingleBlog/SingleBlog";
import mixitup from "mixitup";

const Blogs = () => {
  const blogsData = useLoaderData();

  // filter buttons
  const filterButtonData = [
    {
      label: "all",
    },
    {
      label: "Cardiology",
    },
    {
      label: "Dermatology",
    },
    {
      label: "Nutrition",
    },
    {
      label: "Gastronology",
    },
    {
      label: "Psychiatry",
    },
  ];

  // mix it up js
  useEffect(() => {
    mixitup(".blogs", {
      selectors: {
        target: ".blog-mix",
      },
      animation: {
        duration: 500,
      },
    });
  }, []);

  return (
    <div className="blogs-section">
      <div className="blogs-banner-container">
        <div className="section-banner container">
          <div>
            <Link to="/" className="back-btn-link text-muted">
              <div>
                <BsArrowLeft />
              </div>
              <p>Back to Home</p>
            </Link>

            <div className="animate__animated animate__fadeInLeft animate__slow">
              <h1 className="section-title fs-1 fw-bold mt-4 mb-3">
                Blog & Articles
              </h1>
              <p className="fw-semibold fs-6 text-muted ms-2">
                Welcome to our vibrant and insightful blog, your go-to
                destination for best dietary plans, <br /> knowledge enriching
                articles, and expert advice.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="blogs-container">
        <div className="blogs-header flex-between container">
          <h1 className="fw-bold" style={{ color: "rgb(0, 56, 62)" }}>
            Top Blogs
          </h1>

          <div className="filter-btn-container">
            {filterButtonData.map((btn) => (
              <button
                key={btn.label}
                className="filter-btn"
                data-filter={`${btn.label !== "all" ? "." + btn.label : "all"}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* blog card */}
        <div className="blogs">
          {blogsData.map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
