// HomeCarousel.js
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const carouselData = [
    {
        image: "https://img.freepik.com/premium-photo/vector-image-desk-phone-notepad-white-background-perfect-home-office-communication_980716-497934.jpg?ga=GA1.2.2025242279.1724825934&semt=ais_hybrid"
    },
    {
        image: "https://img.freepik.com/premium-photo/desk-fan-water-bottle-isolated-concept-as-vector-image-desk-fan-water-bottle-isolated_980716-508008.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
    },
    {
        image: "https://img.freepik.com/premium-photo/cozy-living-room-with-modern-infrared-heater-creating-warm-atmosphere_932138-51284.jpg?ga=GA1.2.2025242279.1724825934&semt=ais_hybrid"
    },
    {
        image: "https://img.freepik.com/premium-photo/ceiling-fan-with-remote-control-white-background-modern-setting-concept-ceiling-fan-remote-control-modern-setting-white-background-home-decor_918839-324557.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
    }
];

const HomeCarousel = () => (
  <div className="relative">
    <AliceCarousel 
      infinite
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      
    >
      {carouselData.map((item, index) => (
        <div key={index} className="item">
          <img src={item.image} alt={`Slide ${index}`} className="w-full h-[800px]" />
        </div>
      ))}
    </AliceCarousel>
  </div>
);

export default HomeCarousel;
