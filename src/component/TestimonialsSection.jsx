import React from "react";
import Slider from "react-slick";
import { Container, Image } from "react-bootstrap";
import { FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: `Tech Pro revolutionized our digital marketing strategy. Their innovative campaigns and data-driven approach significantly increased our online engagement.`,
    name: "Emily Roberts",
    role: "Head of Marketing at Trendsetters Fashion",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: `Tech Pro exceeded our expectations with their AI development services. They provided cutting-edge AI solutions that seamlessly integrated with our existing systems.`,
    name: "Michael Lee",
    role: "CTO of FutureTech Innovations",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: `Their web development team built a sleek and responsive website that elevated our online presence. The process was smooth, and the results were outstanding.`,
    name: "Sarah Kim",
    role: "Founder of StyleNest",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: `Our mobile app was delivered with precision and intuitive design. Tech Pro understood our vision and made it better than we imagined.`,
    name: "Daniel Chen",
    role: "Product Manager at FitFlex",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    text: `SEO Optimization by Tech Pro brought our website to the first page of Google. We've seen a major increase in traffic and conversions.`,
    name: "Olivia Patel",
    role: "Marketing Director at GreenLeaf Solutions",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    text: `The AI development team delivered robust machine learning models that enhanced our operations significantly. Their expertise is unmatched.`,
    name: "James Anderson",
    role: "AI Lead at DataNest",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    text: `Tech Pro developed a custom web solution tailored exactly to our needs. They are attentive, agile, and very professional.`,
    name: "Priya Desai",
    role: "Operations Manager at QuickServe Inc.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    cssEase: "ease-in-out",
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#fff" }}>
      <Container className="text-center mb-5">
        {/* <span className="badge bg-light text-dark fs-6 px-3 py-2 shadow-sm">
          <strong>● TESTIMONIALS</strong>
        </span> */}
        <h2 className="fw-bold mt-3">Our Happy Client Says</h2>
        <p className="text-muted">Don't just take our words for it – Take theirs!</p>
      </Container>

      <Container>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3">
              <div
                className="rounded-4 shadow p-4 d-flex flex-column justify-content-between"
                style={{
                  background: "linear-gradient(to bottom right, #d946ef, #6366f1)",
                  color: "#fff",
                  minHeight: "350px",
                  position: "relative",
                }}
              >
                <FaQuoteRight size={30} className="mb-3 text-white" />
                <p className="fs-5">{item.text}</p>

                <div className="d-flex align-items-center mt-4">
                  <Image
                    src={item.image}
                    roundedCircle
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      border: "3px solid #fff",
                      marginRight: "15px",
                    }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold text-white">{item.name}</h6>
                    <small className="text-light">{item.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
