import React from 'react'
import Footer from "./Footer";
import HotPicSectionDetails from "../../HomePage/HotPicSectionDetails/HotPicSectionDetails";
import { FaLightbulb } from "react-icons/fa";

// import image here
import Heater1 from '../../Images/heater1.jpeg'
import Heater2 from '../../Images/heater2.png'
import Heater3 from '../../Images/heater3.png'
import Heater4 from '../../Images/heater4.png'
import Heater5 from '../../Images/heater5.png'
import Heater6 from '../../Images/heater6.png'
import HeaterBanner from '../../Images/HeaterBanner.jpg'
import banner2 from '../../Images/mainBanner2.jpeg'



const Heaters = () => {
  return (
    <>

     {/* this is main image */}
        <div>
         <img
            src={banner2}
            alt="Fan Category Banner"
            className="w-full h-full object-cover"
          />
        </div>


        {/* Main Heading */}
        <div className="mt-10">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Add an Air of Sophistication to Your Home
        </h1>

        {/* Sub Heading */}
        <p className="text-base sm:text-lg text-center mb-6 sm:mb-11 mt-4 sm:mt-7">
          SSLignt offers a wide range of fans that merge innovative technology
          with elegant design to suit every taste and requirement. Revel in the
          quiet performance of our noiseless fans, <br className="hidden sm:block" />
          take advantage of the energy efficiency of our advanced BLDC models,
          or enhance your room's decor with our stylish, high-end fans. Whether
          you prefer a contemporary look or classic charm, <br className="hidden sm:block" />
          SSLignt fans are crafted to infuse sophistication into any environment.
        </p>

      </div>

      {/* this is the sub banner image  */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[300px] sm:h-[500px] flex items-center justify-center sm:justify-start mt-10 sm:mt-20"
        style={{
          backgroundImage:
           `url(${HeaterBanner})`,
        }}
      >
        <div className="w-full max-w-screen-sm sm:max-w-xl p-4 sm:p-8 bg-opacity-75 text-left">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">HEATERS</h1>
          <p className="text-sm sm:text-base">
          Your ideal partner for cozy warmth, whether it's your bedroom, living room, or office! SSLight heaters are compact and portable,
         easily placed on a table or floor to provide targeted heat wherever needed. With adjustable temperature settings and safety features,
          you can enjoy personalized comfort all season long.
          </p>
        </div>
      </div>

   {/* This is the first product details section */}
<div className="flex flex-col items-center justify-center px-6 py-10 bg-gray-100">
  {/* Image and Description Section */}
  <div className="flex flex-col lg:flex-row justify-center gap-8 w-full">
    
    {/* First Item - Heaters */}
    <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden w-full lg:w-1/2">
      <div className="w-full lg:w-1/2">
        <img
          src={Heater1}
          alt="Heater"
          className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="w-full lg:w-1/2 p-6">
        <p className="text-lg mb-4">
          <strong className="text-xl">HEATERS</strong>
          <br />
          Your ideal partner for cozy warmth, whether it's your bedroom, living room, or office! SSLight heaters are compact and portable, 
          easily placed on a table or floor to provide targeted heat wherever needed. 
          With adjustable temperature settings and safety features, you can enjoy personalized comfort all season long.
        </p>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 hover:scale-110"
          onClick={() => window.open('https://wa.me/8178196053', '_blank')}
        >
          Inquiry
        </button>
      </div>
    </div>

    {/* Second Item - Heaters */}
    <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden w-full lg:w-1/2">
      <div className="w-full lg:w-1/2">
        <img
          src={Heater4}
          alt="Heater"
          className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="w-full lg:w-1/2 p-6">
        <p className="text-lg mb-4">
          <strong className="text-xl">HEATERS</strong>
          <br />
          Your ideal partner for cozy warmth, whether it's your bedroom, living room, or office! SSLight heaters are compact and portable, 
          easily placed on a table or floor to provide targeted heat wherever needed. 
          With adjustable temperature settings and safety features, you can enjoy personalized comfort all season long.
        </p>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 hover:scale-110"
          onClick={() => window.open('https://wa.me/8178196053', '_blank')}
        >
          Inquiry
        </button>
      </div>
    </div>

  </div>
</div>


      {/* This is second product details section */}
      <div className="flex flex-col items-center justify-center px-6 py-10 bg-gray-100">
        {/* Image and Description Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {/* First Item - Ceiling Fans */}
          <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2">
              <img
                src={Heater3}
                alt="Ceiling Fan"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <p className="text-lg mb-4">
                <strong className="text-xl">HEATERS</strong>
                <br />
                Your ideal partner for cozy warmth, whether it's your bedroom, living room, or office! SSLight heaters are compact and portable, 
                easily placed on a table or floor to provide targeted heat wherever needed. 
                With adjustable temperature settings and safety features, you can enjoy personalized comfort all season long.
              </p>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 hover:scale-110"
                onClick={() => window.open('https://wa.me/8178196053', '_blank')}
              >
                Inquiry
              </button>
            </div>
          </div>

          {/* Second Item - Exhaust Fans */}
          <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2">
              <img
                src={Heater4}
                alt="Exhaust Fan"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <p className="text-lg mb-4">
                <strong className="text-xl">HEATERS</strong>
                <br />
                Your ideal partner for cozy warmth, whether it's your bedroom, living room, or office! SSLight heaters are compact and portable, 
                easily placed on a table or floor to provide targeted heat wherever needed. 
                With adjustable temperature settings and safety features, you can enjoy personalized comfort all season long.
              </p>
              
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 hover:scale-110"
                onClick={() => window.open('https://wa.me/8178196053', '_blank')}
              >
                Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* This is third product details section */}
      <div className="flex flex-col items-center justify-center px-6 py-10 bg-gray-100">
        {/* Image and Description Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {/* First Item - Ceiling Fans */}
          <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2">
              <img
                src={Heater5}
                alt="Ceiling Fan"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <p className="text-lg mb-4">
                <strong className="text-xl">HEATERS</strong>
                <br />
                Your ideal partner for cozy warmth, whether it's your bedroom, living room, or office! SSLight heaters are compact and portable, 
                easily placed on a table or floor to provide targeted heat wherever needed. 
                With adjustable temperature settings and safety features, you can enjoy personalized comfort all season long.
              </p>
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 hover:scale-110">
                Inquiry
              </button>
            </div>
          </div>

          {/* Second Item - Exhaust Fans */}
          <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2">
              <img
                src={Heater6}
                alt="Exhaust Fan"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <p className="text-lg mb-4">
                <strong className="text-xl">HEATERS</strong>
                <br />
                Your ideal partner for cozy warmth, whether it's your bedroom, living room, or office! SSLight heaters are compact and portable, 
                easily placed on a table or floor to provide targeted heat wherever needed. 
                With adjustable temperature settings and safety features, you can enjoy personalized comfort all season long.
              </p>
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 hover:scale-110">
                Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* This is hot pic section */}
      <div className='mt-20 bg-gray-100 py-16 relative'>
      <h1 className='text-center font-bold text-3xl mb-32 flex items-center justify-center relative'>
        <FaLightbulb className='text-yellow-500 text-4xl mr-3 glow-effect' />
        Featured Fans
        {/* Underline effect */}
        <span className='absolute top-11 left-1/2 transform -translate-x-1/2 w-[20%] border-b-2 border-black'></span>
      </h1>
      <HotPicSectionDetails />
    </div>

      {/* This is some feature section  */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-semibold mb-20">
          Why To Choose SS Light Fans
        </h2>
        <div className="flex flex-wrap justify-center gap-32">
          <div className="flex flex-col items-center text-center transition-transform transform hover:scale-110 duration-300 ease-in-out">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5507/5507932.png"
              alt="Superior Air Delivery"
              className="w-40 h-40 object-cover mb-4"
            />
            <p className="text-lg font-medium">Superior Air Delivery</p>
          </div>
          <div className="flex flex-col items-center text-center transition-transform transform hover:scale-110 duration-300 ease-in-out">
            <img
              src="https://cdn-icons-png.flaticon.com/128/46/46182.png"
              alt="High Speed"
              className="w-40 h-40 object-cover mb-4"
            />
            <p className="text-lg font-medium">High Speed</p>
          </div>
          <div className="flex flex-col items-center text-center transition-transform transform hover:scale-110 duration-300 ease-in-out">
            <img
              src="https://cdn-icons-png.flaticon.com/128/15183/15183286.png"
              alt="Long Life"
              className="w-40 h-40 object-cover mb-4"
            />
            <p className="text-lg font-medium">Long Life</p>
          </div>
        </div>
      </section>

      {/* This is the footer section  */}

      <div>
        <Footer />
      </div>
    </>
  )
}

export default Heaters