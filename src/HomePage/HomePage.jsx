import React, { useEffect } from 'react';
import HomeCarousel from './HomeCarousel'
import { FaLeaf, FaRecycle, FaLightbulb, FaCogs, FaLinkedinIn, FaArrowUp, FaWhatsapp , } from 'react-icons/fa';

import { Link } from 'react-router-dom';  
import HotPicSectionDetails from './HotPicSectionDetails/HotPicSectionDetails';
import Footer from '../Components/Pages/Footer';

// this is for the animations.
import Aos from 'aos'
import 'aos/dist/aos.css'

// import image.
import FanBanner from '../Images/fanImageBanner.jpg'
import TableBanner from '../Images/TableFanBanner.jpg'
import FarataBanner from '../Images/farataBanner.jpg'
import HeaterBanner from '../Images/HeaterBanner.jpg'
import AboutImage from '../Images/aboutSection.jpg'


const HomePage = () => {

  useEffect(() => {
    Aos.init();
  } , [])


  return (

    <>
    {/* This is carousel section  */}
      <HomeCarousel/>

      {/*Shop By Category section  */}
      <section className="p-6 bg-gray-100 mt-10"  data-aos="fade-up"
     data-aos-duration="2000">
  <h2 className="text-3xl font-bold text-center mb-10">Shop By Category</h2>
  <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
    <Link to="/heaters" className="flex flex-col items-center">
      <div className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
        <img
          src="https://img.freepik.com/premium-photo/portable-heating-innovation_960080-25371.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
          alt="Heater"
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full shadow-lg object-cover"
        />
        <p className="text-center mt-2 text-sm md:text-base">HEATERS</p>
      </div>
    </Link>
    <Link to="/fans" className="flex flex-col items-center">
      <div className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
        <img
          src="https://img.freepik.com/premium-photo/living-room-with-couch-table-ceiling-fan_966002-68576.jpg?size=626&ext=jpg&ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
          alt="Fan"
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full shadow-lg object-cover"
        />
        <p className="text-center mt-2 text-sm md:text-base">FANS</p>
      </div>
    </Link>
    <Link to="/farata" className="flex flex-col items-center">
      <div className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
        <img
          src="https://img.freepik.com/premium-photo/black-electric-fan-three-dimensional-model-white-surface-fan-with-control-buttons-stand-simple-device-air-ventilation_101266-1430.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
          alt="Farata"
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full shadow-lg object-cover"
        />
        <p className="text-center mt-2 text-sm md:text-base">FARATA</p>
      </div>
    </Link>
    <Link to="/tablefans" className="flex flex-col items-center">
      <div className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
        <img
          src="https://img.freepik.com/premium-photo/table-fan-closeup-cooling-room-hot-weather_76255-1976.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
          alt="Table Fan"
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full shadow-lg object-fill"
        />
        <p className="text-center mt-2 text-sm md:text-base">TABLE FANS</p>
      </div>
    </Link>
  </div>
</section>


  {/* This is the about section  */}
  <div className="flex flex-col md:flex-row items-center justify-center p-4 w-full mt-10 ">
    {/* Image */}
    <div className="md:w-1/3 flex justify-center" data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-out">
      <img
        src={AboutImage}
        alt="Living Room with Ceiling Fan"
        className="w-full max-w-[500px] h-auto object-fill rounded-lg"
      />
    </div>
    
    {/* Description */}
    <div className="md:w-1/2 p-2 flex items-center">
      <div>
        <h1 className="text-3xl mb-4 text-center md:text-left font-bold text-[#74c056] border-b-2">Welcome to SSLignt.
        {/* <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[30%] border-b-2 border-black'></span> */}
          </h1>
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


    {/* Ceiling Fans Section */}
    <div  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
    className="relative bg-cover bg-center bg-no-repeat h-[300px] sm:h-[500px] flex items-center justify-center sm:justify-start mt-10 sm:mt-20"
    style={{
      backgroundImage: `url(${FanBanner})`,
    }}
  >
    <div className="w-full max-w-screen-sm sm:max-w-xl p-4 sm:p-8 bg-opacity-75 text-left">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">CEILING FANS</h1>
      <p className="text-sm sm:text-lg">
      SSLignt ceiling fans combine aesthetics and functionality, featuring stylish designs, 
      bold colors, and advanced technology to perfectly match your lifestyle and home décor.
      </p>
    </div>
  </div>

    {/* Pedestal Fans Section */}
    <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
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


    {/* heater  Section */}
    <div  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
      className="relative bg-cover bg-center bg-no-repeat h-[300px] sm:h-[600px] flex items-center justify-center sm:justify-start mt-10 sm:mt-20"
      style={{
        backgroundImage: `url(${HeaterBanner})`,
      }}
    >
      <div className="w-full max-w-screen-sm sm:max-w-xl p-4 sm:p-8 bg-opacity-75 text-left">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">HEATERS</h1>
        <p className="text-sm sm:text-lg">
        Your ideal partner for cozy warmth, whether it's your bedroom, living room, or office! SSLight heaters are compact and portable,
         easily placed on a table or floor to provide targeted heat wherever needed. With adjustable temperature settings and safety features,
          you can enjoy personalized comfort all season long.
        </p>
      </div>
    </div>


    {/* Table Fans Section */}
    <div  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
      className="relative bg-cover bg-center bg-no-repeat h-[300px] sm:h-[600px] flex items-center justify-center sm:justify-start mt-10 sm:mt-20"
      style={{
        backgroundImage: `url(${FarataBanner})`,
      }}
    >
     <div className="w-full max-w-screen-sm sm:max-w-xl p-4 sm:p-8 bg-opacity-75 text-left sm:mr-20 mx-4">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">PEDESTAL FANS</h1>
      <p className="text-sm sm:text-lg">
      With SSLignt pedestal fans, you have full control over how and where you enjoy a refreshing breeze,
      whether it's on your patio or indoors. These fans offer adjustable height and an easy tilting mechanism, 
      ensuring comfort in any space and at every level.
      </p>
    </div>
    </div>


     {/* This is hot pic section */}
      <div className='mt-20 bg-gray-100 py-16 relative'>
      <h1 className='text-center font-bold text-3xl mb-32 flex items-center justify-center relative'>
        <FaLightbulb className='text-yellow-500 text-4xl mr-3 glow-effect' />
        MORE FEATURES
        {/* Underline effect */}
        <span className='absolute top-11 left-1/2 transform -translate-x-1/2 w-[20%] border-b-2 border-black'></span>
      </h1>
      <HotPicSectionDetails />
    </div>


    {/* news section  */}
    <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold">A Promise of Excellence</h1>
        </div>
        <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap justify-center gap-8">
          <div className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/4 transition-transform transform hover:scale-110 duration-300 ease-in-out" >
            <img
              src="https://img.freepik.com/premium-vector/65-years-services_926377-208.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
              alt="Expertise"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-4 rounded-full object-cover"
            />
            <h2 className="text-base sm:text-lg md:text-xl font-bold">Expertise of 65+ years</h2>
          </div>
          <div className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/4 transition-transform transform hover:scale-110 duration-300 ease-in-out">
            <img
              src="https://img.freepik.com/free-vector/innovation-concept-with-lightbulb_23-2149155595.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
              alt="Culture of Innovation & Design"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-4 rounded-full object-cover"
            />
            <h2 className="text-base sm:text-lg md:text-xl font-bold">Culture of Innovation & Design</h2>
          </div>
          <div className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/4 transition-transform transform hover:scale-110 duration-300 ease-in-out">
            <img
              src="https://img.freepik.com/free-vector/diaspora-abstract-concept-vector-illustration-jewish-diaspora-forced-movement-star-david-living-outside-ethnic-religious-group-jewish-communities-foreigners-group-abstract-metaphor_335657-3971.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
              alt="Nationwide Presence"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-4 rounded-full object-cover"
            />
            <h2 className="text-base sm:text-lg md:text-xl font-bold">Nationwide Presence</h2>
          </div>
          <div className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/4 transition-transform transform hover:scale-110 duration-300 ease-in-out">
            <img
              src="https://img.freepik.com/premium-vector/man-gives-thumbs-up-gives-5-star-rating-illustration_987561-20.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
              alt="Happy Customers"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-4 rounded-full object-cover"
            />
            <h2 className="text-base sm:text-lg md:text-xl font-bold">20+ Crore Happy Customers</h2>
          </div>
        </div>
</section>


    {/* we are Why Choose Us page  */}
    <div className="bg-gray-100 py-12  mt-20">
          {/* We Offer / Why Choose Us */}
          <div className="flex flex-col items-center mb-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-8 border-b-2">Why Choose Us</h1>
            </div>
            {/* Image and Description in Row */}
            <div className="flex flex-col md:flex-row items-center justify-center mb-12 ">
              <div className="w-full md:w-1/3 p-4" data-aos="fade-right"
               data-aos-offset="500">
                <img 
                  src={AboutImage}
                  alt="Modern Man Cleaning" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center justify-center space-y-2 shadow-md p-2 rounded-lg">
                    <div className="text-green-500 text-5xl">
                      <FaLeaf />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-1">Innovative Technology</h3>
                      <p className='text-base'>We integrate cutting-edge technology into our products, ensuring that our induction cooktops are efficient, safe, and easy to use. Our kettles are designed for quick boiling and energy efficiency, while our gas cooktops offer precision control and reliability.</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center space-y-2 shadow-md p-2 rounded-lg">
                    <div className="text-green-500 text-5xl">
                      <FaRecycle />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2 ">Environmental Responsibility</h3>
                      <p className='text-base'>We are dedicated to sustainability and reducing our environmental footprint. Our products are designed with energy efficiency in mind, promoting eco-friendly practices in the kitchen.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 shadow-md p-2 rounded-lg">
                    <div className="text-green-500 text-5xl">
                      <FaLightbulb />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2">Innovative Designs</h3>
                      <p className='text-base'>Our products not only perform well but also feature stylish designs that complement modern kitchen aesthetics. We blend functionality with aesthetics to enhance the overall cooking experience.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 shadow-md p-2 rounded-lg">
                    <div className="text-green-500 text-5xl">
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
    <div className="w-4/5 mx-auto mt-20 flex flex-col md:flex-row gap-8"  data-aos="fade-up"
     data-aos-duration="5000">
  {/* Contact Form */}
  <div className="md:w-1/2 w-full bg-gray-100 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea
          id="message"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter your message"
          rows="4"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
      >
        Send Message
      </button>
    </form>
  </div>

  {/* Google Map */}
  <div className="md:w-1/2 w-full" >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13986.602115967915!2d77.056316!3d28.789682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d078a2bdc5f87%3A0xa2c1249aea3a654a!2sS%20S%20Lights%20Innovative!5e0!3m2!1sen!2sin!4v1725441051332!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
      className="rounded-lg"
    ></iframe>
  </div>
</div>


   {/* This is the footer section  */}
<div className='mt-20'>
   <Footer/>
</div>

    </>

  );
};

export default HomePage;
