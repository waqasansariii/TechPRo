import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaUsers,
  FaDollarSign,
  FaBullseye,
  FaChartBar,
  FaCalendarCheck,
  FaBriefcase,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const features = [
  { icon: <FaUsers size={30} />, title: "Experienced Professionals" },
  { icon: <FaDollarSign size={30} />, title: "Cost Rationality" },
  { icon: <FaBullseye size={30} />, title: "Targeted Solutions" },
  { icon: <FaChartBar size={30} />, title: "Quality and Innovation" },
  { icon: <FaCalendarCheck size={30} />, title: "Meeting Deadlines" },
  { icon: <FaBriefcase size={30} />, title: "Transparent Communication" },
];

const WhyChooseSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="text-white py-5 my-5"
      style={{
        background: "linear-gradient(to right, #ec4899, #8b5cf6)",
        overflow: "hidden",
      }}
      id = "choose"

    >
      <Container>
        <Row>
          {/* Left Column - Icons with animation */}
          <Col md={6}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Row>
                {features.map((feature, index) => (
                  <Col xs={4} className="mb-4 text-center" key={index}>
                    <div
                      className="bg-white rounded-circle d-flex justify-content-center align-items-center mx-auto mb-2"
                      style={{ width: "80px", height: "80px", color: "#d63384" }}
                    >
                      {feature.icon}
                    </div>
                    <h6>{feature.title}</h6>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Col>

          {/* Right Column - Text with animation */}
          <Col md={6} className="d-flex flex-column justify-content-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span
                className="badge bg-white text-dark fw-bold mb-3 px-3 py-2 align-self-start"
                style={{ fontSize: "2.5rem" }}
              >
                WHY CHOOSE US
              </span>
              <h2 className="fw-bold mt-4 mb-2" style={{ lineHeight: '1.3' }}>
                Why Choose Tech Pro!
              </h2>
              <p className="mb-3\
              " style={{ lineHeight: '1.6', fontSize: '1rem' }}>
                Choose Tech Pro Systems for tailored, innovative solutions that drive your business forward.
                We deliver high quality services through highly skilled technical consultants. At AI Pearlz Solutions,
                we don't just create digital solutions—we create experiences that inspire, engage, and drive results.
                Let's create something amazing together.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseSection;
