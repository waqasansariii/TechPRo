import React from "react";
import "../App.css"; // Optional custom styles
import { Link } from "react-scroll"; // Import the Link component

function HeroSection() {
  return (
    <div
      className="hero-section d-flex align-items-center justify-content-center text-center text-white"
      id="home"
    >
      <div className="container">
        {/* Label / Tag */}
        {/* <div className="mb-3">
          <span className="badge fs-2 rounded-pill bg-light text-dark fw-semibold px-3">
            ● Pro Tech Solution ●
          </span>
        </div> */}

        {/* Main Heading */}
        <h1 className="fw-bold display-2 px-3  text-white d-inline-block extra-margin">
          Next-Gen AI & Full-Stack Web Development
        </h1>

        {/* Subtext */}
        <p className="lead mt-3 mb-4">We Transforming Ideas into Reality</p>

        {/* CTA Button */}
        {/* <a href="#contact" >
        </a> */}
        <Link
          to="footer"
          smooth={true}
          duration={500}
          className="btn btn-primary px-4 py-2"
        >
          GET FREE CONSULTANT
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
