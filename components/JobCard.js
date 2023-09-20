import React from 'react';
import Image from 'next/image';

const JobCard = () => {
  return (
    <div className="bg-adainyellow text-estatelinkwhite py-12">
        <h1 className='text-center text-4xl font-bold m-4'> JOB LISTING</h1>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
            
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          
            <div className=" rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/team1.jfif'
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
              <h3 className="text-2xl font-semibold mb-4">UI/UX DESIGNS</h3>
              <p className="text-gray-600 mb-4">
              Are you passionate about creating intuitive, visually appealing, and user-centric digital
               experiences? Do you thrive in a creative and collaborative environment? If so, we invite 
               you to join our team as a UI/UX Designer Intern. This unique opportunity offers aspiring designers the chance to learn, grow, and make a meaningful impact while working alongside seasoned professionals.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/team2.jfif'
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
              <h3 className="text-2xl font-semibold mb-4">FRONTEND DEVELOPERS</h3>
              <p className="text-gray-600 mb-4">
              Are you a coding enthusiast with a passion for creating stunning, user-friendly web applications? Do you want to dive into the world of frontend development and gain hands-on experience? Look no further! Adain Technology limited is excited to announce openings for Frontend Developer
               Interns who are eager to learn, collaborate, and contribute to innovative web projects.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/team3.jfif'
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
              <h3 className="text-xl font-semibold mb-4">GRAPHICS DESIGNS</h3>
              <p className="text-gray-600 mb-4">
                We’re creating a seamless online experience – from shopping on the largest rental network,
                to applying, to paying rent.
              </p>
            </div>
          </div>
          {/**card 4 */}
           {/* Card 3 */}
           <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/team4.jfif'
              className="rounded-lg w-full h-auto"
              width={200} height={100}/>
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                > </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">BACKEND DEVELOPERS</h3>
              <p className="text-gray-600 mb-4">
              Are you an aspiring coder with a passion for building robust, scalable, and efficient backend systems? Are you eager to delve into the world of backend development and gain hands-on experience? Look no further! AdaIn technology limited is excited to announce openings for Backend Developer 
              Interns who are eager to learn, collaborate, and contribute to innovative tech projects.
              </p>
            </div>
            
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default JobCard;
