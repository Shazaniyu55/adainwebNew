import React from 'react';
import SignIn from '../pages/SignIn';
// I imported the navbar and footer to set them as my app structure but with a prop to control where they should show in the app.
const LayoutNew = ({ children }) => {
  return (
    <div>
      {<SignIn />}
      {children}
    </div>
  );
};

export default LayoutNew;