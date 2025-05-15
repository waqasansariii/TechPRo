import React from 'react';
import './App.css';
import Navbar from './component/navbar.jsx';
import HeroSection from './component/hero.jsx';
import Services from './component/services.jsx';
import WhyChooseUs from './component/choose.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestimonialsSection from './component/TestimonialsSection.jsx';
import LeadershipSection from './component/LeadershipSection.jsx';
import AboutSection from './component/about.jsx';
import Footer from "./component/Footer.jsx";
import Projects from './component/Projects.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <Services />
      <Projects/>

      <WhyChooseUs/>
      <TestimonialsSection/>
      <LeadershipSection/>
      <Footer/>

      
    </div>
  );
}

export default App;
