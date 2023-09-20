import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBars, FaCaretDown } from 'react-icons/fa';


function AdainNavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');

 {/* I made a function here to toggle the dropdown button whenever 
 the user want to change the state of the dropdown to true from false... */}

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
   {/* I made a function here to handle what the signin button 
  should do, you can alter it it to work with your firebase... */}

  const handleClick = (navItem) => {
    setActiveNavItem(navItem);
    setNavbar(!navbar);
  };

  
  return (
    <nav className="transition-opacity duration-500 w-full top-0 h-25 shadow-lg fixed lg:mb-8 bg-adainwhite backdrop-blur-3xl hover:bg-adainyellow opacity-100 z-50 hover:bg-avista2">
      <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 3 }}>
     
        <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex sm:px-8">
          <div className={`mt-top-adjusted ${navbar ? 'adjust-down' : ''}`}>
            <div className="flex text-adainblack hover:text-adainwhite items-center justify-between py-5">
              <a href="/" className="flex items-center">
                <Image src="/images/adainlogo.svg" width={40} height={20} alt="Avista Beach Resort Logo" />
                <p className='text-sm p-2 tracking-widest'>ADAIN</p>
              </a>
              <div className="md:hidden text-adainblack hover:text-adainwhite">
                <button className="text-adainblack hover:text-adainwhite pt-2 rounded-md" onClick={handleClick}>
                  {navbar ? (
                    <svg className="text-adainblack hover:text-adainwhite icon icon-tabler icon-tabler-letter-x" fill="none" height="24" stroke="currentColor" 
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                    <line x1="7" x2="17" y1="4" y2="20"/>
                    <line x1="17" x2="7" y1="4" y2="20"/>
                    </svg>
                    
                  ) : (
                    <div className='text-adainblack hover:text-adainwhite'>
                    <svg width="21" height="8" viewBox="0 0 21 8" fill="none" 
                     xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="2" fill="#1B1919"/>
                   <rect y="3" width="21" height="2" fill="#1B1919"/>
                   <rect y="6" width="21" height="2" fill="#1B1919"/>
                   </svg>
                   </div>

                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`text-adainblack hover:text-adainwhite flex-2 justify-self-center pl-2 ... tracking-tight pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
              <div className="space-x-4 text-lg">
                
              <ul className="mb-4 mt-2 items-center pr-20 font-medium text-sm... justify-center space-y-4 md:flex md:space-x-4 md:space-y-0">
  <li className={`text-adainblack hover:text-adainwhite pr-16 ${activeNavItem === 'home' ? 'active' : ''}`}>
    <Link href="/" onClick={() => handleClick('home')}>
      {`Home`}
    </Link>
  </li>

   {/* I made a button on Products and services here... */}
                  
  <li className="relative text-adainblack hover:text-adainwhite">
    <button onClick={toggleDropdown} className="nav-link flex items-center">
      Products & Services
      <FaCaretDown className="ml-1" />
    </button>

   {/* I made a conditional rendering of dropdown of the items inside the 
   Products and services here, such that that users can switch to true or false ... */}

    {isDropdownOpen && (
      <div className="font-bold absolute py-8 my-4 text-sm  text-adainblack hover:text-adainwhite">
        <Link href="https://quickmed.ng" className="rounded-2xl mx-2 px-2 dropdown-link backdrop-blur-xl shadow-lg bg-adainyellow text-adainwhite hover:text-adainblack ">
         QuickMed
        </Link>
        <Link href="https://www.space1unicorn.com/" className="rounded-2xl mx-2 px-2 dropdown-link backdrop-blur-xl shadow-lg bg-adainyellow text-adainwhite hover:text-adainblack">
          Azare
        </Link>
        <Link href="https://adain.ng/geezfashion/" className="rounded-2xl mx-2 px-2 dropdown-link backdrop-blur-xl shadow-lg bg-adainyellow text-adainwhite hover:text-adainblack">
         Geez
        </Link>
        <Link href="/needle-api-url" className="rounded-2xl mx-2 px-2 dropdown-link backdrop-blur-xl shadow-lg bg-adainyellow text-adainwhite hover:text-adainblack">
        Needle
        </Link>
        </div>
          )}
         </li>

         {/* I continued with the rest of the listed navlinks items here... */}  
                  
                  <li className={`text-adainblack hover:text-adainwhite ${activeNavItem === 'about' ? 'active' : ''}`}>
                    <Link href="/About" onClick={() => handleClick('about')}>
                      About Us
                    </Link>
                  </li>
                  <li className={`text-adainblack hover:text-adainwhite ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <Link href="/Job" onClick={() => handleClick('experiences')}>
                    Job
                    </Link>
                  </li>
                  
                  <li className={`text-adainblack hover:text-adainwhite  ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <Link href="/Blog" onClick={() => handleClick('experiences')}>
                    Blog
                    </Link>
                  </li>
                  <li className={`text-adainblack hover:text-adainwhite pr-20 ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <Link href="/Contact" onClick={() => handleClick('experiences')}>
                    Contact
                    </Link>
                  </li>

          
                  
               {/* I created a sign in button here to have an event listener of onclick 
               that it should listen to handle click function above 
              the parent codeblock... */}
                  
                  <div className="text-adainblack hover:text-adainwhite  bg-adainyellow hover:bg-adainblack md:bg:hover-adainblack rounded-xl lg:m-8 p-1  w-42 shadow-md">
    <Link href="/SignIn" className="sm:px-16 text-avista3 pr-10 mr-4 text-lg  lg:my-20" onClick={() => handleClick('checkout')}>
      Sign in
    </Link>
  </div>
    
    

</ul>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </nav>
  );
}

export default AdainNavBar;



