/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-12 px-4 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Categories */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Categories</h3>
          <ul className="space-y-2">
            <li><Link to="/fans" className="hover:underline">Fans</Link></li>
            <li><Link to="/tableFans" className="hover:underline">Table Fans</Link></li>
            <li><Link to="/heaters" className="hover:underline">Heaters</Link></li>
            <li><Link to="/farata" className="hover:underline">Farata</Link></li>
          </ul>
        </div>
        {/* Help & Policy */}
        <div>
          <h3 className="text-lg font-bold mb-4">Need Help</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:underline">Warranty & Support</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/company" className="hover:underline">About Us</Link></li>
            <li><Link to="#" className="hover:underline">Blog</Link></li>
            <li><Link to="#" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </div>
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="mb-4">For any issues related to any products give us a call or connect with us here</p>
          {/* <p className="mb-4">Address: A 108, DSIIDC Industrial Area, Sector 4, Bawana, Delhi, 110039 </p> */}
          <h3 className="text-lg font-bold mb-4">Sign up for SS_Light updates</h3>
          <p className="mb-2">Subscribe to our newsletter for the latest updates, products, and insights</p>
          <input type="email" placeholder="Enter your email ID here" className="p-2 mb-4 w-full text-black" />
          <button className="bg-green-500 text-white py-2 px-4 rounded">Subscribe</button>
        </div>
        {/* Social Media & Other Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Find us on</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/sslightsdelhi" className="hover:text-gray-400"><FaFacebookF size={24} /></a>
            <a href="https://www.instagram.com/sslightsdelhi/?next=%2Fguptaplastics_%2F" className="hover:text-gray-400"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-gray-400"><FaYoutube size={24} /></a>
            <a href="#" className="hover:text-gray-400"><FaLinkedinIn size={24} /></a>
          </div>
        </div>
      </div>

      {/* Calling Icon
  <div className="fixed bottom-8 left-10 flex items-center">
  <a
    href="tel:+919335035215"
    className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://img.icons8.com/?size=100&id=53438&format=png&color=ffffff"
      alt="Call Icon"
      className="w-8 h-8"
    />
  </a>
</div> */}


  {/* WhatsApp Icon */}
  <div className="fixed bottom-24 right-10 flex flex-col items-center">
    <a
      href="https://wa.me/8178196053"
      className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  </div>

  {/* Scroll to Top Button */}
  <button
    onClick={handleScrollToTop}
    className="fixed bottom-8 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
  >
    <FaArrowUp className="text-2xl" />
  </button>
    </footer>
  );
};

export default Footer;
