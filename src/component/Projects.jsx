import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './projects.css';
import web from '../assets/web.json';
import app from '../assets/app.json';
import homepagescreenshot from '../assets/homepagescreenshot.png';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    desc: 'Developed a fully-featured online store with cart, payment, and admin dashboard.',
    icon: web,
  },
  {
    title: 'Online Health Care Application',
    desc: 'Built a cross-platform app for tracking health metrics using React Native and Firebase.',
    icon: app,
  },
  {
    title: 'AI Chatbot Integration',
    desc: 'Implemented a GPT-powered chatbot for FAQs and live support.',
    icon: web,
  },
  {
    title: 'Machine Learning for Sales Forecasting',
    desc: 'Built predictive model using Random Forest and XGBoost to forecast monthly sales.',
    icon: homepagescreenshot
    ,
  },
  {
    title: 'Custom CRM System',
    desc: 'Developed a CRM web app with lead management, analytics, and user roles for a real estate company.',
    icon: web,
  },
  {
    title: 'SEO Analytics Dashboard',
    desc: 'Built dashboard for tracking SEO performance, keyword rankings, and site traffic.',
    icon: web,
  },
];

const Projects = () => {
  return (
    <div className="services-section py-1 bg-body-tertiary pb-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold display-5 mb-3">
              Work History <span>!</span>
            </h2>
            <p className="text-muted mb-4">
              Explore some of our top project highlights—from e-commerce solutions and health tracking apps to AI integrations and machine learning systems. Each project reflects our commitment to quality and innovation.
            </p>
          </div>

          {/* Right side (Carousel) */}
          <div className="col-lg-6">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={2}
              spaceBetween={30}
              autoplay={{ delay: 5000 }}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              className="projects-swiper"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="card service-card text-center p-4 shadow-sm h-100">
                    <div className="mb-3">
                      <lottie-player
                        src={project.icon}
                        background="transparent"
                        speed="1"
                        style={{ width: '100px', height: '100px', margin: '0 auto' }}
                        loop
                        autoplay
                      ></lottie-player>
                    </div>
                    <h5 className="fw-bold">{project.title}</h5>
                    <p className="text-muted">{project.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Prev/Next Buttons */}
            <div className="custom-nav text-center mt-4 d-flex justify-content-center gap-4">
              <button className="custom-prev nav-btn d-flex align-items-center justify-content-center">
                <ArrowLeftCircle size={40} />
              </button>
              <button className="custom-next nav-btn d-flex align-items-center justify-content-center">
                <ArrowRightCircle size={40} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
