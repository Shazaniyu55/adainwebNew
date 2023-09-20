import React from 'react';
import Image from 'next/image';

const TeamCard = () => {
  return (
    <div className="bg-adainblack text-estatelinkwhite py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-adainyellow rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/Rectangle 20.png'
              className="rounded-lg w-full h-auto"
              width={200} height={100}/>
                
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-Montserrat font-semibold mb-4">Gloria Eze</h3>
              <p className="text-2xl font-Montserrat mb-4">
              Managing Director
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-adainyellow rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/Rectangle 24.png'
              className="rounded-lg w-full h-auto"
              width={200} height={100}/>
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Dr Ernest Salefu</h3>
              <p className="text-2xl font-Montserrat mb-4">
                CEO
                </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-adainyellow rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/Rectangle 25.png'
              className="rounded-lg w-full h-auto"
              width={200} height={100}/>
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-Montserrat font-semibold mb-4">Adebayo Disu</h3>
              <p className="text-2xl font-Montserrat mb-4">
              Digital Marketing Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
