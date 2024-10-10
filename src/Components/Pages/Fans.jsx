/* eslint-disable no-unused-vars */
import Footer from "./Footer";
import HotPicSectionDetails from "../../HomePage/HotPicSectionDetails/HotPicSectionDetails";
import { FaLightbulb } from "react-icons/fa";
import React, { useEffect, useRef, useState } from 'react'


// This is for the product carousel 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS

// import image
import Fan1 from '../../Images/Fan1.png'
import Fan2 from '../../Images/Fan2.png'
import Fan3 from '../../Images/Fan3.png'
import Fan4 from '../../Images/Fan4.png'
import Fan5 from '../../Images/Fan5.png'
import Fan6 from '../../Images/Fan6.png'
import Fan7 from '../../Images/Fan7.png'
import Fan8 from '../../Images/Fan8.png'
import Fan9 from '../../Images/Fan9.png'
import Fan10 from '../../Images/Fan10.png'
import Fan11 from '../../Images/Fan11.png'
import Fan12 from '../../Images/Fan12.png'
import Fan13 from '../../Images/Fan13.png'
import Fan14 from '../../Images/Fan14.png'
import FanBanner from '../../Images/fanImageBanner.jpg'
import banner2 from '../../Images/mainBanner2.jpeg'



  // This is the product data.
  const productData = [
    {
      title: 'Senorita Ceiling Fan',
      // description: 'MODEL NO : SK1100 ',
      features: [
        'Sweep: 1200 mm / 600 mm',
        'High-Speed Ceiling Fan',
      ],
      carouselImages: [
        Fan1,
      ],
      colors: [
        { name: 'Blue', hex: '#3B82F6' },   // Tailwind blue-500
        { name: 'Black', hex: '#000000' },  // Black
        { name: 'Ivory', hex: '#FFFFF0' },  // Ivory
      ],
    },
    {
      title:'Senorita Ceiling Fan',
      // description: 'MODEL NO : SK1100 ',
      features: [ 
        'Sweep: 1200 mm / 600 mm',
        'High-Speed Ceiling Fan',
      ],
      carouselImages: [
      Fan2
      ],
      colors: [
        { name: 'Blue', hex: '#3B82F6' },   // Tailwind blue-500
        { name: 'Black', hex: '#000000' },  // Black
        { name: 'Ivory', hex: '#FFFFF0' },  // Ivory
      ],
    },
    {
      title: 'Senorita Ceiling Fan',
      // description: 'MODEL NO : SK1100 ',
      features: [
        'Sweep: 1200 mm / 600 mm',
        'High-Speed Ceiling Fan',
      ],
      carouselImages: [
        Fan3
      ],
      colors: [
        { name: 'Blue', hex: '#3B82F6' },   // Tailwind blue-500
        { name: 'Black', hex: '#000000' },  // Black
        { name: 'Ivory', hex: '#FFFFF0' },  // Ivory
      ],
    },
    {
      title: 'Magic Ceiling Fan',
      // description: 'MODEL NO : SK1100 ',
      features: [
        'Sweep: 1200mm',
        'High-Speed Ceiling Fan',
      ],
      carouselImages: [
        Fan4
      ],
      colors: [
        { name: 'Blue', hex: '#3B82F6' },   // Tailwind blue-500
      ],
    },
    {
      title: 'Galaxy Ceiling Fan',
      // description: 'MODEL NO : SK1100 ',
      features: [
        'Sweep: 1200 mm',
        'High-Speed Ceiling Fan',
      ],
      carouselImages: [
       Fan5
      ],
      colors: [
        { name: 'White', hex: '#726455' },   // Tailwind blue-500
        { name: 'Smoke Brown', hex: '#FFFFFF' },  // Black
      ],
    },
    {
      title: 'Jwels Ceiling Fan',
      // description: 'MODEL NO : SK1100 ',
      features: [
        'Sweep: 1200 mm',
        'High-Speed Ceiling Fan',
      ],
      carouselImages: [
       Fan14
      ],
      colors: [
        { name: 'Cool Blue', hex: '#4981CE' },   // Tailwind blue-500
        { name: 'Tri-tone Blue', hex: '#3A5FCD ' },  // Tri-tone Blue
        { name: 'Blue', hex: '#0000FF ' },  // Blue
        { name: 'Smoke Brown', hex: '#726455 ' },  // Smoke Brown
      ],
    },
    {
      title: 'Jaguar Ceiling Fan ',
      // description: 'MODEL NO : SK1100 ',
      features: [
        'Sweep: 600 mm ',
        'High-Speed Ceiling Fan',
      ],
      carouselImages: [
       Fan6
      ],
      colors: [
        { name: 'Smoke Brown ', hex: '#726455' },   // Smoke Brown
        { name: 'Tri-tone', hex: '#3A5FCD' },  // Tri-tone
        { name: 'Pearl White', hex: '#F8F6F0 ' },  // Pearl White
        { name: 'Blue', hex: '#0000FF ' },  // Blue
      ],
    },
    {
      title: 'Jaguar Ceiling Fan ',
      // description: 'MODEL NO : SK1100 ',
      features: [
        'Sweep: 600 mm ',
        'High-Speed Ceiling Fan',
      ],
      carouselImages: [
       Fan7
      ],
      colors: [
        { name: 'Smoke Brown ', hex: '#726455' },   // Smoke Brown
        { name: 'Tri-tone', hex: '#3A5FCD' },  // Tri-tone
        { name: 'Pearl White', hex: '#F8F6F0 ' },  // Pearl White
        { name: 'Blue', hex: '#0000FF ' },  // Blue
      ],
    },
    {
      title: 'Jaguar Ceiling Fan ',
      // description: 'MODEL NO : SK1100 ',
      features: [
        'Sweep: 600 mm ',
        'High-Speed Ceiling Fan',
      ],
      carouselImages: [
       Fan8
      ],
      colors: [
        { name: 'Smoke Brown ', hex: '#726455' },   // Smoke Brown
        { name: 'Tri-tone', hex: '#3A5FCD' },  // Tri-tone
        { name: 'Pearl White', hex: '#F8F6F0 ' },  // Pearl White
        { name: 'Blue', hex: '#0000FF ' },  // Blue
      ],
    },
    {
      title: 'Jagaur Pro Ceiling Fan',
      // description: 'MODEL NO : SK1100 ',
      features: [
        'Sweep: 600 mm',
        'High-Speed Ceiling Fan',
      ],
      carouselImages: [
       Fan9
      ],
      colors: [
        { name: 'Smoke Brown ', hex: '#726455' },   // Smoke Brown
        { name: 'white', hex: '#FFFFFF' },  // white
      ],
    },
    {
      title: 'Eco Ceiling Fan',
      // description: 'MODEL NO : SK1100 ',
      features: [
        'Sweep: 1200 mm ',
        'High-Speed Ceiling Fan',
      ],
      carouselImages: [
       Fan10
      ],
      colors: [
        { name: 'Smoke Brown ', hex: '#726455' },   // Smoke Brown
        { name: 'Tri-tone', hex: '#3A5FCD' },  // Tri-tone
        { name: 'white', hex: '#FFFFFF' },  // white
      ],
    },
    {
      title: 'Eco Ceiling Fan',
      // description: 'MODEL NO : SK1100 ',
      features: [
        'Sweep: 600 mm',
        'High-Speed Ceiling Fan',
      ],
      carouselImages: [
       Fan11
      ],
      colors: [
        { name: 'Smoke Brown ', hex: '#726455' },   // Smoke Brown
        { name: 'Tri-tone', hex: '#3A5FCD' },  // Tri-tone
        { name: 'white', hex: '#FFFFFF' },  // white
      ],
    },
    {
      title: 'crown dlx Ceiling Fan',
      // description: 'MODEL NO : SK1100 ',
      features: [
        'Sweep: 1200 mm',
        'High-Speed Ceiling Fan',
      ],
      carouselImages: [
       Fan12
      ],
      colors: [
        { name: 'Smoke Brown ', hex: '#726455' },   // Smoke Brown
        { name: 'white', hex: '#FFFFFF' },  // white
        { name: 'Ivory', hex: '#FFFFF0' },  // Ivory
      ],
    },
    {
      title: 'crown dlx Ceiling Fan',
      // description: 'MODEL NO : SK1100 ',
      features: [
        'Sweep: 1200 mm',
        'High-Speed Ceiling Fan',
      ],
      carouselImages: [
       Fan13
      ],
      colors: [
        { name: 'Smoke Brown ', hex: '#726455' },   // Smoke Brown
        { name: 'white', hex: '#FFFFFF' },  // white
        { name: 'Ivory', hex: '#FFFFF0' },  // Ivory
      ],
    },
    
  ];

const Fans = () => {

  const sectionsRef = useRef({});
  return (
    
    <>
      {/* This is main image  */}
      <div className="w-full h-full">
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
        <p className="text-base sm:text-lg sm:mb-11 sm:mt-7 s text-center mb-6  mt-4">
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
           `url(${FanBanner})`,
        }}
      >
        <div className="w-full max-w-screen-sm sm:max-w-xl p-4 sm:p-8 bg-opacity-75 text-left">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">CEILING FANS</h1>
          <p className="text-sm sm:text-base">
            SSLignt ceiling fans combine aesthetics and functionality, featuring
            stylish designs, bold colors, and advanced technology to perfectly
            match your lifestyle and home décor.
          </p>
        </div>
      </div>


    {/* This is the product section */}
    <div className="py-8 px-4 mt-10" id="products">
      <h1 className='animate__animated text-5xl font-bold text-center mb-8'>Products</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {productData && productData.length > 0 ? (
            productData.map((product, index) => {
              return (
                <div
                  key={index}
                  className={`bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6 space-y-4 w-full`}
                >
                  {/* Carousel */}
                  <Carousel
                    showThumbs={false}
                    infiniteLoop={true}
                    showStatus={false}
                    interval={3000}
                    className="w-full h-64"
                  >
                    {product.carouselImages.map((imgSrc, i) => (
                      <div key={i}>
                        <img
                          src={imgSrc}
                          alt={`Slide ${i + 1}`}
                          className="w-full h-64 object-cover rounded-t-lg"
                        />
                      </div>
                    ))}
                  </Carousel>

                  <h1 className="text-xl font-semibold">{product.title}</h1>
                  <p className="text-gray-700">{product.description}</p>

                  {/* Features Section */}
                  <h3 className="text-lg font-medium mt-4">Features</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {product.features && product.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  {/* Available Colors Section */}
                  <h3 className="text-lg font-medium mt-4">Available Colors</h3>
                  <div className="flex space-x-4 mt-2 bg-gray-400 p-2 rounded-md">

                    {product.colors && product.colors.map((color, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name} // Add a title attribute to show color name on hover
                      ></div>
                    ))}
                  </div>

                  {/* Enquiry Button */}
                  <a
                    href="https://wa.me/+918178196053" // Replace with your WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 mt-4"
                  >
                    <span>Enquiry Now</span>
                  </a>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">No products available</p>
          )}
        </div>
      </div>
    </div>

      {/* This is Featured Fans section */}
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
  );
};

export default Fans;
