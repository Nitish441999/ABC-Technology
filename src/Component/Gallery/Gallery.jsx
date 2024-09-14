import React, { useState } from 'react';

function Gallery() {
  // Initial center image state with title
  const [centerImage, setCenterImage] = useState({
    src: 'https://www.pngmart.com/files/6/Laser-Machine-PNG-Image-1.png',
    title: 'Beautiful Landscape'
  });

  const images = [
    {
      src: 'https://www.pngmart.com/files/6/Laser-Machine-PNG-Image-1.png',
      title: 'Beautiful Landscape'
    },
    {
      src: 'https://www.pngmart.com/files/6/Laser-Machine-PNG-Image-1.png',
      title: 'Mountain Peaks'
    },
    {
      src: 'https://www.pngmart.com/files/6/Laser-Machine-PNG-Image-1.png',
      title: 'Sunset Glow'
    },
    {
      src: 'https://www.pngmart.com/files/6/Laser-Machine-PNG-Image-1.png',
      title: 'Foggy Forest'
    },
    {
      src: 'https://www.pngmart.com/files/6/Laser-Machine-PNG-Image-1.png',
      title: 'Rocky Shoreline'
    },
    {
      src: 'https://www.pngmart.com/files/6/Laser-Machine-PNG-Image-1.png',
      title: 'Nature Path'
    }
  ];

  // Handle hover to set the center image
  const handleImageHover = (imageSrc, imageTitle) => {
    setCenterImage({ src: imageSrc, title: imageTitle });
  };

  return (
    <div className='mt-10'>
      <div className="flex justify-center mb-8">
        <div >
        <h2 className="text-3xl font-bold mb-1 relative">
          Gallery
        </h2>
        <div className="relative w-full rounded-md h-2 bg-blue-700 overflow-hidden ">
         <span className="absolute bg-orange-400 w-full h-full animate-slide"></span>
        </div>
        </div>
      </div>
    <div className=" mx-auto w-[90%]">
    
      <div className="grid grid-cols-5 gap-4 max-w-7xl ">
        {/* Left Images */}
        <div className="grid grid-rows-3 gap-4 ">
          {images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="relative text-center group bg-gray-300 rounded-lg"
              onMouseEnter={() => handleImageHover(image.src, image.title)} // Change center image on hover
            >
              <img
                src={image.src}
                className="object-cover object-center w-full h-40 rounded-lg"
                alt={image.title}
              />
              {/* Title shown on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm p-1 rounded-lg">
                {image.title}
              </div>
            </div>
          ))}
        </div>

        {/* Center Image and Title */}
        <div className="col-span-3 relative text-center bg-gray-300 rounded-lg">
          <img
            src={centerImage.src}
            className="object-cover object-center w-full h-full rounded-lg"
            alt={centerImage.title}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-lg p-2 rounded-b-lg">
            {centerImage.title}
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-rows-3 gap-4 ">
          {images.slice(3, 6).map((image, index) => (
            <div
              key={index}
              className="relative text-center group bg-gray-300 rounded-lg"
              onMouseEnter={() => handleImageHover(image.src, image.title)} // Change center image on hover
            >
              <img
                src={image.src}
                className="object-cover object-center w-full h-40 rounded-lg"
                alt={image.title}
              />
              {/* Title shown on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm p-1 rounded-lg">
                {image.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Gallery;
