
import React from 'react';
import 'tailwindcss/tailwind.css';
import Layouts from '../components/Layouts';
import AdainSplashScreen from '../components/AdainSplashScreen';
import { ThemeProvider } from 'next-themes';
import AdainSpaceBackground from '../components/AdainSpaceBackground';
import { Provider } from 'react-redux';
import Store from '../store/store';




function MyApp({ Component, pageProps }) {
  return (
    <div>
     <Provider store={Store}>
      <AdainSplashScreen />
      
      <Layouts showNavbarAndFooter={true}>
        
      <ThemeProvider attribute='class' enableSystem={false}>
        
      <Component {...pageProps} />
       
        
        </ThemeProvider>
       
      </Layouts>
      
      </Provider>
      

      
    </div>
  );
}

export default MyApp;


