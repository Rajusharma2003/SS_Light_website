import React from 'react';
import HomeCarousel from './HomeCarousel'
import { FaLeaf, FaRecycle, FaLightbulb, FaCogs, FaLinkedinIn, FaArrowUp, FaWhatsapp , } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { Link } from 'react-router-dom';  
import HotPicSectionDetails from './HotPicSectionDetails/HotPicSectionDetails';
import Footer from '../Components/Pages/Footer';






const HomePage = () => {
  return (

    <>

{/* This is carousel section  */}
    <HomeCarousel/>

    {/*Shop By Category section  */}
    <section className="p-6 bg-gray-100">
  <h2 className="text-2xl font-bold text-center mb-6">Shop By Category</h2>
  <div className="flex flex-wrap justify-center items-center space-x-14 md:w-3/4 mx-auto">
    <Link to="/heaters" className="flex flex-col items-center">
      <div className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
        <img
          src="https://img.freepik.com/premium-photo/portable-heating-innovation_960080-25371.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
          alt="Heater"
          className="w-[200px] h-[200px] rounded-full shadow-lg object-cover "
        />
        <p className='text-center mt-2'>Heater</p>
      </div>
    </Link>
    <Link to="/fans" className="flex flex-col items-center">
      <div className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
        <img
          src="https://img.freepik.com/premium-photo/living-room-with-couch-table-ceiling-fan_966002-68576.jpg?size=626&ext=jpg&ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
          alt="Fan"
          className="w-[200px] h-auto rounded-full shadow-lg"
        />
        <p className='text-center mt-2'>Fans</p>
      </div>
    </Link>
    <Link to="/farata" className="flex flex-col items-center">
      <div className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
        <img
          src="https://img.freepik.com/premium-photo/black-electric-fan-three-dimensional-model-white-surface-fan-with-control-buttons-stand-simple-device-air-ventilation_101266-1430.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
          alt="Farata"
          className="w-[200px] h-auto rounded-full shadow-lg"
        />
        <p className='text-center mt-2'>Farata</p>
      </div>
    </Link>
    <Link to="/table-fans" className="flex flex-col items-center">
      <div className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
        <img
          src="https://img.freepik.com/premium-photo/table-fan-closeup-cooling-room-hot-weather_76255-1976.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
          alt="Table Fan"
          className="w-[200px] h-[200px] rounded-full shadow-lg object-fill"
        />
        <p className='text-center mt-2'>Table Fans</p>
      </div>
    </Link>
  </div>
</section>




{/* This is the about section  */}
<div className="flex flex-col md:flex-row items-center justify-center p-4 w-full mt-10 ">
  {/* Image */}
  <div className="md:w-1/3 flex justify-center">
    <img
      src="https://img.freepik.com/premium-photo/living-room-with-couch-coffee-table-ceiling-fan_954226-421726.jpg?size=626&ext=jpg&ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
      alt="Living Room with Ceiling Fan"
      className="w-full max-w-[500px] h-auto object-fill rounded-lg"
    />
  </div>
  
  {/* Description */}
  <div className="md:w-1/2 p-2 flex items-center">
    <div>
      <h1 className="text-3xl mb-4 text-center md:text-left font-bold text-[#90bc79]">Welcome to SSLignt.</h1>
      <p className="text-gray-700 text-center md:text-left text-lg">
        <span className='text-2xl font-semibold'>SSLignt is a leader in crafting innovative fans that redefine comfort in every space. </span> 
        Our commitment to excellence shines through in every product we offer, from sleek ceiling fans to powerful wall and table fans. 
        With advanced engineering and stylish designs, SSLignt fans ensure both efficiency and elegance in your home. 
        Whether you're looking for a fan to keep your living room cool or a powerful option for industrial use, 
        SSLignt has the perfect solution to meet your needs.
      </p>
    </div>
  </div>
</div>




{/* This is the product detail section  */}

<div
      className="relative bg-cover bg-center h-[600px] flex items-center mt-20"
      style={{
        backgroundImage: "url('https://www.ushafans.com/sites/default/files/ceiling-fans-bg.png')",
      }}
    >
      <div className="w-full max-w-xl p-8 bg-opacity-75 text-left ml-10">
        <h1 className="text-4xl font-bold mb-4">CEILING FANS</h1>
        <p className="text-lg  ">
          A perfect mix of aesthetics and functionality, Usha Ceiling fans come
          in various stylish designs, vibrant colours, and innovative technology
          to perfectly complement both your lifestyle and interior décor.
        </p>
      </div>
    </div>

    <div
      className="relative bg-cover bg-center h-[600px] flex items-center justify-end mt-20"
      style={{
        backgroundImage: "url('https://www.ushafans.com/sites/default/files/Pedestal-banner.png')",
      }}
    >
      <div className="w-full max-w-xl p-8 bg-opacity-75 text-left mr-20">
        <h1 className="text-4xl font-bold mb-4">Farata FANS</h1>
        <p className="text-lg">
        Choose exactly how and where you want that fresh breeze of air, be it your verandah or inside your home.
         Usha pedestal fans are equipped with height adjustment and easy tilting mechanism, to give comfort at all levels and spaces.
        </p>
      </div>
    </div>


    <div
      className="relative bg-cover bg-center h-[600px] flex items-center mt-20"
      style={{
        backgroundImage: "url('https://www.ushafans.com/sites/default/files/table-fan-bg.jpg')",
      }}
    >
      <div className="w-full max-w-xl p-8 bg-opacity-75 text-left ml-10">
        <h1 className="text-4xl font-bold mb-4">TABLE FANS</h1>
        <p className="text-lg  ">
        Your buddy for all places be it your study, kitchen or balcony! Compact and light weight Usha Table Fans sit comfortably on your desk or the floor to provide focused air anywhere. 
        Designed for a great experience with easy tilting mechanism, you can adjust the air flow according to your needs.
        </p>
      </div>
    </div>





      {/* This is hot pic section */}
      <div className='mt-20 bg-gray-100 py-16 relative'>
      <h1 className='text-center font-bold text-3xl mb-32 flex items-center justify-center relative'>
        <FaLightbulb className='text-yellow-500 text-4xl mr-3 glow-effect' />
        Hot Pick Section
        {/* Underline effect */}
        <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] border-b-2 border-black'></span>
      </h1>
      <HotPicSectionDetails />
    </div>



      {/* news section  */}
      <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold">A Promise of Excellence</h1>
      </div>
      <div className="max-w-7xl mx-auto flex  justify-center gap-8">
        <div className="flex flex-col items-center text-center w-1/2 md:w-1/4">
          <img
            src="https://img.freepik.com/premium-vector/65-years-services_926377-208.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
            alt="Expertise"
            className="w-40 h-50 mb-4 rounded-full"
          />
          <h2 className="text-xl font-bold">Expertise of 65+ years</h2>
        </div>
        <div className="flex flex-col items-center text-center w-1/2 md:w-1/4">
          <img
            src="https://img.freepik.com/free-vector/innovation-concept-with-lightbulb_23-2149155595.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
            alt="Culture of Innovation & Design"
            className="w-40 h-50 mb-4 rounded-full"
          />
          <h2 className="text-xl font-bold">Culture of Innovation & Design</h2>
        </div>
        <div className="flex flex-col items-center text-center w-1/2 md:w-1/4">
          <img
            src="https://img.freepik.com/free-vector/diaspora-abstract-concept-vector-illustration-jewish-diaspora-forced-movement-star-david-living-outside-ethnic-religious-group-jewish-communities-foreigners-group-abstract-metaphor_335657-3971.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
            alt="Nationwide Presence"
            className="w-40 h-50 mb-4 rounded-full"
          />
          <h2 className="text-xl font-bold">Nationwide Presence</h2>
        </div>
        <div className="flex flex-col items-center text-center w-1/2 md:w-1/4">
          <img
            src="https://img.freepik.com/premium-vector/man-gives-thumbs-up-gives-5-star-rating-illustration_987561-20.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
            alt="Happy Customers"
            className="w-40 h-50 mb-4 rounded-full"
          />
          <h2 className="text-xl font-bold">20+ Crore Happy Customers</h2>
        </div>
      </div>
    </section>


    {/* we are Why Choose Us page  */}
    <div className="bg-gray-100 py-12  mt-20">
  {/* We Offer / Why Choose Us */}
  <div className="flex flex-col items-center mb-12">
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold mb-2 border-b-2">Why Choose Us</h1>
    </div>
    {/* Image and Description in Row */}
    <div className="flex flex-col md:flex-row items-center justify-center mb-12 ">
      <div className="w-full md:w-1/3 p-4">
        <img 
          src="https://img.freepik.com/free-photo/portrait-modern-man-cleaning-doing-household-chores_23-2151468739.jpg?size=626&ext=jpg&ga=GA1.1.2025242279.1724825934&semt=ais_hybrid" 
          alt="Modern Man Cleaning" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      
      <div className="w-full md:w-1/2 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center space-y-2 shadow-md p-2 rounded-lg">
            <div className="text-green-500 text-4xl">
              <FaLeaf />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-1">Innovative Technology</h3>
              <p className='text-base'>We integrate cutting-edge technology into our products, ensuring that our induction cooktops are efficient, safe, and easy to use. Our kettles are designed for quick boiling and energy efficiency, while our gas cooktops offer precision control and reliability.</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2 shadow-md p-2 rounded-lg">
            <div className="text-green-500 text-4xl">
              <FaRecycle />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 ">Environmental Responsibility</h3>
              <p className='text-base'>We are dedicated to sustainability and reducing our environmental footprint. Our products are designed with energy efficiency in mind, promoting eco-friendly practices in the kitchen.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 shadow-md p-2 rounded-lg">
            <div className="text-green-500 text-4xl">
              <FaLightbulb />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Innovative Designs</h3>
              <p className='text-base'>Our products not only perform well but also feature stylish designs that complement modern kitchen aesthetics. We blend functionality with aesthetics to enhance the overall cooking experience.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 shadow-md p-2 rounded-lg">
            <div className="text-green-500 text-4xl">
              <FaCogs />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Advanced Features</h3>
              <p className='text-base'>Our products come equipped with advanced features that make cooking more convenient and enjoyable. From smart controls to user-friendly interfaces, we ensure that our products meet the highest standards of functionality and ease of use.</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
 
    {/* this is the map section  */}
    <div className="w-4/5 mx-auto mt-20 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13986.602115967915!2d77.056316!3d28.789682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d078a2bdc5f87%3A0xa2c1249aea3a654a!2sS%20S%20Lights%20Innovative!5e0!3m2!1sen!2sin!4v1725441051332!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        className='rounded-lg'
      ></iframe>
    </div>



   {/* This is the footer section  */}
   <Footer/>



    </>

  );
};

export default HomePage;
