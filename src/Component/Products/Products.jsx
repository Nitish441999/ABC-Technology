import React, { useState, useEffect } from 'react';
import AOS from "aos"
import "aos/dist/aos.css"

// Sample product data
const productData = [
  {
    id: 1,
    title: 'Product 1 Title',
    image: 'https://www.pngmart.com/files/6/Laser-Machine-PNG-Image-1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.elit. Nullam consequat felis in est cursus, a facilisis justo bibendum. In sed diam vel erat hendrerit mollis id non libero.',
  },
  {
    id: 2,
    title: 'Product 2 Title',
    image: 'https://www.pngmart.com/files/6/Laser-Machine-PNG-Image-1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. elit. Nullam consequat felis in est cursus, a facilisis justo bibendum. In sed diam vel erat hendrerit mollis id non libero.',
  },
  {
    id: 3,
    title: 'Product 3 Title',
    image: 'https://www.pngmart.com/files/6/Laser-Machine-PNG-Image-1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. elit. Nullam consequat felis in est cursus, a facilisis justo bibendum. In sed diam vel erat hendrerit mollis id non libero.',
  },
  {
    id: 4,
    title: 'Product 4 Title',
    image: 'https://www.pngmart.com/files/6/Laser-Machine-PNG-Image-1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. elit. Nullam consequat felis in est cursus, a facilisis justo bibendum. In sed diam vel erat hendrerit mollis id non libero.',
  },
  {
    id: 5,
    title: 'Product 5 Title',
    image: 'https://www.pngmart.com/files/6/Laser-Machine-PNG-Image-1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. elit. Nullam consequat felis in est cursus, a facilisis justo bibendum. In sed diam vel erat hendrerit mollis id non libero.',
  },
  {
    id: 6,
    title: 'Product 6 Title',
    image: 'https://www.pngmart.com/files/6/Laser-Machine-PNG-Image-1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat felis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. est cursus, a facilisis justo bibendum. In sed diam vel erat hendrerit mollis id non libero.',
  },
];

function Products() {

  useEffect(()=>{
    AOS.init()
  })

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : productData.length - (isMobile ? 1 : 2)));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < productData.length - (isMobile ? 1 : 2) ? prevIndex + 1 : 0));
  };

  return (
    <div className="relative p-4 w-[90%] mx-auto mt-10 ">
      <div className="flex justify-center mb-16">
        <div >
        <h2 className="text-3xl font-bold mb-1 relative">
          Products & Service
        </h2>
        <div className="relative w-full rounded-md h-2 bg-blue-700 overflow-hidden ">
         <span className="absolute bg-orange-400 w-full h-full animate-slide"></span>
        </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mx-auto lg:justify-between lg:gap-4">
        {productData.slice(currentIndex, currentIndex + (isMobile ? 1 : 2)).map((product) => (
          <div
            key={product.id}
            className="flex flex-col lg:flex-row items-center bg-gradient-to-r to-orange-400 from-blue-700 shadow-sm shadow-gray-700 rounded p-4 mb-4 lg:mb-0"data-aos="zoom-in-up" data-aos-duration="1200"
          >
            <div className="w-full lg:w-[40%] bg-white h-[20rem] flex items-center justify-center rounded-lg mb-4 lg:mb-0">
              <img src={product.image} alt={product.title} className="object-contain" />
            </div>

            <div className="w-full lg:w-[60%] p-2 text-center lg:text-left">
              <h3 className="font-bold text-2xl text-gray-700 text-center">{product.title}</h3>
              <p className="mb-4 text-white">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Prev and Next Buttons */}
      <button
        onClick={handlePrev}
        className="absolute right-24 top-20 transform -translate-y-2/2 px-4 py-2 my-1 bg-[#1d4ed8] text-white rounded hover:bg-blue-800"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-20 transform -translate-y-2/2 px-4 py-2 my-1 bg-[#1d4ed8] text-white rounded hover:bg-blue-800"
      >
        Next
      </button>
    </div>
  );
}

export default Products;
