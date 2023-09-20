import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Home from '../pages/index'; 
import AdainAnimatedText from './AdainAnimatedText';

const AdainSplashScreen = () => {
  // First i set two states to handle when my welcome screen and homepage should render
  const [showWelcome, setShowWelcome] = useState(false);
  const [showHomepage, setShowHomepage] = useState(false);
  // I use my spring module to create and set the animation properties that i need.
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'scale(1)' },
    to: { opacity: 1, transform: 'scale(0.5)' },
    config: { duration: 4000 },
    onRest: () => { // I i used the onrest or unmount property to control when my component mounts and set it to a timeout function.
      setTimeout(() => { // I used the timeout settimeout function to control the state of the welcome screen.
        setShowWelcome(true); // I used the setshowwelcome to Show welcome screen after animation by setting it to true boolean.
      }, 7000); //  I add a time handler argument to Delay for 7 second the animations before showing the welcome screen.
    },
  });

  // I implemented this pnclick handler function to set the homepage to true after animation.
  const handleWelcomeDismiss = () => {
    setShowHomepage(false); // Show homepage after welcome screen
  };

  return (
    <div className="flex flex-col mt-10 pt-20 items-center  justify-center h-96 bg-adainblack">
      {showHomepage ? (
        <Home />    // First i conditionally tell the component to render homepage 
      ) : showWelcome ? (     // Else should render the welcome screen
        <div className="flex flex-col items-center justify-center">
          <AdainAnimatedText /> 
          <p className="mt-4 font-thin text-adainwhite">
            <span className='text-2xl'>Hello again, from</span>
            <span className='text-center text-2xl font-bold p-1 text-adainyellow'>AdaIn!</span>
          </p>
          
           {/**Explore button */}
          </div>
             // Else should show the animation first  
      ) : (
        <animated.div style={animationProps}>
          <video autoPlay muted loop>
            <source src="/videos/adainsplash.mp4" type="video/mp4" />
          </video>
        </animated.div>
      )}
    </div>
  );
};

export default AdainSplashScreen;
