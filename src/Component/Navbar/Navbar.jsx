import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className=" bg-gradient-to-r to-orange-600 from-white  sticky top-0 text-white px-4 py-3 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold flex justify-center items-center">
          <img src='https://i.imgur.com/jbqcnpj.png' alt="logo" className=' w-16 h-12' /> 
          <span>
            <h3 className=' text-gray-500'>ABC Technology</h3>
          </span>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-blue-800 cursor-pointer">Home</li>

          {/* About section with dropdown on click */}
          <li
            className="relative hover:text-blue-800 cursor-pointer"
            onClick={toggleDropdown}
          >
            About Us
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-40 bg-[#1d4ed8] text-white rounded-lg shadow-lg py-2 z-50">
                <li className="px-4 py-2 hover:text-[rgb(251,146,60)] cursor-pointer">Our Story</li>
                <li className="px-4 py-2 hover:text-[rgb(251,146,60)] cursor-pointer">Team</li>
                <li className="px-4 py-2 hover:text-[rgb(251,146,60)] cursor-pointer">Careers</li>
              </ul>
            )}
          </li>

          {/* <li className="hover:text-blue-800 cursor-pointer">Services</li> */}
          <li className="hover:text-blue-800 cursor-pointer">Product & Services</li>
          <li className="hover:text-blue-800 cursor-pointer">Contact</li>
        </ul>
        <div className="md:hidden">
          <FaBars size={30} onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-[30rem] w-full bg-[rgb(251,146,60)] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full '
        } md:hidden`}
      >
        {/* Close Icon Inside Mobile Menu */}
        <div className="flex justify-end p-4">
          <FaTimes size={30} className="text-white" onClick={toggleMenu} />
        </div>

        <ul className="flex flex-col items-center h-full space-y-8">
          <li className="text-xl hover:text-blue-800 cursor-pointer">Home</li>

          {/* Mobile About section with dropdown on click */}
          <li className="text-xl hover:text-blue-800 cursor-pointer" onClick={toggleDropdown}>
            About Us
            {isDropdownOpen && (
              <ul className="mt-2 space-y-4 text-center  bg-[#1d4ed8] p-10 rounded-md text-white">
                <li className="hover:text-[rgb(251,146,60)] cursor-pointer">Our Story</li>
                <li className="hover:text-[rgb(251,146,60)] cursor-pointer">Team</li>
                <li className="hover:text-[rgb(251,146,60)] cursor-pointer">Careers</li>
              </ul>
            )}
          </li>

          {/* <li className="text-xl hover:text-blue-800 cursor-pointer">Services</li> */}
          <li className="text-xl hover:text-blue-800 cursor-pointer">Product & Services</li>
          <li className="text-xl hover:text-blue-800 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
