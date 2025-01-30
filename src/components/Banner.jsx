import React from 'react';
import './Banner.css'; // For custom styles
import banner2 from '../assets/banner2.jpg'; // Import the image directly

const Banner = () => {
  return (
    <div className="banner-slider">
      <div className="welcome-content">
        <h2>Welcome to Our Website!</h2>
        <p>We are thrilled to have you here. Explore our amazing services and feel free to get in touch with us for any questions or inquiries.</p>
      </div>
      <div>
        <img src={banner2} alt="Banner 1" className="banner-image" />
      </div>
    </div>
  );
};

export default Banner;
