import React from 'react';
import Slider from 'react-slick';
import './Slider.css';  // Import the CSS for styling

import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider4.jpg';
import slider5 from '../assets/slider5.jpg';
import slider6 from '../assets/slider6.jpg';

const BodySlider = () => {
  const settings = {
    dots: true,         // To show navigation dots
    infinite: true,     // To loop the images
    speed: 500,         // Slide transition speed
    slidesToShow: 3,    // Number of slides to show at once (set to 3 to show three images)
    slidesToScroll: 1,  // Number of slides to scroll at once
    responsive: [       // Add responsiveness for smaller screens
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
        },
      },
    ],
  };

  return (
    <div className="body-slider">
      <div className="slider-header">
        <h2>OUR PRODUCTS!</h2> {/* Heading */}
        <p>Explore our wide range of high-quality products designed to meet all your needs. Browse through our collection and find the perfect one for you.</p> {/* Description */}
      </div>
      <Slider {...settings}> {/* Wrap images with Slider component */}
        <div><img src={slider1} alt="Slider 1" /></div>
        <div><img src={slider2} alt="Slider 2" /></div>
        <div><img src={slider3} alt="Slider 3" /></div>
        <div><img src={slider4} alt="Slider 4" /></div>
        <div><img src={slider5} alt="Slider 5" /></div>
        <div><img src={slider6} alt="Slider 6" /></div>
      </Slider>
    </div>

    
  );
  
};



export default BodySlider;