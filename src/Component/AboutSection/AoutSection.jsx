import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-12 w-[90%] mx-auto ">
    <div className="flex justify-center mb-8">
        <div >
        <h2 className="text-3xl font-bold mb-1 relative">
          About Us
        </h2>
        <div className="relative w-full rounded-md h-2 bg-blue-700 overflow-hidden ">
         <span className="absolute bg-orange-400 w-full h-full animate-slide"></span>
        </div>
        </div>
      </div>
      <div className="container mx-auto px-4 bg-gray-100 rounded-lg">
        <div className="text-center mb-12 pt-5 ">
          
          <p className="text-lg text-gray-700">
         <span className=' text-3xl text-blue-700 font-bold'>W</span>e are pleased to introduce ourselves as a CNC Sheet Metal Fabrication Shop ,
           CNC machine shop under one roof, engaged in manufacture of CNC Turned and Milled Components,
            precise assemblies & , Precision Sheet metal components, Produced with the help of CNC Laser Machine,
             CNC Press Brakes, CNC turning centers and CNC milling machines for quality conscious buyers.
              Our Shop is run by a team of qualified engineering professionals having varied Industrial experience.
               We are running this shop for last many years, however our total working industrial experience is more than 25 years.
                During this tenure we have developed and designed, some of the latest art of Kiosk, ATM Machine parts, 
                industrial electrical Panels, precised Sheet Metal Parts, Machine covers, Machined parts, Automobile/
                Engineering components, intricate Jigs & Fixtures, (some of them were import substitute) on conventional
                 as well as on CNC Machine Tools.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gradient-to-r to-orange-600 from-blue-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-black">
                To innovate and deliver top-quality solutions that exceed our clients' expectations and make a positive impact.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gradient-to-r to-orange-600 from-blue-300 p-6 rounded-lg shadow-lg ">
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <ul className="list-disc list-inside text-black">
                {/* <li>Integrity</li> */}
                <li>Excellence</li>
                <li>Innovation</li>
                <li>Customer Focus</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gradient-to-r to-orange-600 from-blue-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Our Team</h3>
              <p className="text-black">
                We have a diverse team of experts with a wide range of skills and experiences, all committed to delivering the best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
