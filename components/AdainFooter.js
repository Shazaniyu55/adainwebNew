import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// I created a footer for the app.
const AdainFooter = () => {
  return (
    // I used the footer element of html to wrapp all three divs i needed to make the footer.
    <footer className=' py-10  bg-adainfooterblack text-adainwhite'>
      <div className='md:container mx-auto px-10 flex flex-col md:flex-row md:justify-center md:items-center items-center'>

      <div className="mx-4 px-2 flex flex-col space-y-2 mb-6 md:mb-0 text-center"> {/* This is the first div to wrapp the Getin Touch */}
      <div className='mb-5'>
            <h1 className='text-lg font-mono font-semibold mt-10'>Social Links</h1>
            
            <ul className='flex flex-row justify-center gap-10 mt-4'>
          <li className="hover:ml-[-10px] duration-300 text-adainyellow">
            <a
              href="https://www.facebook.com/profile.php?id=100091835923247"
            >
               <FaFacebook size={30} />
            </a>
          </li>
          <li className="hover:ml-[-10px] duration-300 text-adainyellow">
            <a
              
              href="https://www.instagram.com/quickmed_ng/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
            >
              <FaInstagram size={30} />
            </a>
          </li>
          <li className="hover:ml-[-10px] duration-300 text-adainyellow">
            <a
              href="https://twitter.com/QuickmedNG?s=09"
            >
              <FaTwitter size={30} />
            </a>
          </li>
          </ul>
        </div>
          <p className='mx-8'>First floor, Sky Blue Building beside Beam clinic, Along Aso B Mararaba Road, Nasarawa State</p>
          <p className='mx-8'>info@adain.ng</p>
        </div>



        <div className="sm:mx-8 px-10 flex my-4 flex-col  md:w-1/2 text-center">{/* This is the third div to wrapp the Newsletter */}
        <p className='mx-8 font-bold'>Newsletter</p>
          <p className="mx-8 mb-4">Subscribe to our newsletter to get our news & deals delivered to you</p>
          <form className="sm:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="mx-8 border text-adainblack border-adainyellow px-2 py-1 rounded w-full md:w-auto"
            />
            <button
              type="submit"
              className="mx-8 bg-adainyellow text-white px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>



        
        </div>

       
      
        
    </footer>
    
  );
};

export default AdainFooter;
