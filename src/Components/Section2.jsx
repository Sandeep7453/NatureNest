import React from 'react';
import card from '../Images/Section2Card.jpeg';

const Section2 = () => {
  return (
    <div className='h-fit bg-gradient-to-r from-emerald-500 to-emerald-900 flex flex-col items-center justify-center text-white text-center p-5 pt-[15vh]'>
      
      {/* Main Heading */}
      <h1 className='text-4xl md:text-5xl font-bold mb-5'>
        🌿 Connect with Nature, Connect with Yourself 🌿
      </h1>

      {/* Subheading */}
      <p className='text-lg md:text-xl font-light max-w-[70%]'>
        Discover the wonders of the wild, where every leaf whispers a secret, and every breeze tells a story.
      </p>

      {/* Decorative Image */}
      <img 
        src={card}
        alt="Nature" 
        className='rounded-3xl shadow-lg my-5 w-[80%] md:w-[40%]'
      />

      {/* Call-to-Action Button */}
      <button className='bg-white text-emerald-900 px-6 py-3 mt-5 rounded-full font-semibold text-lg hover:bg-emerald-700 hover:text-white transition-all duration-400'>
        Explore More
      </button>

      

    </div>
  );
};

export default Section2;
