import React, { useState, useRef } from 'react';
import './MainMenu.css';

const MainMenu = () => {
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!isMegaMenuOpen);
  };

  // Create refs for each section
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to the corresponding section
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',   // Ensures smooth scrolling
      block: 'start',       // Scroll to the top of the section
      inline: 'nearest'     // Scroll horizontally if needed
    });
  };

  return (
    <header className="main-menu">
      <nav>
        <ul className="menu">
          <li className="menu-item" onClick={() => scrollToSection(homeRef)}>Home</li>
          <li className="menu-item" onClick={() => scrollToSection(servicesRef)}>Services</li>
          <li className="menu-item" onMouseEnter={toggleMegaMenu} onMouseLeave={toggleMegaMenu}>
            Products
            
          </li>
          <li className="menu-item" onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainMenu;