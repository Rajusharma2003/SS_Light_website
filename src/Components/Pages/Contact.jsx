import React from 'react'
import Footer from './Footer';

// import image.
import aboutImage from '../../Images/contactImage.jpg'

const Contact = () => {

  
  const contactItems = [
    {
      imgSrc: 'https://havells.com/media/wysiwyg/whatsApp.svg',
      title: 'WhatsApp Support',
      info: '81781 96053',
      link: 'https://wa.me/9711773333', // WhatsApp link
    },
    {
      imgSrc: 'https://havells.com/media/wysiwyg/telephone.svg',
      title: 'Customer Care No.',
      info: '81781 96053',
      link: 'tel:08045771313', // Call link
    },
    {
      imgSrc: 'https://havells.com/media/wysiwyg/icon-email.svg',
      title: 'Email Support',
      info: 'customercare@sslight.com',
      link: 'mailto:customercare@.com', // Email link
    },
  ];


  return (
  
    <>
   {/* This is main image */}
    <div className="w-full h-full">
    <img
      src={aboutImage}
      alt="Fan Category Banner"
      className="w-full h-full object-fill"
    />
  </div>
 

    <div className="flex flex-col items-center justify-center p-16 rounded-lg bg-white shadow-lg w-[80%] mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-20">Contact Us</h1>
      <div className="flex flex-col md:flex-row justify-evenly w-full items-center gap-8">
        {contactItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center shadow-lg p-4 rounded-lg bg-gray-100 transition-transform transform hover:scale-110 duration-300 ease-in-out">
            <div className="flex flex-col justify-between items-center w-[300px] mb-4">
              <img src={item.imgSrc} alt={item.title} className="w-16 h-16" />
              <h2 className="font-semibold">{item.title}</h2>
            </div>
            <a href={item.link} className="text-green-500 hover:underline ">
              {item.info}
            </a>
          </div>
      ))}
    </div>
  </div>



 {/* this is the map section  */}
 <div className="w-4/5 mx-auto mt-20 flex flex-col md:flex-row gap-8">
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
  <div className="md:w-1/2 w-full">
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
  )
}

export default Contact