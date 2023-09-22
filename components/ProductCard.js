import React from 'react';
import Image from 'next/image';

const ProductCard = () => {
  return (
    <div className="bg-adainyellow text-estatelinkwhite py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/African 3.png'
              className="rounded-full w-full h-auto"
              width={200} height={100}/>
                
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quickmed</h3>
              <p className="text-gray-600 mb-4">
              QuickMed is an Emergency Medical & Response Services (EMRS) platform that connects users to an array of quick medical services
              </p>
              <a href="https://quickmed.ng" className="text-adainwhite hover:text-estatelinkwhite font-bold px-3 py-1 rounded-xl bg-adainblack hover:bg-adainyellow">Know More</a>

            </div>
          </div>

          {/* Card 2 */}
          

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/azare 3.png'
              className="rounded-full w-full h-auto"
              width={200} height={100}/>
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
      
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Azare</h3>
              <p className="text-gray-600 mb-4">
                Azare is an AI powered agricultural community exchange platform developed to enhance productivity, boost farmers confidence in crop diseases management and providing an all 
                inclusive Agro commodities market daily analysis.The platform is design too become African number one Agro product 
                trading platform where both seller and client meet for trading reasons
              </p>
              <a href="" className="text-adainwhite hover:text-estatelinkwhite font-bold px-3 py-1 rounded-xl bg-adainblack hover:bg-adainyellow">Know More</a>

            </div>
          </div>
          {/**card 4 */}
           {/* Card 3 */}
           <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/geez.png'
              className="rounded-full w-full h-auto"
              width={200} height={100}/>
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                 
                > </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Geez</h3>
              <p className="text-gray-600 mb-4">
              GEEZ is a mobile application developed to intrigue our clients with our innovative fashion tech solutions while also identifying with the uniqueness in each of our clients.
               Our aim is to become a global brand in the years to come starting from Abuja, Nigeria.
              </p>
              <a href="https://adain.ng/geezfashion/" className="text-adainwhite hover:text-estatelinkwhite font-bold px-3 py-1 rounded-xl bg-adainblack hover:bg-adainyellow">Know More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
