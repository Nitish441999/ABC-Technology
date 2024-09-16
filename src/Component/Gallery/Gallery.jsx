import React, { useState, useEffect} from 'react';
import AOS from "aos"
import "aos/dist/aos.css"

function Gallery() {
  useEffect(()=>{
    AOS.init()
  })

  // Initial center image state with title
  const [centerImage, setCenterImage] = useState({
    src: 'https://www.hansyueming.com/Uploads/202208/12560.png',
    title: 'Beautiful Landscape'
  });

  const images = [
    {
      src: 'https://static.vecteezy.com/system/resources/previews/021/666/158/original/3d-illustration-of-industrial-factory-building-representing-factory-buildings-with-industrial-structures-3d-illustration-png.png',
      title: 'Beautiful Landscape'
    },
    {
      src: 'https://static.bodor.com/file/us/News/COMPANY/f3bde478db6f40c4b0a76666d1a66d24.png',
      title: 'Mountain Peaks'
    },
    {
      src: 'https://procamservices.com/wp-content/uploads/2020/10/20130802_131200-1280x960.png',
      title: 'Sunset Glow'
    },
    {
      src: 'https://www.rfshydraulics.com/uploads/4/2/8/4/42846051/published/20160422-151006-copy.png?1589352810',
      title: 'Foggy Forest'
    },
    {
      src: 'https://www.hansyueming.com/Uploads/202208/12560.png',
      title: 'Rocky Shoreline'
    },
    {
      src: 'https://static.vecteezy.com/system/resources/previews/021/666/158/original/3d-illustration-of-industrial-factory-building-representing-factory-buildings-with-industrial-structures-3d-illustration-png.png',
      title: 'Nature Path'
    }
  ];

  // Handle hover to set the center image
  const handleImageHover = (imageSrc, imageTitle) => {
    setCenterImage({ src: imageSrc, title: imageTitle });
  };

  return (
    <div className='mt-10 w-[90%] mx-auto'>
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
    <div className="">
    
      <div className="grid grid-cols-5 gap-4 max-w-7xl ">
        {/* Left Images */}
        <div className="grid grid-rows-3 gap-4 ">
          {images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="relative text-center group bg-gray-300 rounded-lg " data-aos="fade-left" data-aos-duration="1200"
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
        <div className="col-span-3 relative text-center bg-gray-300 rounded-lg" data-aos="zoom-in" data-aos-duration="1200">
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
              className="relative text-center group bg-gray-300 rounded-lg" data-aos="fade-right" data-aos-duration="1200"
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
