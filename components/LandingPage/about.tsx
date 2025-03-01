import React from "react";
import ScrollVelocity from '../ui/ScrollVelocity';

const velocity = 20; // Define the velocity variable

const MarQu = () => {
  return (
    <div className="h-screen  w-full flex flex-col justify-evenly items-center">
      <ScrollVelocity
  texts={['GDGC WOW']} 
  velocity={velocity} 
  className="custom-scroll-text"
/>

        <img src="/assets/images/zilmoney.png" className="md:h-2/5 my-10 md:my-0" alt="" />
        <ScrollVelocity
  texts={['GDGC KERALA']} 
  velocity={velocity} 
  className="custom-scroll-text"
/>
      
    </div>
  );
};

export default MarQu;
