import React from 'react'
import Footer from "./Footer";
import HotPicSectionDetails from "../../HomePage/HotPicSectionDetails/HotPicSectionDetails";
import { FaLightbulb } from "react-icons/fa";

// This is Tablefan image
import TableFan1 from "../../Images/TableFan1.png"
import TableFan2 from "../../Images/TableFan2.png"
import TableFan3 from "../../Images/TableFan3.png"
import TableFan4 from "../../Images/TableFan4.png"
import TableFan5 from "../../Images/TableFan5.png"
import TableFan6 from "../../Images/TableFan6.png"
import TableFan7 from "../../Images/TableFan7.png"
import TableFan8 from "../../Images/TableFan8.png"
import TableBanner from '../../Images/TableFanBanner.jpg'
import banner2 from '../../Images/mainBanner2.jpeg'



const TableFans = () => {
  return (
    <>

    {/* This is the main image section  */}
      <div>
         <img 
            src={banner2}
            alt="Fan Category Banner"
            className="w-full h-full object-cover"
          />
       </div>


       <div className="mt-10">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold mb-4 text-center">
          Add an Air of Sophistication to Your Home
        </h1>

        {/* Sub Heading */}
        <p className="text-base sm:text-xl text-center mb-6 sm:mb-11 mt-4 sm:mt-7">
          SSLignt offers a wide range of fans that merge innovative technology
          with elegant design to suit every taste and requirement. Revel in the
          quiet performance of our noiseless fans, <br className="hidden sm:block" />
          take advantage of the energy efficiency of our advanced BLDC models,
          or enhance your room's decor with our stylish, high-end fans. Whether
          you prefer a contemporary look or classic charm, <br className="hidden sm:block" />
          SSLignt fans are crafted to infuse sophistication into any environment.
        </p>

      </div>

         {/* Table Fans image Section */}
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[300px] sm:h-[600px] flex items-center justify-center sm:justify-end mt-10 sm:mt-20"
      style={{
        backgroundImage: `url(${TableBanner})`,
      }}
    >
      <div className="w-full max-w-screen-sm sm:max-w-xl p-4 sm:p-8 bg-opacity-75 text-left">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">TABLE FANS</h1>
        <p className="text-sm sm:text-lg">
        Your perfect companion for any spot, whether it's your study, kitchen,
        or balcony! SSLignt table fans are compact and lightweight,
        easily fitting on your desk or floor to deliver targeted airflow wherever needed. With an easy tilting mechanism,
        you can effortlessly adjust the air direction to suit your comfort.
        </p>
      </div>
    </div>

      {/* This is the first product details section   */}
      <div className="flex flex-col items-center justify-center px-6 py-10 bg-gray-100">
        {/* Image and Description Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 w-full">
          {/* First Item - Ceiling Fans */}
          <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2">
              <img
                src={TableFan1}
                alt="Ceiling Fan"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <p className="text-lg mb-4">
                <strong className="text-xl">Table Fans</strong>
                <br />
                Step into the world of SS Light's premium table fans, where versatility meets comfort. Whether it's your bedroom, office,
                 or kitchen, a table fan is the perfect solution for focused airflow. Discover our range of energy-efficient table fans,
                 designed to provide powerful cooling, easy portability, and adjustable settings for maximum convenience in any space.
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
                src={TableFan2}
                alt="Exhaust Fan"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <p className="text-lg mb-4">
                <strong className="text-xl">Table Fan</strong>
                <br />
                Step into the world of SS Light's premium table fans, where versatility meets comfort. 
                Whether it's your bedroom, office, or kitchen, a table fan is the perfect solution for focused airflow. Discover our range of energy-efficient table fans,
                 designed to provide powerful cooling, easy portability, and adjustable settings for maximum convenience in any space.
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
                src={TableFan3}
                alt="Ceiling Fan"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <p className="text-lg mb-4">
                <strong className="text-xl">Table Fan</strong>
                <br />
                Step into the world of SS Light's premium table fans, where versatility meets comfort. Whether it's your bedroom, office, 
                or kitchen, a table fan is the perfect solution for focused airflow. 
                Discover our range of energy-efficient table fans, designed to provide powerful cooling, easy portability, 
                and adjustable settings for maximum convenience in any space.
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
                src={TableFan4}
                alt="Exhaust Fan"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <p className="text-lg mb-4">
                <strong className="text-xl">Table Fans</strong>
                <br />
                Step into the world of SS Light's premium table fans, where versatility meets comfort. Whether it's your bedroom, office, or kitchen, 
                a table fan is the perfect solution for focused airflow.
                 Discover our range of energy-efficient table fans, designed to provide powerful cooling, easy portability,
                  and adjustable settings for maximum convenience in any space.
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
                src={TableFan5}
                alt="Ceiling Fan"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <p className="text-lg mb-4">
                <strong className="text-xl">Table Fans</strong>
                <br />
                Step into the world of SS Light's premium table fans, where versatility meets comfort. Whether it's your bedroom, office,
                 or kitchen, a table fan is the perfect solution for focused airflow. Discover our range of energy-efficient table fans,
                 designed to provide powerful cooling, easy portability, and adjustable settings for maximum convenience in any space.
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
                src={TableFan6}
                alt="Exhaust Fan"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <p className="text-lg mb-4">
                <strong className="text-xl">Table Fans</strong>
                <br />
                Step into the world of SS Light's premium table fans, where versatility meets comfort. Whether it's your bedroom, office,
                 or kitchen, a table fan is the perfect solution for focused airflow. Discover our range of energy-efficient table fans, 
                designed to provide powerful cooling, easy portability, and adjustable settings for maximum convenience in any space.
              </p>
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 hover:scale-110">
                Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* This is fourth product details section */}
      <div className="flex flex-col items-center justify-center px-6 py-10 bg-gray-100">
        {/* Image and Description Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {/* First Item - Ceiling Fans */}
          <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2">
              <img
                src={TableFan7}
                alt="Ceiling Fan"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <p className="text-lg mb-4">
                <strong className="text-xl">Table Fans</strong>
                <br />
                Step into the world of SS Light's premium table fans, where versatility meets comfort. Whether it's your bedroom, office, 
                or kitchen, a table fan is the perfect solution for focused airflow. Discover our range of energy-efficient table fans,
                 designed to provide powerful cooling, easy portability, and adjustable settings for maximum convenience in any space.
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
                src={TableFan8}
                alt="Exhaust Fan"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <p className="text-lg mb-4">
                <strong className="text-xl">Table Fans</strong>
                <br />
                Step into the world of SS Light's premium table fans, where versatility meets comfort. Whether it's your bedroom, office, 
                or kitchen, a table fan is the perfect solution for focused airflow. Discover our range of energy-efficient table fans,
                 designed to provide powerful cooling, easy portability, and adjustable settings for maximum convenience in any space.
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

export default TableFans