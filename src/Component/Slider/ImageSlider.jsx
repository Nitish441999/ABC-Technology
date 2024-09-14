import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Previous Button
const PreviousButton = ({ onClick }) => {
  return (
    <button
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </button>
  );
};

// Custom Next Button
const NextButton = ({ onClick }) => {
  return (
    <button
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </button>
  );
};

// Renaming the custom component to avoid conflicts with the imported Slider
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousButton />,
    nextArrow: <NextButton />,
  };

  return (
    <div className="w-full h-[35rem] relative">
      <Slider {...settings} className="overflow-hidden relative">
        <div className="relative">
          <img
            className="w-full h-[35rem] object-cover"
            src="https://i.imgur.com/zyKuyyU.jpeg"
            alt="Slide 1"
          />
          <div className="absolute bottom-[25%] left-[40%] bg-black bg-opacity-50 text-white p-4 rounded">
            <h2 className="text-xl font-bold">Slide 1 Title</h2>
            <p>Slide 1 Description</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[35rem] object-cover"
            src="http://abctech.co.in/images/slide-pics/slide1-bg.jpg"
            alt="Slide 2"
          />
          <div className="absolute bottom-[25%] left-[40%] bg-black bg-opacity-50 text-white p-4 rounded">
            <h2 className="text-xl font-bold">Slide 2 Title</h2>
            <p>Slide 2 Description</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[35rem] object-cover"
            src="https://i.imgur.com/zyKuyyU.jpeg"
            alt="Slide 3"
          />
          <div className="absolute bottom-[25%] left-[40%] bg-black bg-opacity-50 text-white p-4 rounded">
            <h2 className="text-xl font-bold">Slide 3 Title</h2>
            <p>Slide 3 Description</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[35rem] object-cover"
            src="http://abctech.co.in/images/slide-pics/slide1-bg.jpg"
            alt="Slide 4"
          />
          <div className="absolute bottom-[25%] left-[40%] bg-black bg-opacity-50 text-white p-4 rounded">
            <h2 className="text-xl font-bold">Slide 4 Title</h2>
            <p>Slide 4 Description</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
