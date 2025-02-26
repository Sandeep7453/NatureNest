import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-lime-800 to-lime-900 mt-auto">
      <div className=" md:h-[55vh] p-5 md:flex md:justify-around md:items-center md:flex-row flex flex-col gap-10">
        
        {/* About Us */}
        <div>
          <h2 className="font-bold text-3xl text-gray-300">About Us</h2>
          <p className="text-gray-400 w-[300px] md:w-[450px]  mt-3">
            HimalVani is a tribute to the untouched beauty of nature. We are passionate about exploring and sharing the serene landscapes, rich biodiversity, and the soulful essence of the Himalayas. Join us in celebrating nature’s wonders and preserving its purity for future generations. 🌿✨
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-bold text-3xl text-gray-300">Quick Links</h2>
          <ul className="mt-3 text-xl flex flex-col gap-3 text-gray-400">
            <li className="hover:text-lime-400"><Link to="/">Home</Link></li>
            <li className="hover:text-lime-400"><Link to="/about">About</Link></li>
            <li className="hover:text-lime-400"><Link to="/gallery">Gallery</Link></li>
            <li className="hover:text-lime-400"><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
        <div className="h-fit rounded-3xl bg-black/30 p-6 flex flex-col items-start space-y-4 shadow-lg border border-gray-700 backdrop-blur-md">
  {/* Email Input */}
  <h3 className="text-lg font-semibold text-gray-100">Email:</h3>
  <input 
    type="email" 
    placeholder="Enter your email" 
    className="border-lime-500 border-2 rounded-xl focus:bg-lime-600 focus:text-white p-3 w-full outline-none transition-all duration-300"
  />

  {/* Checkbox & Label */}
  <div className="flex items-center space-x-2">
    <input type="checkbox" id="terms" className="w-5 h-5 accent-lime-600" />
    <label htmlFor="terms" className="text-gray-200 text-sm cursor-pointer">
      I agree with the <span className="text-lime-400 font-semibold">Privacy Policy</span> and 
      <span className="text-lime-400 font-semibold"> Terms & Conditions</span>.
    </label>
  </div>

  {/* Subscribe Button */}
  <button className="w-full bg-lime-600 hover:bg-lime-700 text-white font-bold p-3 rounded-xl transition-all duration-300">
    Subscribe 📩
  </button>
</div>

          <h2 className="font-bold text-3xl text-gray-300 mt-2">Follow Us</h2>
          <ul className="flex gap-3 mt-3 text-xl text-gray-400">
            <li className="hover:text-gray-200 cursor-pointer">Facebook</li>
            <li className="hover:text-gray-200 cursor-pointer">Instagram</li>
            <li className="hover:text-gray-200 cursor-pointer">YouTube</li>
          </ul>
        </div>
      </div>

      {/* Centered Divider & Copyright */}
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="border-t-2 border-gray-700 w-[80vw]"></div>
        <p className="text-center text-gray-400 py-3">© 2025 HimalVani. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
