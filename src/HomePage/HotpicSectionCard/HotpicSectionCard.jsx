import { FaFire } from 'react-icons/fa'; // Import a flame icon from react-icons

const HotPickSection = ({ image, description, rate }) => {
  return (

      <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden mx-6 md:mx-12 lg:mx-28 w-80 md:w-96'>
        <div className="h-[400px] w-full">
          <img className='object-cover w-full h-full' src={image} alt="Hot pick item" />
        </div>
        <div className="p-4 w-full">
          
          <h3 className='text-lg font-medium text-gray-900'>{description}</h3>
          <div className='flex items-center mt-2'>
            <p className='text-gray-500 text-xl'> MRP ₹{rate}</p>
          </div>
        </div>
      </div>
  );
};

export default HotPickSection;
