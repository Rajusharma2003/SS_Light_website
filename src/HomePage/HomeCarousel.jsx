/* eslint-disable no-unused-vars */
// HomeCarousel.js
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// import images.
import banner1 from '../Images/mainBanner1.jpg'
import banner2 from '../Images/mainBanner2.jpg'



const carouselData = [
    {
        image: banner2
    },
    {
        image: banner1
    },
   
];

// This is the carousel component for the home page.
const HomeCarousel = () => (
  <div className="relative ">
    <AliceCarousel 
      infinite
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      responsive={{
        0: { items: 1 },
        768: { items: 1 }, // Adjust items per view for tablets
        1024: { items: 1 } // Adjust items per view for desktops
      }}
    >
      {carouselData.map((item, index) => (
        <div key={index} className="item">
          <img src={item.image} alt={`Slide ${index}`} className="w-full h-auto md:h-[600px] lg:h-[800px] object-fill" />
        </div>
      ))}
    </AliceCarousel>
  </div>
);

export default HomeCarousel;
