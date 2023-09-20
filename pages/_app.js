
import React from 'react';
import 'tailwindcss/tailwind.css';
import Layouts from '../components/Layouts';
import AdainSplashScreen from '../components/AdainSplashScreen';
import { ThemeProvider } from 'next-themes';
import AdainSpaceBackground from '../components/AdainSpaceBackground';

function MyApp({ Component, pageProps }) {
  return (
    <div>
     
      <AdainSplashScreen />
      
      <Layouts showNavbarAndFooter={true}>
        
      <ThemeProvider attribute='class' enableSystem={false}>
        
        <Component {...pageProps} />
        
        </ThemeProvider>
       
      </Layouts>
      

      
    </div>
  );
}

export default MyApp;


