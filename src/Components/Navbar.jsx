import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-emerald-800 text-white flex justify-between items-center md:px-20 p-5 md:sticky top-0 w-full h-[9vh] z-50 shadow-lg">
      
      {/* Logo */}
      <div className="text-2xl font-bold ">NatureNest</div>

      {/* Hamburger Button (Mobile) */}
      <button 
        className="md:hidden text-3xl relative z-50" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"} 
      </button>

      {/* Menu */}
      <ul className={`absolute left-0 top-[9vh] w-full bg-emerald-800 text-center transition-all duration-500 ease-in-out text-2xl z-40
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible -translate-y-full"} 
        md:static md:flex md:items-center md:justify-end md:gap-3 md:opacity-100 md:visible md:translate-y-0`}>

        <li className="py-2 md:py-0" onClick={() => setIsOpen(false)}> 
          <Link to="/" className="block px-4 py-2 hover:text-lime-600  focus:text-lime-400 active:text-lime-500">Home</Link>
        </li>
        <li className="py-2 md:py-0" onClick={() => setIsOpen(false)}> 
          <Link to="/about" className="block px-4 py-2 hover:text-lime-600 focus:text-lime-400 active:text-lime-500">About</Link>
        </li>
        <li className="py-2 md:py-0" onClick={() => setIsOpen(false)}> 
          <Link to="/gallery" className="block px-4 py-2 hover:text-lime-600  focus:text-lime-400 active:text-lime-500">Gallery</Link>
        </li>
        <li className="py-2 md:py-0" onClick={() => setIsOpen(false)}> 
          <Link to="/blog" className="block px-4 py-2 hover:text-lime-600  focus:text-lime-400 active:text-lime-500">Blog</Link>
        </li>
        <li className="py-2 md:py-0" onClick={() => setIsOpen(false)}> 
          <Link to="/contact" className="block px-4 py-2 hover:text-lime-600  focus:text-lime-400 active:text-lime-500">Contact</Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
