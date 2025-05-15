import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Services.css';
import web from '../assets/web.json';
import app from '../assets/app.json';
import datascience from '../assets/datascience.json';
import ai from '../assets/ai.json';
import ml from '../assets/ml.json'

import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    desc: 'Modern, responsive, SEO-friendly websites according to your needs.',
    icon: web,
  },
  {
    title: 'App Development',
    desc: 'Feature-rich Android/iOS mobile applications to engage users.',
    icon: app,
  },
  {
    title: 'AI Development',
    desc: 'Automate and innovate your business using cutting-edge AI solutions.',
    icon: ai,
  },
  {
    title: 'Machine Learning',
    desc: 'Gain insights and predictions with robust ML models for better result and acurracy.',
    icon: ml,
  },
  {
    title: 'Data Science Project',
  desc: 'Turn raw data into business insights with analytics and visualization tools.',
  icon: datascience,
  },
  {
    title: 'SEO Optimization',
    desc: 'Improve your site visibility and rank higher on search engines.',
    icon: web,
  },
];

const Services = () => {
  return (
    <div className="services-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            {/* <div className="d-inline-block px-4 py-2 bg-white rounded-pill shadow-sm mb-3">
              <strong className="text-primary">WHAT WE OFFER</strong>
            </div> */}
            <h2 className="fw-bold display-5 mb-3">
              Services We Can Help You With <span className="">!</span>
            </h2>
            <p className="text-muted mb-4">
              We specialize in a range of digital services tailored to elevate your online presence and drive growth.
              Explore limitless possibilities with our AI development services.
              Our AI solutions are here to drive innovation, efficiency, and success in your business endeavors.
            </p>
          </div>

          {/* Right side (Carousel) */}
          <div className="col-lg-6">
          <Swiper
  modules={[Navigation, Autoplay]}
  slidesPerView={2}
  spaceBetween={30}
  autoplay={{ delay: 4000 }}
  navigation={{
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  }}
  className="services-swiper"
>
  {services.map((service, index) => (
    <SwiperSlide key={index}>
      <div className="card service-card text-center p-4 shadow-sm h-100">
        <div className="mb-3">
          <lottie-player
            src={service.icon}
            background="transparent"
            speed="1"
            style={{ width: '100px', height: '100px', margin: '0 auto' }}
            loop
            autoplay
          ></lottie-player>
        </div>
        <h5 className="fw-bold">{service.title}</h5>
        <p className="text-muted">{service.desc}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

{/* Custom Prev/Next Buttons Below */}
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

export default Services;
