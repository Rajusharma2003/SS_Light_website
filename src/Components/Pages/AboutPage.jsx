import React from 'react'
// import Footer from './Footer';
import CountUp from 'react-countup';
import { FaChartPie, FaBuilding, FaGlobe, FaTruck, FaStore } from 'react-icons/fa';
import Footer from './Footer';

// import image.
import banner2 from '../../Images/mainBanner2.jpeg'


const AboutPage = () => {


  // data

  const data = [
    {
      icon: <FaChartPie className="text-4xl text-blue-500" />,
      label: 'Market Share & Growing',
      value: 24,
    },
    {
      icon: <FaBuilding className="text-4xl text-green-500" />,
      label: 'Manufacturing Facilities',
      value: 25,
    },
    {
      icon: <FaGlobe className="text-4xl text-orange-500" />,
      label: 'states we export our products',
      value: 70,
    },
    {
      icon: <FaTruck className="text-4xl text-purple-500" />,
      label: 'Authorised Distributors and expanding',
      value: 4300,
    },
    {
      icon: <FaStore className="text-4xl text-red-500" />,
      label: 'Retailers connecting us to consumers',
      value: 205000,
    },
  ];

 
  return (
    <>

      {/* This is the main image section */}
      <div className="w-full h-full">
      <img
        src={banner2}
        alt="Fan Category Banner"
        className="w-full h-full object-cover"
      />
    </div>
   
    {/* This is about section */}
      <section className="flex flex-col items-center justify-center text-center py-8 px-4">
          <h1 className="text-4xl font-bold mb-10">ABOUT SSLIGHTS</h1>
          <p className="text-lg max-w-4xl">
            SSLights is a leading company in the manufacturing and sale of electrical goods, specializing in wires, cables, and fast-moving electrical goods (FMEG) under the 'SSLights' brand. In addition to wires and cables, SSLights produces and distributes FMEG products such as ceiling fans, LED lighting, switches, switchgear, solar solutions, and conduits & accessories.
            <br /><br />
            Our founding team brings over 40 years of combined industry experience. SSLights was established as ‘SSLights Cables Private Limited’ on January 10, 1996, in Mumbai, initially as a private limited company under the Companies Act, 1956.
            <br /><br />
            We manufacture a broad spectrum of wires and cables, including power cables, control cables, instrumentation cables, building wires, flexible and multi-core cables, communication cables, and more. Our range extends to specialized products like welding cables, submersible cables, overhead conductors, railway signaling cables, and eco-friendly green wires. In 2009, we expanded into the engineering, procurement, and construction (EPC) sector, providing services for power distribution and rural electrification projects. By 2014, we ventured into the FMEG space, offering products such as switches, switchgear, and conduits & accessories.
            <br /><br />
            Our Telecom Division focuses on manufacturing Optical Fiber Cables (OFCs), FRP/ARP Rods, IGFR Yarns, and comprehensive networking solutions, also offering EPC services to enhance digital infrastructure and connectivity across communities.
          </p>
        </section>


    {/* This is counting section  */}
    <section className="relative py-10 px-4">
      <img
        src="https://img.freepik.com/premium-photo/two-hands-clasped-sunset_327191-12167.jpg?ga=GA1.2.2025242279.1724825934&semt=ais_hybrid"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md max-w-xs">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
              <CountUp start={0} end={item.value} duration={3} separator="," className="text-3xl font-bold text-gray-800" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* This is next para */}
    <section className="relative py-10 px-4 bg-gray-100">
      <div className="relative max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-8">
          <p className="text-lg mb-4">
            SSLights operates 25 state-of-the-art manufacturing facilities across Gujarat, Maharashtra, Uttarakhand, and the union territory of Daman and Diu. This network includes two strategic joint ventures with Techno and Trafigura. Among these facilities, three are dedicated to the production of fast-moving electrical goods (FMEG). This includes a 50:50 partnership with Techno, a leading Gujarat-based LED manufacturer, and a 2016 joint venture with Trafigura to establish the Ryker Plant in Halol, India, focusing on copper wire rod production.
          </p>
          <p className="text-lg mb-4">
            Our commitment is to deliver high-quality, innovative products with swift turnaround times. We have designed our production processes to ensure top-notch quality while enabling the rapid manufacture of complex electrical products to meet diverse customer needs.
          </p>
          <p className="text-lg">
            Most of our facilities hold quality management system certifications in compliance with ISO 9001, ISO 14001, and OHSAS 18001 standards. Our central quality and testing laboratory in Halol is accredited by NABL, and our test laboratory for flexible wires and cables has received approval from Underwriters Laboratories (UL). Additionally, several of our products meet various national and international quality standards, including Bureau of Indian Standards (BIS), British Approvals Service for Cables (BASEC), UL, and International Electrotechnical Commission (IEC) certifications.
          </p>
        </div>
      </div>
    </section>

  {/* contact button */}
    <div className="bg-gray-300 p-8 flex items-center justify-around  w-full">
      <p className="text-black text-3xl font-semibold">Explore SSLights' efficient and stylish fans for your comfort</p>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 "
        onClick={() => window.open('https://wa.me/8178196053', '_blank')}
      >
        Contact Us
      </button>
   </div>


{/* This is the footer section  */}
   <Footer/>


   </>
    
  )
}

export default AboutPage