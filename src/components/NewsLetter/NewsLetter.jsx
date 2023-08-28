import React from "react";
import "./NewsLetter.css";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

const NewsLetter = () => {
  const formspreeKey = import.meta.env.VITE_FORMSPREE_KEY;

  return (
    <div className="flex-between mt-5">
      <div className="fruit-left">
        <img src="https://i.ibb.co/0rFbnJR/left-fruit.png" alt="" />
      </div>

      <div className="text-center">
        <AnimationOnScroll
          animateIn="animate__slideInLeft"
          duration={2}
          offset={5000}
          animateOnce="true"
        >
          <h6 className="section-title fw-bold fs-5">CONTACT</h6>
          <h1 className="mt-3 mb-4 fw-bold" style={{ color: "rgb(0, 56, 63)" }}>
            Need Help Finding the right doctor
            <br />
            for you?
          </h1>
          <p className="text-muted fw-semibold mb-5 w-75 mx-auto">
            Globally, adolescents―particularly girls―are greatly affected by
            dietary malnutrition, partly due to their specific biological needs.
            <br /> Hence, <Link to="/">Health Smart</Link> has become a helping
            hand.
          </p>

          <form
            action={`https://formspree.io/f/${formspreeKey}`}
            method="post"
            className="newsletter-btn"
          >
            <input
              type="email"
              name="Email"
              placeholder="Enter Email Address"
              required
            />
            <button type="submit">Send</button>
          </form>
        
      </div>

      <div className="fruit-right">
        <img src="https://i.ibb.co/SB7ZX75/right-fruit.png" alt="" />
      </div>
    </div>
  );
};

export default NewsLetter;
