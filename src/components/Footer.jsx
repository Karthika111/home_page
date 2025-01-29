import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Your Company. All rights reserved.</p>

        <div className="contact-details">
          <h3>Contact Us:</h3>
          <p>Email: <a href="mailto:info@karthikacompany.com">info@yourcompany.com</a></p>
          <p>Phone: 7338197139</p>
          <p>Address: Muvattupuzha, Ernakulam, Kerala, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;