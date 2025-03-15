import React, { useState } from 'react';
import Contact_bg from '../../Images/Contact_bg.webp';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email_from: '',
    message: '',
    phone: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_wzr8n9o',  // Your EmailJS Service ID
      'template_22pm6cc', // Your EmailJS Template ID
      e.target,
      '3wAAasTYazW97jH0X' // Your EmailJS Public Key
    )
    .then(
      (response) => {
        console.log('Email sent successfully!', response);
        setStatusMessage('✅ Message sent successfully!');
        setFormData({ name: '', email_from: '', message: '', phone: '' }); // Reset form
      },
      (error) => {
        console.error('Failed to send email:', error);
        setStatusMessage('❌ Failed to send message. Try again.');
      }
    );
  };

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
        <form className='flex flex-col gap-4' onSubmit={sendEmail}>
          <label className='text-lg font-semibold text-gray-900'>Name:</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            required
            value={formData.name}
            onChange={handleChange}
            className='p-3 rounded-lg bg-transparent text-gray-900 outline-none border border-gray-700 focus:border-emerald-600 transition-all duration-300'
          />

          <label className='text-lg font-semibold text-gray-900'>Email:</label>
          <input 
            type="email" 
            name="email_from" 
            placeholder="Enter your email" 
            required
            value={formData.email_from}
            onChange={handleChange}
            className='p-3 rounded-lg bg-transparent text-gray-900 outline-none border border-gray-700 focus:border-emerald-600 transition-all duration-300'
          />

          <label className='text-lg font-semibold text-gray-900'>Message:</label>
          <textarea 
            name="message"
            placeholder="Write your message here..." 
            required
            value={formData.message}
            onChange={handleChange}
            className='p-3 h-32 rounded-lg bg-transparent text-gray-900 outline-none border border-gray-700 focus:border-emerald-600 transition-all duration-300'
          ></textarea>

          <label className='text-lg font-semibold text-gray-900'>Phone:</label>
          <input 
            type="tel" 
            name="phone"
            placeholder="Enter your phone number (optional)" 
            value={formData.phone}
            onChange={handleChange}
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

        {/* Status Message */}
        {statusMessage && (
          <p className="text-center mt-4 font-semibold text-gray-900">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Form;
