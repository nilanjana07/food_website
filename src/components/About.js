import React from 'react';
import AboutBackGround from '../Assets/about-background.png';
import AboutBAckgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from "react-icons/bs";
const About = () => {
  const handleWatchVideoClick = () => {
    // Open the YouTube link in a new tab
    window.open('https://youtube.com/shorts/KxwzzK-Dw5g?si=VCbQYkSyqvRIOMGq', '_blank');
  };

  return (
    <div className='about-section-container'>
      <div className='about-background-image-container'>
        <img src={AboutBackGround} alt=''></img>

      </div>
      <div className="about-section-image-container">
        <img src={AboutBAckgroundImage} alt="" />
      </div>
      <div className='about-section-text-container'>
        <p class="primary-subheading">
            About
        </p>
        <h1>
            
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        At FOODIE, we believe that food plays a crucial role in a healthy lifestyle. 
        </p>
        <p className="primary-text">
        That's why we're committed to offering you delicious meals crafted with quality ingredients, ensuring your dining experience is not only enjoyable but also nourishing.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button" onClick={handleWatchVideoClick}>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;