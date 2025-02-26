import React from 'react';

const About = () => {
  return (
    <div className='h-fit bg-gradient-to-r from-emerald-500 to-emerald-900 text-white py-20 px-5 md:px-20'>
      {/* Main Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-4xl font-bold italic bg-gradient-to-r from-amber-500 to-pink-500 inline-block text-transparent bg-clip-text'>
          "Embracing the Beauty of Nature - A Journey Within"
        </h1>
      </div>
      
      {/* About Content Section */}
      <div className='flex flex-col gap-10'>
        {/* About Us */}
        <div className='bg-black bg-opacity-20 p-8 rounded-3xl shadow-lg'>
          <h2 className='text-3xl font-semibold mb-4'>Who We Are</h2>
          <p className='text-lg'>
            We are passionate nature lovers who believe in the power of greenery to heal, inspire, and reconnect people with their roots. Our mission is to create a space where you can immerse yourself in the tranquility of nature, celebrate its wonders, and cherish its timeless gifts.
          </p>
        </div>

        {/* Our Vision */}
        <div className='bg-black bg-opacity-20 p-8 rounded-3xl shadow-lg'>
          <h2 className='text-3xl font-semibold mb-4'>Our Vision</h2>
          <p className='text-lg'>
            We envision a world where nature and humanity coexist harmoniously. By spreading awareness and fostering a deep connection with the natural world, we aim to inspire individuals to protect and cherish the environment for generations to come.
          </p>
        </div>

        {/* Our Mission */}
        <div className='bg-black bg-opacity-20 p-8 rounded-3xl shadow-lg'>
          <h2 className='text-3xl font-semibold mb-4'>Our Mission</h2>
          <p className='text-lg'>
            Our mission is to bring you closer to nature through inspiring stories, breathtaking visuals, and an engaging community. Whether it's through scenic landscapes, thoughtful insights, or eco-friendly initiatives, we are here to remind you that nature is the greatest healer.
          </p>
        </div>

        {/* Quotes Section */}
        <div className='flex flex-col gap-6 text-center'>
          <h2 className='text-3xl font-semibold mb-4'>Nature's Wisdom</h2>
          <p className='text-lg italic bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text'>
            "Step into the heart of nature – where every breeze whispers a tale."
          </p>
          <p className='text-lg italic bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text'>
            "Find tranquility in nature’s embrace – let your spirit roam free."
          </p>
          <p className='text-lg italic bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text'>
            "Unwind in the arms of nature – where silence speaks volumes."
          </p>
          <p className='text-lg italic bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text'>
            "Revel in nature’s wonders – every moment is a timeless gift."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
