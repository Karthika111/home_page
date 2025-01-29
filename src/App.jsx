import React, { useRef } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';
import Banner from './components/Banner';
import WelcomeContent from './components/WelcomeContent';
import Slider from './components/Slider';


function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <MainMenu 
        homeRef={homeRef}
        servicesRef={servicesRef}
        productsRef={productsRef}
        contactRef={contactRef}
      />
      <div ref={homeRef} id="home">
        <Banner />
      </div>
      <div ref={servicesRef} id="services">
        <WelcomeContent />
      </div>
      <div ref={productsRef} id="products">
        <Slider />
      </div>
      <div ref={contactRef} id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;