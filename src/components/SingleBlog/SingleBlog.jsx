import React from "react";
import "./SingleBlog.css";

const SingleBlog = ({ blog }) => {
  const { img, title, author, date, category, description } = blog;

  return (
    <div className={`blog-mix ${category}`}>
      <div className={`blog`}>
        <span>{category.replace("all", "")}</span>

        <img src={img} alt="" />

        <h4 className="fw-bold mt-4 mb-3">{title}</h4>

        <p className="blog-author fw-semibold text-muted">Author: {author}</p>
        <p className="blog-date fw-semibold text-muted">Date: {date}</p>

        <p className="blog-desc px-2 mb-4">{description}</p>

        <button type="button" className="service-btn mb-2">
          Read More
        </button>
      </div>
    </div>
  );
};

export default SingleBlog;
