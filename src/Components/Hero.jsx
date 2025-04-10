import React from "react";
import { motion } from "motion/react";
import bgImg from "../Images/Hero_bg.webp";

const Hero = () => {
  return (
    <div className="h-[100vh]">
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center flex-col h-[100vh]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <motion.h1
      initial={{scale:0.5, opacity:0}}
      animate={{scale:1, opacity:1}}
    transition={{duration:1, delay:0.1}}
      className="text-7xl font-bold bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text md:mt-55 pl-2">
        Discover The Beauty Of Nature
      </motion.h1>
      <p className="text-center italic text-2xl bg-gradient-to-r from-slate-300 to-slate-100 text-transparent bg-clip-text max-w-6xl hidden md:block px-4">
      "Nature is not just a place to visit; it is where we belong. It is where the sunrises remind us of new beginnings, the forests teach us patience, and the mountains stand as proof that strength is found in stillness."
      </p>
     
    </div>

    <div className="video">

      
    </div>
    </div> 
  );
};

export default Hero;
