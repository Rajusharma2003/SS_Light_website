import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AliceCarousel from "react-alice-carousel";
import { useRef } from "react";
import HotpicSectionCard from '../HotpicSectionCard/HotpicSectionCard';

// import image here.
import Fan1 from '../../Images/hotSection1.png'
import Fan2 from '../../Images/hotSectionHeater1.png'
import Fan3 from '../../Images/hotSectionTableFan1.png'
import Fan4 from '../../Images/hotSectionTableFan2.png'
import Fan5 from '../../Images/hotSectionTableFan3.png'
import Fan6 from '../../Images/hotSectionTableFan4.png'
import TableFan5 from "../../Images/TableFan5.png"
import TableFan6 from "../../Images/TableFan6.png"
import TableFan7 from '../../Images/Fan7.png'
import TableFan8 from '../../Images/Fan8.png'
import TableFan3 from '../../Images/Fan3.png'


const carouselData = [
    {
        image: Fan1,
        description: 'SS Light Dalmia Fans',
        rate: "2000"
    },
    {
        image: Fan2 ,
        description: 'SS Light Dalmia Fans',
        rate: "2000"
    },
    {
        image: Fan3,
        description: 'SS Light Dalmia Fans',
        rate: "2000"
    },
    {
        image: Fan4,
        description: 'SS Light Dalmia Fans',
        rate: "2000"
    },
    {
        image: Fan5,
        description: 'SS Light Dalmia Fans',
        rate: "2000"
    },
    {
        image: Fan6,
        description: 'SS Light Dalmia Fans',
        rate: "2000"
    },
    {
        image: TableFan5,
        description: 'SS Light Dalmia Fans',
        rate: "2000"
    },
    {
        image: TableFan6,
        description: 'SS Light Dalmia Fans',
        rate: "2000"
    },
    {
        image: TableFan3,
        description: 'SS Light Dalmia Fans',
        rate: "2000"
    },
    {
        image: TableFan8,
        description: 'SS Light Dalmia Fans',
        rate: "2000"
    },
    {
        image: TableFan7,
        description: 'SS Light Dalmia Fans',
        rate: "2000"
    },
];

const HotPicSectionDetails = () => {
  
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 4 },
  };

  const items = carouselData.map((data, index) => (
    <HotpicSectionCard 
      key={index} 
      image={data.image}  
      description={data.description} 
      // rate={data.rate}  
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
    <div className="relative px-4 lg:px-8  mx-auto ">
      <div className="flex items-center justify-center relative">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          disableDotsControls={true}  
          infinite={true}     
          disableButtonsControls
          autoPlay
          animationDuration={1000}
        />

        <div className="absolute inset-y-0 left-0 flex items-center">
          <button 
            onClick={slidePrev} 
            className="bg-gray-300 text-black p-2 lg:ml-20 rounded-full"
          >
            <ChevronLeftIcon />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center ">
          <button 
            onClick={slideNext} 
            className="bg-gray-300 text-black p-2 rounded-full"
          >
            <ChevronLeftIcon className="rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotPicSectionDetails;
