import React from 'react';
import Image from 'next/image';

const AcademyCard = () => {
  return (
    <div className="bg-adainyellow text-estatelinkwhite py-12">
        <h1 className='text-center text-4xl font-bold m-4'> Academy Framework for AdaIn Academy</h1>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
            
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          
            <div className=" rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/robotics.jpg'
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
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-gray-600 mb-4">
              To train young engineers in robotics, emerging technologies, and software development, preparing them for careers in the most cutting-edge fields.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/robotics2.jpg'
              className="rounded-lg w-full h-auto"
              width={200} height={50}/>
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-gray-600 mb-4">
              To be the premier academy for training young engineers, providing them with the skills and knowledge they need to succeed in the global marketplace.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/robotics3.jpg'
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
              <h3 className="text-xl font-semibold mb-4">Values</h3>
              <p className="text-gray-600 mb-4">
              We are constantly looking for new and innovative ways to teach our students the skills they need to succeed in the 21st century workforce.
              Diversity: We believe that diversity is essential to success, and we are committed to creating an inclusive environment where all students can thrive.
              Courses and Programs
              </p>
            </div>
          </div>
          {/**card 4 */}
           
        </div>
      </div>

      
    </div>
  );
};

export default AcademyCard;
