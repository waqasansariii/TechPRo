import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './about.css';
const AboutSection = () => {
    return (
        <div className="container-fluid about-page bg-body-tertiary pt-5" id="about">
          <div className="row">
            {/* First Column (6 units) - Your existing content */}
            <div className="col-12 col-md-6"> {/* Full width on mobile, half on laptop */}
  <div className="row">
    <div className="col-md-6">
      <img
        src="https://aipearlz.com/wp-content/uploads/2024/08/people-working-as-team-company-1024x683.jpg"
        alt="Team Working"
        className="img-fluid w-100 mt-2 rounded-4" // Ensures full width inside column
      />
    </div>
    <div className="col-md-6">
      <img
        src="https://t3.ftcdn.net/jpg/02/45/84/82/360_F_245848243_8CJqgIhy8aSNr43YFmIQWFNshZTOPLdO.jpg"
        alt="Team Working"
        className="img-fluid w-100 mt-2 rounded-4" // Ensures full width inside column
        // style={{ width: '100px',height: '100px; '  }}
      />
    </div>
   
  </div>
   <div className="row">
      <div className="col-md-6">
        <img
          src="https://media.istockphoto.com/id/1058262630/vector/creation-responsive-internet-website-for-multiple-platforms-building-mobile-interface-on.jpg?s=612x612&w=0&k=20&c=BwGASPtAVnQu9_l-g7R-jW9gRxCQsmSMtRsA-jDPQz0="
          alt="Team Discussion"
          className="img-fluid mt-2 w-100 rounded-4" // Ensures full width inside column
          style={{  minWidth: "100px", minHeight:"255px" }}
        />
      </div>
      <div className="col-md-6">
        <img
          src="https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?semt=ais_hybrid&w=740"
          alt="Team Discussion"
          className="img-fluid mt-2 w-100 rounded-4" // Ensures full width inside column
          style={{  minWidth: "100px", minHeight:"255px" }}
        />
      </div>
    </div>
</div>
    
            {/* Second Column (6 units) - Empty for now */}
            <div className="col-md-6">
            <div className="about-container">
                <div className="about-header">
                <div className="mb-3">
            <span className="badge fs-2 rounded-pill shadow text-black fw-semibold px-3">
              ● About Us ●
            </span>
                </div>
                </div>                
                <h1 className='eight'>ProTech Solutions!</h1>

                <div className="about-content">
                  <p>
                    AiPearlz stands at the forefront of AI innovation, delivering
                    state-of-the-art tech solutions tailored to meet the unique
                    needs of modern businesses. Our mission is to empower
                    organizations with advanced AI tools, enhancing their
                    operational efficiency and competitiveness in a rapidly
                    evolving market. Our journey began with a group of AI
                    enthusiasts dedicated to solving real-world problems
                    through innovative technology, recognizing that thriving in
                    the digital era requires adopting AI as a critical strategy.
                  </p>
    
                <div className='row'>
                  <div className='col-6'>
                  <div>
                  <span className="tick-icon"><FaCheck /></span> Client Value<br />
                  <span className="tick-icon"><FaCheck /></span>People Driven<br />
                  <span className="tick-icon"><FaCheck /></span>Integrity<br />
                  <span className="tick-icon"><FaCheck /></span>Accountability<br />
                  <span className="tick-icon"><FaCheck /></span>Collaboration
                    
                  </div>
                  </div>
                  <div className='col-6'>
                  <div className='card-size'>
                    <span className='eight'>08</span> <br /><span className='years'>YEARS </span><br />OF EXPERIENCE
                  </div>
                  </div>

                </div>
    
                  
    
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  };
  
  export default  AboutSection;