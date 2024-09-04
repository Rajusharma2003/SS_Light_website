import React, { useState } from 'react';
import { FaHome, FaList, FaInfoCircle, FaPhoneAlt, FaDownload } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
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
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white font-bold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out"
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={() => handleMouseLeave('products')}
          >
            <div className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <FaList />
              <span>Products</span>
              <AiOutlineDown />
            </div>
            {dropdownOpen.products && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-700 text-white border border-gray-600 rounded-md shadow-lg z-50">
                <ul>
                  <li><Link to="/fans" className="block px-4 py-2 hover:bg-gray-600">Fans</Link></li>
                  <li><Link to="/heaters" className="block px-4 py-2 hover:bg-gray-600">Heaters</Link></li>
                  <li><Link to="/tableFans" className="block px-4 py-2 hover:bg-gray-600">Table Fans</Link></li>
                  <li><Link to="/farata" className="block px-4 py-2 hover:bg-gray-600">Farata</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={() => handleMouseLeave('about')}
          >
            <div className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <FaInfoCircle />
              <span>About</span>
              <AiOutlineDown />
            </div>
            {dropdownOpen.about && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-700 text-white border border-gray-600 rounded-md shadow-lg z-50">
                <ul>
                  <li><Link to="/company" className="block px-4 py-2 hover:bg-gray-600">Company</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white duration-300 cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 ease-in-out"
            >
              <FaPhoneAlt />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link
              to="/download"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white duration-300 cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 ease-in-out"
            >
              <FaDownload />
              <span>Download</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
