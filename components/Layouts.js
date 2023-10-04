import React from 'react';
import AdainFooter from './AdainFooter';
import AdainNavBar from './AdainNavBar';
import {useSelector} from 'react-redux'
// I imported the navbar and footer to set them as my app structure but with a prop to control where they should show in the app.
const Layouts = ({ children, showNavbarAndFooter }) => {
  const theme = useSelector((state)=>state.theme)
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      {showNavbarAndFooter && <AdainNavBar />} 
      {children}
      {showNavbarAndFooter && <AdainFooter />}
    </div>
  );
};

export default Layouts;

