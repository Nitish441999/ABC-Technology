import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    image: 'https://i.imgur.com/zyKuyyU.jpeg',
    name: 'John Doe',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 2,
    image: 'https://i.imgur.com/zyKuyyU.jpeg',
    name: 'Jane Smith',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 3,
    image: 'https://i.imgur.com/zyKuyyU.jpeg',
    name: 'Emily Clark',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 4,
    image: 'https://i.imgur.com/zyKuyyU.jpeg',
    name: 'Michael Brown',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="relative p-4 w-[90%] mx-auto mt-10 ">
      <div className="flex justify-center mb-8">
        <div >
        <h2 className="text-3xl font-bold mb-1 relative">
          Testimonial
        </h2>
        <div className="relative w-full rounded-md h-2 bg-blue-700 overflow-hidden ">
         <span className="absolute bg-orange-400 w-full h-full animate-slide"></span>
        </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mx-auto lg:justify-between lg:gap-4">
        {testimonials.slice(currentIndex, currentIndex + (window.innerWidth >= 1024 ? 2 : 1)).map((testimonial) => (
          <div key={testimonial.id} className="flex-1 bg-gradient-to-r to-orange-600 from-blue-300 shadow-sm shadow-gray-700 rounded p-4 mb-4 lg:mb-0">
            <div className="flex items-center justify-center mb-4 ">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <p className="font-bold text-gray-700">{testimonial.name}</p>
                <p className=" text-yellow-300">{'★'.repeat(testimonial.rating)}</p>
              </div>
            </div>
            <p className="text-center mb-4 text-black">{testimonial.text}</p>
          </div>
        ))}
      </div>
      {/* Prev and Next Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 transform -translate-y-2/2 px-4 py-2 my-3 bg-[#1d4ed8] text-white rounded hover:bg-blue-800"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className="absolute  right-4 transform -translate-y-2/2 px-4 py-2 my-3  bg-[#1d4ed8] text-white rounded hover:bg-blue-800"
      >
        Next
      </button>
    </div>
  );
};

export default Testimonial;
