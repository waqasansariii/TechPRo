import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import bilal from "../assets/bilal.jpg";
import jamshaid from '../assets/jamshaid.jpg';
const leaders = [
  {
    name: "Muhammad Bilal",
    title: "AI Developer & Data Scientist",
    image: bilal,
    // socials: {
    //   facebook: "#",
    //   twitter: "#",
    //   instagram: "#",
    // },
  },
  {
    name: "Muhammad Jamshed",
    title: "Full Stack Developer",
    image: jamshaid,
    // socials: {
    //   facebook: "#",
    //   twitter: "#",
    //   instagram: "#",
    // },
  },
];

const LeadershipSection = () => {
  return (
    <section style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE - Text */}
          <Col md={6}>
            <div className="text-start mb-4">
              {/* <span className="badge bg-white shadow px-4 py-2 text-dark fw-semibold rounded-pill" style={{"fontSize":"20px"}}>
                ● OUR TEAM MEMBER
              </span> */}
              <h2 className="fw-bold mt-4" style={{}}>Meet TechPro Solutions Leadership</h2>
              <p className="text-muted">
                At TechPro Solutions, our team of digital experts is dedicated to transforming ideas into innovative digital solutions. Each member brings a wealth of experience in AI, design, and technology, working together to deliver exceptional services tailored to your needs. Get to know the minds behind our success.
              </p>
            </div>
          </Col>

          {/* RIGHT SIDE - Team Cards */}
          <Col md={6}>
            <Row className="gy-4">
              {leaders.map((leader, idx) => (
                <Col xs={6} key={idx}>
                  <Card className="rounded-4 border-0 shadow-sm overflow-hidden">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        background: "linear-gradient(to bottom right, #1e3a8a, #1e40af)",
                        padding: "2rem 1rem",
                        borderTopLeftRadius: "1.5rem",
                        borderTopRightRadius: "1.5rem",
                      }}
                    >
                      <Image
                        src={leader.image}
                        roundedCircle
                        style={{
                          width: "150px",
                          height: "150px",
                          border: "5px dashed #fff",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <Card.Body className="text-center">
                      <Card.Title className="fw-bold">{leader.name}</Card.Title>
                      <Card.Subtitle className="mb-3 text-muted">
                        {leader.title}
                      </Card.Subtitle>
                      <div className="d-flex justify-content-center gap-3">
                        {/* <a href={leader.socials.facebook} className="text-dark fs-5">
                          <FaFacebookF />
                        </a> */}
                        {/* <a href={leader.socials.instagram} className="text-dark fs-5">
                          <FaInstagram />
                        </a> */}
                        {/* <a href={leader.socials.twitter} className="text-dark fs-5">
                          <FaTwitter />
                        </a> */}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LeadershipSection;
