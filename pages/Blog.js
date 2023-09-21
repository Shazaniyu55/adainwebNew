import { useState, useEffect } from 'react';
import Image from 'next/image';


function Blog(){
    return(
      <div>
        <div className='flex justify-center items-center'>
        
        <div className='bg-adainhite shadow-xl w-full rounded px-8 pt-6 pb-8 mb-4'>
          <div className='flex justify-center gap-10'>
          
          <Image src='/images/adainlogo.svg' alt='logo' width={60} height={60}/>

          </div>
          <div className='flex justify-center'>
          <h1>HACKED8 by Adain Technology</h1>

          </div>

          <div className='flex justify-center items-center mt-10'>
          <form>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-first-name" type="text" placeholder="Jane"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="mb-6">
<label className="block text-gray-700 text-sm font-bold mb-2" for="password">
Email
</label>
<input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="password" type="email" placeholder="Email"/>

</div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-password" type="password" placeholder="******************"/>
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Confirm Password
      </label>
      <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-password" type="password" placeholder="******************"/>
      
    </div>
  </div>
 
        {/**Register button section */}
  <div className="flex items-center justify-center">
<button className="mx-8 bg-adainyellow text-white px-4 py-2 rounded mt-10" type="button">
Register
</button>

</div>
  
</form>

          </div>
          
       

        </div>

        </div>
        
      </div>
    )
}

export default Blog