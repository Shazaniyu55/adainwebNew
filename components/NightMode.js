import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import {FaMoon, FaSun} from 'react-icons/fa'
import Image from 'next/image';


function NightMode(){
    const{theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;


    return(
        <div className="flex justify-center mt-10">
      <div>
       
        <div className="flex justify-center">
          {currentTheme === 'dark' ? (
            <button
              className="bg-black-700 hover:bg-black  rounded-3xl p-2 outline-4 backdrop-opacity-35 shadow-lg"
              onClick={() => setTheme('light')}
            >
              {' '}
              <FaSun className='text-green-500 text-lg' />
            </button>
          ) : (
            <button
              className="bg-gray-100  rounded-3xl p-2 outline-4 backdrop-opacity-35 shadow-lg"
              onClick={() => setTheme('dark')}
            >
              <FaMoon className='text-orange-600 text-lg' />
            </button>
          )}
        </div>
      </div>
    </div>

    )

}

export default NightMode