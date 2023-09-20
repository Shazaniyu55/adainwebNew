import { TypeAnimation } from 'react-type-animation';

const AdainAnimatedText = () => {
  return (
    <div className='mx-4 mb-10'>
      
    <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'THE FUTURE IS YOU!',
        2000, // wait 1s before replacing 
        'THE FUTURE IS POSSIBLE!',
        2000, // wait 2
        `THE FUTURE IS 
        Adain!`,
        2000, // wait 2
      ]}
      wrapper="span"
      speed={20} // speed set to 20 seconds
      className="flex items-center mt-10 pt-8 text-6xl font-extrabold mx-4 px-10 justify-center tracking-tighter  text-adainyellow"

      repeat={Infinity} // let the animation repeat for forever
    />
    
    
    </div>
  );
};

export default AdainAnimatedText;

