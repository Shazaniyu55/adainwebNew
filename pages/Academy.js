import { useState, useEffect } from 'react';
import Image from 'next/image';
import AcademyCard from '../components/AcademyCard'

function Academy(){
    return(
      <div>
        <AcademyCard />
        <div className='flex justify-center items-center'>
        
        <div className='bg-adainhite shadow-xl w-full rounded px-8 pt-6 pb-8 mb-4'>
       {/**Logo of academy */}
             <div className='flex justify-center gap-10 mt-10'>
          
          <Image src='/images/HACKED8 logo2.JPG' alt='logo' width={100} height={100}/>

          </div>
          {/**Name of academy */}
          <div className='flex justify-center'>
          <h1>HACKED8 by Adain Technology</h1>

          </div>

          <div className='flex justify-center items-center mt-10'>
          <form>
          
  <div className="flex flex-wrap -mx-3 mb-6">
  
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Parent fullName
      </label>
      <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-first-name" type="text" placeholder="parent fullname"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Contact Address
      </label>
      <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-last-name" type="text" placeholder="Contact address"/>
    </div>
  </div>
  <div className="mb-6">
<label className="block text-gray-700 text-sm font-bold mb-2" for="password">
Telephone
</label>
<input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="password" type="text" placeholder="telephone"/>

</div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Student FullName
      </label>
      <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-password" type="text" placeholder="student fullname"/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Student Phone
      </label>
      <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-password" type="text" placeholder="student phone"/>
      
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

export default Academy