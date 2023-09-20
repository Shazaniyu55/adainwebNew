import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
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
        <div className="flex justify-center">
      <div>
        <h1>
          {currentTheme === 'dark' ? 'Dark' : 'Light'}{' '}
          <span>Mode</span>
          </h1>
        <div className="flex justify-center">
          {currentTheme === 'dark' ? (
            <button
              className="bg-black-700 hover:bg-black w-28 rounded-md border-purple-400 border-2 p-4"
              onClick={() => setTheme('light')}
            >
              {' '}
              <Image src="/images/sun.svg" alt="logo" height={50} width={50} />
            </button>
          ) : (
            <button
              className="bg-gray-100 w-20 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
              onClick={() => setTheme('dark')}
            >
              <Image src="/images/moon.svg" alt="logo" height={50} width={50} />
            </button>
          )}
        </div>
      </div>
    </div>

    )

}

export default NightMode