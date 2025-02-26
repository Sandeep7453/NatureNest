import React from 'react';

const Card_Blog = ({ image, title, description }) => {
  return (
    <div className="bg-emerald-600 p-4 md:p-6 rounded-3xl flex flex-col md:flex-row items-center md:items-start w-[22rem] md:w-[500px] h-[18rem] md:h-[20rem] shadow-lg">
      
      {/* Image Section - Fixed height */}
      <img 
        src={image} 
        alt="Blog" 
        className="w-28 h-28 md:w-40 md:h-60 rounded-3xl object-cover"
      />

      {/* Text Section - Flex ensures uniform height */}
      <div className="flex-1 flex flex-col justify-between md:p-5 p-2 text-center md:text-left">
        <h3 className="text-lg md:text-2xl font-bold">{title}</h3>
        <p className="text-sm md:text-base mt-2 md:mt-0 md:p-1 overflow-hidden line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card_Blog;
