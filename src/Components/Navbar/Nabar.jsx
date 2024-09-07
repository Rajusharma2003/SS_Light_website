import React, { useState, useRef } from 'react';
import { FaHome, FaList, FaInfoCircle, FaPhoneAlt, FaDownload, FaSearch } from 'react-icons/fa';
import { AiOutlineDown, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import logo from '../../Images/SsLogo.png';
import ssLightsPdf from '../../Images/a1.pdf';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({ products: false, about: false });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [timeoutId, setTimeoutId] = useState({});

  const dropdownRef = useRef({ products: null, about: null });

  const handleMouseEnter = (section) => {
    if (timeoutId[section]) {
      clearTimeout(timeoutId[section]);
    }
    setDropdownOpen((prevState) => ({
      ...prevState,
      [section]: true,
    }));
  };

  const handleMouseLeave = (section) => {
    const id = setTimeout(() => {
      setDropdownOpen((prevState) => ({
        ...prevState,
        [section]: false,
      }));
    }, 300);

    setTimeoutId((prevState) => ({
      ...prevState,
      [section]: id,
    }));
  };

  const handleDropdownToggle = (section) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
  };

  return (
    <nav className="bg-white shadow-md w-full z-50 relative">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Hamburger Menu Icon for Mobile */}
        <div className="block md:hidden absolute left-4 top-1/2 transform -translate-y-1/2 z-60">
          <button onClick={toggleMobileMenu} className="text-2xl text-gray-800 hover:text-[#74c056] transition-colors duration-300">
            {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-12 md:h-16 lg:h-20 w-auto mx-auto md:mx-0 ml-10" />
        </Link>

        {/* Navbar Links for Desktop */}
        <ul className={`hidden md:flex md:space-x-6 lg:space-x-8 items-center ${mobileMenuOpen ? 'hidden' : 'flex'}`}>
          <li>
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#74c056] hover:text-white font-semibold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out text-sm md:text-base lg:text-lg"
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
            <div
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#74c056] hover:text-white cursor-pointer font-semibold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out text-sm md:text-base lg:text-lg"
              onClick={() => handleDropdownToggle('products')}
            >
              <FaList />
              <span>Products</span>
              <AiOutlineDown />
            </div>
            {dropdownOpen.products && (
              <div className="absolute left-0 mt-2 w-40 md:w-48 lg:w-56 bg-gray-800 text-white border border-gray-700 rounded-md shadow-lg z-50">
                <ul>
                  <li>
                    <Link
                      to="/fans"
                      className="block px-4 py-2 hover:bg-gray-700 text-sm md:text-base"
                      onClick={() => setDropdownOpen({ products: false, about: false })}
                    >
                      Fans
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/heaters"
                      className="block px-4 py-2 hover:bg-gray-700 text-sm md:text-base"
                      onClick={() => setDropdownOpen({ products: false, about: false })}
                    >
                      Heaters
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tableFans"
                      className="block px-4 py-2 hover:bg-gray-700 text-sm md:text-base"
                      onClick={() => setDropdownOpen({ products: false, about: false })}
                    >
                      Table Fans
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/farata"
                      className="block px-4 py-2 hover:bg-gray-700 text-sm md:text-base"
                      onClick={() => setDropdownOpen({ products: false, about: false })}
                    >
                      Farata
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={() => handleMouseLeave('about')}
          >
            <div
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#74c056] hover:text-white cursor-pointer font-semibold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out text-sm md:text-base lg:text-lg"
              onClick={() => handleDropdownToggle('about')}
            >
              <FaInfoCircle />
              <span>About</span>
              <AiOutlineDown />
            </div>
            {dropdownOpen.about && (
              <div className="absolute left-0 mt-2 w-40 md:w-48 lg:w-56 bg-gray-800 text-white border border-gray-700 rounded-md shadow-lg z-50">
                <ul>
                  <li>
                    <Link
                      to="/company"
                      className="block px-4 py-2 hover:bg-gray-700 text-sm md:text-base"
                      onClick={() => setDropdownOpen({ products: false, about: false })}
                    >
                      Company
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#74c056] hover:text-white duration-300 cursor-pointer font-semibold rounded-md transition-transform transform hover:scale-110 ease-in-out text-sm md:text-base lg:text-lg"
            >
              <FaPhoneAlt />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <a
              href={ssLightsPdf}
              className="flex items-center space-x-2 px-4 py-2 hover:bg-[#74c056] hover:text-white duration-300 cursor-pointer font-semibold rounded-md transition-transform transform hover:scale-110 ease-in-out text-sm md:text-base lg:text-lg"
            >
              <FaDownload />
              <span>Download</span>
            </a>
          </li>
        </ul>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex items-center mx-auto md:mx-0 ">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-md p-2 text-sm md:text-base lg:text-lg w-full md:w-[300px] focus:outline-none focus:ring-2 focus:ring-[#90bc79] transition-transform duration-300 ease-in-out"
            placeholder="Search..."
          />
          {/* Search button visible on larger screens */}
          <button type="submit" className="bg-[#74c056] text-white p-2 ml-1 rounded-md hover:bg-[#65b045] transition-colors duration-300 ease-in-out hidden md:block">
            Search
          </button>
          {/* Search icon visible on smaller screens */}
          <button type="submit" className="text-black bg-[#74c056] p-2 ml-1 rounded-md hover:text-white transition-colors duration-300 ease-in-out md:hidden">
            <FaSearch />
          </button>
        </form>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 shadow-lg border-l border-gray-200`}>
        <div className="flex flex-col h-full">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl text-gray-800 hover:text-[#74c056] p-4 ml-auto mt-4"
          >
            <AiOutlineClose />
          </button>
          <div className="flex-grow flex flex-col items-center justify-center space-y-6">
            <Link
              to="/"
              className="flex items-center space-x-2 text-lg px-4 py-2 hover:bg-[#74c056] hover:text-white font-semibold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out"
              onClick={toggleMobileMenu}
            >
              <FaHome />
              <span>Home</span>
            </Link>
            <button
              onClick={() => handleDropdownToggle('products')}
              className="flex items-center space-x-2 text-lg px-4 py-2 hover:bg-[#74c056] hover:text-white font-semibold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out"
            >
              <FaList />
              <span>Products</span>
              <AiOutlineDown />
            </button>
            {dropdownOpen.products && (
              <div className="flex flex-col space-y-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-lg">
                <Link
                  to="/fans"
                  className="block px-4 py-2 hover:bg-gray-600 text-sm md:text-base"
                  onClick={toggleMobileMenu}
                >
                  Fans
                </Link>
                <Link
                  to="/heaters"
                  className="block px-4 py-2 hover:bg-gray-600 text-sm md:text-base"
                  onClick={toggleMobileMenu}
                >
                  Heaters
                </Link>
                <Link
                  to="/tableFans"
                  className="block px-4 py-2 hover:bg-gray-600 text-sm md:text-base"
                  onClick={toggleMobileMenu}
                >
                  Table Fans
                </Link>
                <Link
                  to="/farata"
                  className="block px-4 py-2 hover:bg-gray-600 text-sm md:text-base"
                  onClick={toggleMobileMenu}
                >
                  Farata
                </Link>
              </div>
            )}
            <button
              onClick={() => handleDropdownToggle('about')}
              className="flex items-center space-x-2 text-lg px-4 py-2 hover:bg-[#74c056] hover:text-white font-semibold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out"
            >
              <FaInfoCircle />
              <span>About</span>
              <AiOutlineDown />
            </button>
            {dropdownOpen.about && (
              <div className="flex flex-col space-y-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-lg">
                <Link
                  to="/company"
                  className="block px-4 py-2 hover:bg-gray-600 text-sm md:text-base"
                  onClick={toggleMobileMenu}
                >
                  Company
                </Link>
              </div>
            )}
            <Link
              to="/contact"
              className="flex items-center space-x-2 text-lg px-4 py-2 hover:bg-[#74c056] hover:text-white font-semibold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out"
              onClick={toggleMobileMenu}
            >
              <FaPhoneAlt />
              <span>Contact</span>
            </Link>
            <a
              href={ssLightsPdf}
              className="flex items-center space-x-2 text-lg px-4 py-2 hover:bg-[#74c056] hover:text-white font-semibold rounded-md transition-transform transform hover:scale-110 duration-300 ease-in-out"
              onClick={toggleMobileMenu}
            >
              <FaDownload />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
