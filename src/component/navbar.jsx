import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={logo} alt="Company logo" className="img-fluid w-25 mt-3" />
        
        <button 
          className="navbar-toggler ms-auto border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarText" 
          aria-controls="navbarText" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-end">
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link px-2 fs-5"
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link mx-lg-2 fs-5"
                style={{ cursor: "pointer" }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="nav-link mx-lg-2 fs-5"
                style={{ cursor: "pointer" }}
              >
                Our Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="footer"
                smooth={true}
                duration={500}
                className="nav-link mx-lg-2 fs-5"
                style={{ cursor: "pointer" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;