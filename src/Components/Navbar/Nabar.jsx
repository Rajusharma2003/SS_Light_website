import React, { useState } from 'react';
import { FaHome, FaList, FaInfoCircle, FaPhoneAlt, FaDownload } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import logo from '../../Images/SsLogo.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({ products: false, about: false });
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = (section) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setDropdownOpen((prevState) => ({
      ...prevState,
      [section]: true,
    }));
  };

  const handleMouseLeave = (section) => {
    const timeout = setTimeout(() => {
      setDropdownOpen((prevState) => ({
        ...prevState,
        [section]: false,
      }));
    }, 300); // 300ms delay before closing the dropdown
    setHoverTimeout(timeout);
  };

  return (
    <nav className="bg-white text-black h-[100px] relative z-50">
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        <img src={logo} alt="logoimg" className="h-16 w-28" />
        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white  font-bold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out"
            >
              <FaHome />
              <span>Home</span>
            </a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={() => handleMouseLeave('products')}
          >
            <div className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white  cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <FaList />
              <span>Products</span>
              <AiOutlineDown />
            </div>
            <div
              className={`absolute left-0 mt-2 w-48 bg-gray-700 text-white border border-gray-600 rounded-md shadow-lg z-50 transition-opacity duration-300 ease-in-out ${
                dropdownOpen.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={() => handleMouseLeave('products')}
            >
              <ul>
                <li><a href="#fans" className="block px-4 py-2 hover:bg-gray-600">Fans</a></li>
                <li><a href="#heaters" className="block px-4 py-2 hover:bg-gray-600">Heaters</a></li>
                <li><a href="#table-fans" className="block px-4 py-2 hover:bg-gray-600">Table Fans</a></li>
                <li><a href="#wall-fans" className="block px-4 py-2 hover:bg-gray-600">Wall Fans</a></li>
                <li><a href="#big-fans" className="block px-4 py-2 hover:bg-gray-600">Big Fans</a></li>
                <li><a href="#small-fans" className="block px-4 py-2 hover:bg-gray-600">Small Fans</a></li>
              </ul>
            </div>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={() => handleMouseLeave('about')}
          >
            <div className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white  cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <FaInfoCircle />
              <span>About</span>
              <AiOutlineDown />
            </div>
            <div
              className={`absolute left-0 mt-2 w-48 bg-gray-700 text-white border border-gray-600 rounded-md shadow-lg z-50 transition-opacity duration-300 ease-in-out ${
                dropdownOpen.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={() => handleMouseLeave('about')}
            >
              <ul>
                <li><a href="#company" className="block px-4 py-2 hover:bg-gray-600">Company</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white  duration-300 cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110  ease-in-out"
            >
              <FaPhoneAlt />
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a
              href="#download"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white  duration-300 cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 ease-in-out"
            >
              <FaDownload />
              <span>Download</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
