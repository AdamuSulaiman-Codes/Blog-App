import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="about-us-content">
        <div className="about-us-text">
          <p>
            Welcome to our website! We are a passionate team dedicated to bringing you the best content and experiences.
            Our goal is to provide high-quality resources and insights that help you succeed in your endeavors.
          </p>
          <p>
            Our team consists of experts in various fields, all committed to delivering valuable and relevant information.
            We believe in the power of collaboration and innovation to drive positive change and create meaningful impact.
          </p>
        </div>
        <div className="about-us-images">
          <img src="https://via.placeholder.com/300" alt="Team Photo 1" />
          <img src="https://via.placeholder.com/300" alt="Team Photo 2" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
