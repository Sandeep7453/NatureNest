import React from "react";

import bgImg from "../Images/Hero_bg.jpeg";

const Hero = () => {
  return (
    <div className="h-[100vh]">
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center flex-col w-dvw h-[100vh]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="text-7xl font-bold bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text md:mt-55 animate-bounce pl-2">
        Discover The Beauty Of Nature
      </h1>
      <p className="text-center italic text-2xl bg-gradient-to-r from-slate-300 to-slate-100 text-transparent bg-clip-text max-w-6xl hidden md:block px-4">
      "Nature is not just a place to visit; it is where we belong. It is where the sunrises remind us of new beginnings, the forests teach us patience, and the mountains stand as proof that strength is found in stillness."
      </p>
     
    </div></div> 
  );
};

export default Hero;
