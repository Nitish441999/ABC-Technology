import React from "react";
import Slider from "react-slick";

// Updated client data with corrected company logos

  const clients = [
    { id: 1, name: 'Client 1', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Client 2', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Client 3', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Client 4', image: 'https://via.placeholder.com/150' },
    { id: 1, name: 'Client 1', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Client 2', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Client 3', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Client 4', image: 'https://via.placeholder.com/150' },
    // Add more clients as needed
  ];
  


function OurClient() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <section className=" mt-10 ">
    <div className="container mx-auto px-4">
      <div className="flex justify-center mb-8">
        <div >
        <h2 className="text-3xl font-bold mb-1 relative">
          Our Clients
        </h2>
        <div className="relative w-full rounded-md h-2 bg-blue-700 overflow-hidden ">
         <span className="absolute bg-orange-400 w-full h-full animate-slide"></span>
        </div>
        </div>
      </div>
      <Slider {...settings} className=" overflow-hidden">
        {clients.map(client => (
          <div key={client.id} className="p-4">
            <div className=" bg-orange-400 p-6 rounded-lg shadow-sm shadow-gray-700 text-center">
              <img
                src={client.image}
                alt={client.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{client.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
  );
}

export default OurClient;
