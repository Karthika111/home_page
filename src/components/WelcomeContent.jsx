import React from 'react';
import './WelcomeContent.css';
import Slider from 'react-slick';  // Import react-slick
import image1 from '../assets/image1.jpg';  // Adjust the relative path if needed
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

// Slider settings with custom arrow controls
const settings = { 
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <div className="slick-prev">←</div>, // Left arrow
  nextArrow: <div className="slick-next">→</div>, // Right arrow
};

const WelcomeContent = () => {
  return (
    <div className="welcome-content">
      <h2>OUR SERVICES!</h2>
      <br />
      
      {/* Description about Food Delivery App */}
      <p>
        Our Food Delivery App is designed to bring your favorite meals right to your doorstep with just a few taps. We partner with a wide range of restaurants to ensure that you have access to a variety of cuisines, from local delicacies to international flavors. Whether you're craving pizza, sushi, or a hearty meal, we’ve got it covered!
      </p>
      <p>
        With an easy-to-use interface, you can browse menus, place orders, and track deliveries in real-time. Our app focuses on speed, reliability, and customer satisfaction. No more waiting in long lines or worrying about your order—it’s all about convenience and delivering quality service every time.
      </p>
      <br />
      <br /><br />
      <div className="content-carousel">
        <Slider {...settings}>
          {/* Card for Food Delivery App */}
          <div className="card">
            <img src={image1} alt="Food Delivery App" className="card-image" />
            <div className="card-content">
              <h3>Food Delivery App</h3>
              <p>Get your favorite meals delivered to your doorstep quickly and easily. Browse a wide selection of restaurants, order your food, and enjoy fast delivery service!</p>
            </div>
          </div>

          {/* Card for Weight Loss Diet */}
          <div className="card">
            <img src={image2} alt="Weight Loss Diet" className="card-image" />
            <div className="card-content">
              <h3>Weight Loss Diet</h3>
              <p>Our app helps you maintain a healthy weight by providing personalized diet plans. Track your calories, get balanced meal recommendations, and stay on track with your fitness goals!</p>
            </div>
          </div>

          {/* Card for Fast Food Delivery */}
          <div className="card">
            <img src={image3} alt="Fast Food Delivery" className="card-image" />
            <div className="card-content">
              <h3>Fast Food Delivery</h3>
              <p>Craving fast food? Get your favorite fast food items delivered hot and fresh. Enjoy the convenience of ordering from top fast food chains right to your doorstep!</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default WelcomeContent;