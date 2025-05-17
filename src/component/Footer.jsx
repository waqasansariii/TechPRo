import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './footer.css'; // Create this CSS file for styling
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-section my-auto">
          <p className="footer-about">
            TechPro, we are dedicated to cultivating an environment where our employees can thrive both personally and professionally. Our dynamic and diverse team collaborates seamlessly to achieve shared goals, fostering a strong sense of camaraderie and unity.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">USEFUL LINKS</h3>
          <ul className="footer-links">
            <li className="nav-item">
              <Link
                className='hovertext'
                to="about"
                smooth={true}
                duration={500}
                // className="nav-link px-2 fs-5"
                style={{ cursor: "pointer" }}
              >
                About TechPro
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className='hovertext'

                to="services"
                smooth={true}
                duration={500}
                // className="nav-link px-2 fs-5"
                style={{ cursor: "pointer" }}
              >
                What We Offer              </Link>
            </li>
            <li className="nav-item">
              <Link
                className='hovertext'

                to="choose"
                smooth={true}
                duration={500}
                // className="nav-link px-2 fs-5"
                style={{ cursor: "pointer" }}
              >
                Why Choose Us
              </Link>
            </li>
            {/* <li><a href="/testimonials">Testimonials</a></li> */}
            {/* <li><a href="/faqs">FAQs</a></li> */}
            <li className="nav-item">
              <Link
                className='hovertext'

                to="footer"
                smooth={true}
                duration={500}
                // className="nav-link px-2 fs-5"
                style={{ cursor: "pointer" }}
              >
                Contact Us
              </Link>
            </li>           </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">CONTACT INFORMATION</h3>
          <p className="footer-text">Feel free to contact & reach us !!</p>
          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              <span>Ahmad City Housing Scheme Lahore, Punjab, Pakistan</span>
            </li>
            <li>
              <FaPhone className="footer-icon" />
              <a
                href="https://wa.me/923081950492"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                ‪+92-308-1950492‬
              </a>
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              <a
                href="mailto:techprosolutionsa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                techprosolutionsa@gmail.com
              </a>
            </li>
          </ul>
        </div>


      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 TechPro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;