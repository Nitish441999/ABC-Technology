import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

function Head() {
  return (
    <div className="bg-[#1d4ed8] py-1 text-white text-center cursor-pointer flex justify-between items-center px-6 max-md:px-1">
      {/* Phone Number Section */}
      <span className="flex items-center gap-1">
        <IoCall />
        <a href="tel:7947107203" className="hover:underline hover:text-primary">
          +91 7947107203
        </a>
      </span>

      {/* Email Section (Hidden on smaller screens) */}
      <span className="flex items-center gap-1 max-md:hidden">
        <IoMdMail />
        <a
          href="mailto:abc@gmail.com"
          className="hover:underline hover:text-primary"
        >
          abc@gmail.com
        </a>
      </span>

      {/* Social Media Links */}
      <ul className="flex items-center gap-3 text-[22px]">
        <li className="rounded-full transition-all duration-300 transform hover:scale-110 hover:text-primary">
          <a href="#" aria-label="Facebook" className="hover:cursor-pointer">
            <FaFacebook />
          </a>
        </li>
        <li className="rounded-full transition-all duration-300 transform hover:scale-110 hover:text-primary">
          <a href="#" aria-label="Twitter" className="hover:cursor-pointer">
            <FaTwitter />
          </a>
        </li>
        <li className="rounded-full transition-all duration-300 transform hover:scale-110 hover:text-primary">
          <a href="#" aria-label="Instagram" className="hover:cursor-pointer">
            <FaInstagram />
          </a>
        </li>
        <li className="rounded-full transition-all duration-300 transform hover:scale-110 hover:text-primary">
          <a href="#" aria-label="Whatsapp" className="hover:cursor-pointer">
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Head;
