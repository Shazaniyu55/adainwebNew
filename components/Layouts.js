import React from 'react';
import AdainFooter from './AdainFooter';
import AdainNavBar from './AdainNavBar';


// I imported the navbar and footer to set them as my app structure but with a prop to control where they should show in the app.
const Layouts = ({ children, showNavbarAndFooter }) => {
  return (
    <div>
      {showNavbarAndFooter && <AdainNavBar />} 
      {children}
      {showNavbarAndFooter && <AdainFooter />}
    </div>
  );
};

export default Layouts;

