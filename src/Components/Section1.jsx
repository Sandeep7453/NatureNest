import React from 'react';
import Img_Carousel from './Img_Carousel';
import tree from '../Images/tree-top.webp';

const Section1 = () => {
  return (
    <div className='h-fit bg-gradient-to-r from-emerald-500 to-emerald-900 relative'>
      <div className="flex items-center justify-center relative flex-col pt-15">
        <Img_Carousel />
        
        {/* Top Tree Image */}
        <img src={tree} alt="Tree" className='h-fit w-[150em] md:hidden z-10 absolute top-0' />

        {/* Quotes Section */}
        <div className='flex flex-col w-[100%] h-fit mt-20 md:mt-40 md:flex md:justify-center md:items-center'>
          <h1 className='md:hidden mb-2 md:text-[2rem] mx-3 p-5 md:w-[45%] text-center font-semibold italic bg-gradient-to-r from-amber-500 to-pink-500 rounded-4xl'>
            🌿🌿"Discover the Magic of Greenery - Let Nature Soothe Your Soul.🌿"
          </h1>
          <h1 className='md:mt-[-30] mb-2 md:text-[2rem] mx-3 p-5 md:w-[45%] text-center font-semibold italic bg-gradient-to-r from-amber-500 to-pink-500 rounded-4xl'>
            🌿"Breathe in the Freshness of Nature - A Symphony of Peace Awaits.🌿"
          </h1>
          <h1 className='md:hidden mb-2 md:text-[2rem] mx-3 p-5 md:w-[45%] text-center font-semibold italic bg-gradient-to-r from-amber-500 to-pink-500 rounded-4xl'>
            🌿🌿"Step into the Heart of Nature - Every Breeze Whispers a Tale.🌿"
          </h1>
          <h1 className='md:hidden mb-2 md:text-[2rem] mx-3 p-5 md:w-[45%] text-center font-semibold italic bg-gradient-to-r from-amber-500 to-pink-500 rounded-4xl'>
            🌿"Find Tranquility in Nature’s Embrace - Let Your Spirit Roam Free.🌿"
          </h1>
          <h1 className='md:hidden mb-2 md:text-[2rem] mx-3 p-5 md:w-[45%] text-center font-semibold italic bg-gradient-to-r from-amber-500 to-pink-500 rounded-4xl'>
            🌿🌿"Unwind in the Arms of Nature - Where Silence Speaks Volumes.🌿🌿"
          </h1>
          <h1 className='md:hidden mb-2 md:text-[2rem] mx-3 p-5 md:w-[45%] text-center font-semibold italic bg-gradient-to-r from-amber-500 to-pink-500 rounded-4xl'>
            🌿🌿"Revel in Nature’s Wonders - Every Moment is a Timeless Gift.🌿🌿"
          </h1>
        </div>
      </div>
      {/* Bottom Tree Image (Rotated 180 degrees) */}
      <img src={tree} alt="Tree" className='h-fit w-[150em] md:hidden z-10 absolute bottom-[-10vh] rotate-180' />
    </div>
  );
};

export default Section1;
