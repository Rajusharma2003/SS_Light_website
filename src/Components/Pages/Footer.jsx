import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {

    const [showPopup, setShowPopup] = useState(false);

   
  const togglePopup = () => setShowPopup(!showPopup);

  // Function to handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // this is for whatsapp pop up
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000); // Popup hides after 2 seconds
    }, 4000); // Popup shows every 4 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    
   <footer className="bg-gray-800 text-white py-12 px-4 mt-20">
   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
     {/* Categories */}
     <div>
       <h3 className="text-lg font-bold mb-4">Our Categories</h3>
       <ul className="space-y-2">
         <li><a href="#" className="hover:underline">Fans</a></li>
         <li><a href="#" className="hover:underline">Table Fans</a></li>
         <li><a href="#" className="hover:underline">Heaters</a></li>
         <li><a href="#" className="hover:underline">Farata</a></li>
       </ul>
     </div>
     {/* Help & Policy */}
     <div>
       <h3 className="text-lg font-bold mb-4">Need Help</h3>
       <ul className="space-y-2">
         <li><a href="#" className="hover:underline">Privacy Policy</a></li>
         <li><a href="#" className="hover:underline">Warranty & Support</a></li>
         <li><a href="#" className="hover:underline">Service Center</a></li>
         <li><a href="#" className="hover:underline">Contact Us</a></li>
         <li><a href="#" className="hover:underline">ISO Certificates</a></li>
         <li><a href="#" className="hover:underline">About Us</a></li>
         <li><a href="#" className="hover:underline">Investors</a></li>
         <li><a href="#" className="hover:underline">Careers</a></li>
         <li><a href="#" className="hover:underline">Store Locator</a></li>
         <li><a href="#" className="hover:underline">Blog</a></li>
         <li><a href="#" className="hover:underline">Terms of Service</a></li>
         <li><a href="#" className="hover:underline">News & Media</a></li>
         <li><a href="#" className="hover:underline">Quality & EHS</a></li>
         <li><a href="#" className="hover:underline">Customer Care</a></li>
       </ul>
     </div>
     {/* Contact Information */}
     <div>
       <h3 className="text-lg font-bold mb-4">Contact Us</h3>
       <p className="mb-4">For any issues related to any products give us a call or connect with us here</p>
       <p className="mb-2">Call: <a href="tel:18004190505" className="hover:underline">+91 81781 96053</a></p>
       <p className="mb-4">Chat: <a href="#" className="hover:underline">WhatsApp no : +91 81781 96053</a></p>
       <p className="mb-4">Address: Tower 3, 1st Floor, Equinox Business Park, Lal Bahadur Shastri Marg, Ambedkar Nagar, Kurla West, Kurla, Mumbai, Maharashtra 400070</p>
       <h3 className="text-lg font-bold mb-4">Sign up for SS_Light updates</h3>
       <p className="mb-2">Subscribe to our newsletter for the latest updates, products, and insights</p>
       <input type="email" placeholder="Enter your email ID here" className="p-2 mb-4 w-full text-black" />
       <button className="bg-green-500 text-white py-2 px-4 rounded">Subscribe</button>
     </div>
     {/* Social Media & Other Links */}
     <div>
       <h3 className="text-lg font-bold mb-4">Find us on</h3>
       <div className="flex space-x-4 mb-4">
         <a href="#" className="hover:text-gray-400"><FaFacebookF size={24} /></a>
         <a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a>
         <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a>
         <a href="#" className="hover:text-gray-400"><FaYoutube size={24} /></a>
         <a href="#" className="hover:text-gray-400"><FaLinkedinIn size={24} /></a>
       </div>
     </div>
   </div>
 {/* This is whatsapp section  */}
 <div className="fixed bottom-24 right-10 flex flex-col items-center">
   {/* Popup Message */}
   {showPopup && (
     <div className="absolute bottom-16 right-10 w-64 h-auto bg-white text-black p-4 rounded-lg shadow-lg border border-gray-300 transform scale-100 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center">
     <p className="text-lg font-semibold mb-2">Need Assistance?</p>
     <p className="text-sm mb-4 text-blue-500">Our team is always ready to help you with any questions or issues you may have. Feel free to reach out for support or inquiries!</p>
     <p className="text-sm text-blue-500">Click the WhatsApp icon to start a chat with us. We're here to provide the best assistance possible.</p>
   </div>
   
   )}

   {/* WhatsApp Icon */}
   <a
     href="https://wa.me/8178196053" // Replace with your WhatsApp number
     className={`bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 ${showPopup ? 'animate-buzz' : ''}`}
     target="_blank"
     rel="noopener noreferrer"
     onClick={togglePopup} // Toggle popup on click
   >
     <FaWhatsapp className="text-3xl" />
   </a>

   {/* Add custom styles for the buzz animation */}
   <style jsx>{`
     @keyframes buzz {
       0% { transform: translateX(0); }
       25% { transform: translateX(-5px); }
       50% { transform: translateX(5px); }
       75% { transform: translateX(-5px); }
       100% { transform: translateX(0); }
     }
     .animate-buzz {
       animation: buzz 0.5s infinite;
     }
   `}</style>
 </div>

   {/* Scroll to Top Button */}
   <button
     onClick={handleScrollToTop}
     className="fixed bottom-8 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
   >
     <FaArrowUp className="text-2xl" />
   </button>

   
 </footer>
  )
}

export default Footer