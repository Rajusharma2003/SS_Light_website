import React, { useState } from 'react';
import { FaHome, FaList, FaInfoCircle, FaPhoneAlt, FaDownload } from 'react-icons/fa';
import { AiOutlineDown, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../Images/SsLogo.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({ products: false, about: false });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownTimers, setDropdownTimers] = useState({ products: null, about: null });

  const handleDropdownToggle = (section) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleMouseEnter = (section) => {
    if (dropdownTimers[section]) {
      clearTimeout(dropdownTimers[section]);
    }
    setDropdownOpen((prevState) => ({
      ...prevState,
      [section]: true,
    }));
  };

  const handleMouseLeave = (section) => {
    const timer = setTimeout(() => {
      setDropdownOpen((prevState) => ({
        ...prevState,
        [section]: false,
      }));
    }, 300); // Adjust delay as needed
    setDropdownTimers((prevState) => ({
      ...prevState,
      [section]: timer,
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white text-black h-auto md:h-[100px] relative z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4 relative">
        
        {/* Hamburger Menu Icon for Mobile */}
        <div className="block md:hidden absolute left-4 top-1/2 transform -translate-y-1/2">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Logo */}
        <img src={logo} alt="logoimg" className="h-12 w-24 md:h-16 md:w-28 mx-auto md:mx-0" />

        {/* Navbar Links for Desktop */}
        <ul className={`hidden md:flex md:space-x-6`}>
          <li>
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white font-bold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out text-sm md:text-base"
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
            <div className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out text-sm md:text-base">
              <FaList />
              <span>Products</span>
              <AiOutlineDown />
            </div>
            {dropdownOpen.products && (
              <div className="absolute left-0 mt-2 w-40 md:w-48 bg-gray-700 text-white border border-gray-600 rounded-md shadow-lg z-50">
                <ul>
                  <li><Link to="/fans" className="block px-4 py-2 hover:bg-gray-600 text-sm md:text-base">Fans</Link></li>
                  <li><Link to="/heaters" className="block px-4 py-2 hover:bg-gray-600 text-sm md:text-base">Heaters</Link></li>
                  <li><Link to="/tableFans" className="block px-4 py-2 hover:bg-gray-600 text-sm md:text-base">Table Fans</Link></li>
                  <li><Link to="/farata" className="block px-4 py-2 hover:bg-gray-600 text-sm md:text-base">Farata</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={() => handleMouseLeave('about')}
          >
            <div className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out text-sm md:text-base">
              <FaInfoCircle />
              <span>About</span>
              <AiOutlineDown />
            </div>
            {dropdownOpen.about && (
              <div className="absolute left-0 mt-2 w-40 md:w-48 bg-gray-700 text-white border border-gray-600 rounded-md shadow-lg z-50">
                <ul>
                  <li><Link to="/company" className="block px-4 py-2 hover:bg-gray-600 text-sm md:text-base">Company</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white duration-300 cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 ease-in-out text-sm md:text-base"
            >
              <FaPhoneAlt />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link
              to="/download"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white duration-300 cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 ease-in-out text-sm md:text-base"
            >
              <FaDownload />
              <span>Download</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Links */}
        <ul className={`md:hidden ${mobileMenuOpen ? 'flex flex-col space-y-4' : 'hidden'} absolute top-full left-0 w-full bg-white border-t border-gray-200 mt-2`}>
          <li>
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white font-bold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out text-sm md:text-base"
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li className="relative">
            <div
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out text-sm"
              onClick={() => handleDropdownToggle('products')}
            >
              <FaList />
              <span>Products</span>
              <AiOutlineDown />
            </div>
            {dropdownOpen.products && (
              <div className="mt-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md shadow-lg z-50">
                <ul className="flex flex-col space-y-2">
                  <li><Link to="/fans" className="block px-4 py-2 hover:bg-gray-600 text-sm">Fans</Link></li>
                  <li><Link to="/heaters" className="block px-4 py-2 hover:bg-gray-600 text-sm">Heaters</Link></li>
                  <li><Link to="/tableFans" className="block px-4 py-2 hover:bg-gray-600 text-sm">Table Fans</Link></li>
                  <li><Link to="/farata" className="block px-4 py-2 hover:bg-gray-600 text-sm">Farata</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li className="relative">
            <div
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out text-sm"
              onClick={() => handleDropdownToggle('about')}
            >
              <FaInfoCircle />
              <span>About</span>
              <AiOutlineDown />
            </div>
            {dropdownOpen.about && (
              <div className="mt-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md shadow-lg z-50">
                <ul className="flex flex-col space-y-2">
                  <li><Link to="/company" className="block px-4 py-2 hover:bg-gray-600 text-sm">Company</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white duration-300 cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 text-sm"
            >
              <FaPhoneAlt />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link
              to="/download"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#90bc79] hover:text-white duration-300 cursor-pointer font-bold rounded-md transition-transform transform hover:scale-110 text-sm"
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
