import React from 'react';
import Contact_bg from '../../Images/Contact_bg.jpg';

const Form = () => {
  return (
    <div 
      className='h-[100vh] bg-center bg-cover flex justify-center items-center p-5' 
      style={{ backgroundImage: `url(${Contact_bg})` }}
    >
      <div className='h-auto md:w-[60%] p-8 rounded-3xl text-gray-800 shadow-lg border border-gray-700 backdrop-blur-md bg-white/20'>

        {/* Heading */}
        <h2 className='text-4xl font-bold text-center mb-6 text-gray-900'>
          🌿 " हमसे जुड़ें - Connect With Us " 🌿
        </h2>

        {/* Form Fields */}
        <form className='flex flex-col gap-4'>
          {/* Name Input */}
          <label className='text-lg font-semibold text-gray-900'>Name:</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            className='p-3 rounded-lg bg-transparent text-gray-900 outline-none border border-gray-700 focus:border-emerald-600 transition-all duration-300'
          />

          {/* Email Input */}
          <label className='text-lg font-semibold text-gray-900'>Email:</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className='p-3 rounded-lg bg-transparent text-gray-900 outline-none border border-gray-700 focus:border-emerald-600 transition-all duration-300'
          />

          {/* Message Textarea */}
          <label className='text-lg font-semibold text-gray-900'>Message:</label>
          <textarea 
            placeholder="Write your message here..." 
            className='p-3 h-32 rounded-lg bg-transparent text-gray-900 outline-none border border-gray-700 focus:border-emerald-600 transition-all duration-300'
          ></textarea>

          {/* Phone Input */}
          <label className='text-lg font-semibold text-gray-900'>Phone:</label>
          <input 
            type="tel" 
            placeholder="Enter your phone number (optional)" 
            className='p-3 rounded-lg bg-transparent text-gray-900 outline-none border border-gray-700 focus:border-emerald-600 transition-all duration-300'
          />

          {/* Submit Button */}
          <div className='flex justify-center items-center'>
            <button 
              type="submit" 
              className='mt-4 w-fit bg-emerald-700 hover:bg-emerald-900 text-white text-lg font-bold p-3 rounded-lg transition-all duration-300 border border-gray-700'
            >
              Send Message 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
