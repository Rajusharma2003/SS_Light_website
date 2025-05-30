import React, { useRef } from 'react'
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
import banner2 from '../../Images/mainBanner2.jpg'
import { Carousel } from 'react-responsive-carousel';


// This is the product data.
const productData = [
  {
    title: 'Kross AP Fan',
    features: [
      'Sweep: 300 mm',
      ' Revolving Table fan',
    ],
    carouselImages: [
      TableFan1,

    ]
  },
  {
    title: 'Pearl AP Fan',
    features: [
      'Sweep: 225 / 300 mm',
      'High-Speed',
      'Table cum Wall Fan Revolving & non revolving',
    ],
    carouselImages: [
      TableFan2
    ]
  },
  {
    title: 'Aartic-1 AP Fan',
    description: 'MODEL NO : SK1100 ',
    features: [
      'Sweep: 300 mm',
      'High-Speed Table fan',
    ],
    carouselImages: [
      TableFan3
    ]
  },
  {
    title: 'Aartic-2 AP Fan',
    description: 'MODEL NO : SK1100 ',
    features: [
      'Sweep: 300 mm',
      'High-Speed Table fan',
    ],
    carouselImages: [
      TableFan4
    ]
  },
  
  {
    title: 'Strom AP Fan',
    features: [
      'Sweep: 225mm ',
      'High-Speed Table fan',
    ],
    carouselImages: [
      TableFan5
    ]
  },
  {
    title: 'Chill Air Table Fan',
    features: [
      'Sweep: 225mm ',
      'High-Speed Table fan',
    ],
    carouselImages: [
      TableFan6
    ]
  },
  {
    title: 'Roto Grill',
    features: [
      'Sweep: 300mm',
      'High-Speed Table Fan',
    ],
    carouselImages: [
      TableFan7
    ]
  },
  {
    title: 'Cabin Fan',
    features: [
      'Sweep: 225mm',
      'High-Speed Table Fan',
    ],
    carouselImages: [
      TableFan8
    ]
  },
 
  
];

const TableFans = () => {

  const sectionsRef = useRef({});


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

   {/* This is the product section */}
   <div className="py-8 px-4 mt-10" id="products" ref={(el) => (sectionsRef.current['products'] = el)}>
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
                    // autoPlay={true}
                    interval={3000}
                    className="w-full h-64"
                  >
                    {product.carouselImages.map((imgSrc, i) => (
                      <div key={i}>
                        <img
                          src={imgSrc}
                          alt={`Slide ${i + 1}`}
                          className="w-full h-64 object-contain rounded-t-lg"
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

                  {/* Enquiry Button */}
                  <a
                    href="https://wa.me/+918178196053" // Replace with your WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
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