/* eslint-disable react/prop-types */
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AliceCarousel from "react-alice-carousel";
import { useRef } from "react";
import HotpicSectionCard from '../HotpicSectionCard/HotpicSectionCard';

const carouselData = [
    {
        image: "https://img.freepik.com/premium-photo/vector-image-desk-phone-notepad-white-background-perfect-home-office-communication_980716-497934.jpg?ga=GA1.2.2025242279.1724825934&semt=ais_hybrid",
        description : 'SS Light Dalmia Fans',
        rate : "2000"
    },
    {
        image: "https://img.freepik.com/premium-photo/desk-fan-water-bottle-isolated-concept-as-vector-image-desk-fan-water-bottle-isolated_980716-508008.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid",
        description : 'SS Light Dalmia Fans',
        rate : "2000"
    },
    {
        image: "https://img.freepik.com/premium-photo/cozy-living-room-with-modern-infrared-heater-creating-warm-atmosphere_932138-51284.jpg?ga=GA1.2.2025242279.1724825934&semt=ais_hybrid",
        description : 'SS Light Dalmia Fans',
        rate : "2000"
    },
    {
        image: "https://img.freepik.com/premium-photo/ceiling-fan-with-remote-control-white-background-modern-setting-concept-ceiling-fan-remote-control-modern-setting-white-background-home-decor_918839-324557.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid",
        description : 'SS Light Dalmia Fans',
        rate : "2000"
    }
];

const HotPicSectionDetails = () => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = carouselData.map((data, index) => (
    <HotpicSectionCard 
      key={index} 
      image={data.image}  
      description={data.description} 
      rate={data.rate}  
    />
  ));

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  return (
    <div className="relative px-4 lg:px-8 mx-auto">
      <AliceCarousel
        ref={carouselRef}
        items={items}
        responsive={responsive}
        disableDotsControls={true}  
        infinite={true}     
        disableButtonsControls        
      />

      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button 
          onClick={slidePrev} 
          className="bg-gray-300 text-black p-2 rounded-full"
        >
          <ChevronLeftIcon />
        </button>

        <button 
          onClick={slideNext} 
          className="bg-gray-300 text-black p-2 rounded-full"
        >
          <ChevronLeftIcon className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default HotPicSectionDetails;