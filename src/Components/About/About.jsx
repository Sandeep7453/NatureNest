import React from 'react';
import About_bg from './Images/AboutUs_bg.webp';
import CommunityImage from './Images/Community.webp';
// import PolicyImage from './Images/Driving_POlicy.webp';
import YouthImage from './Images/Inspiring.webp';
import TechImage from './Images/Technology.webp'
import BusinessImage from './Images/Working.webp'
import ScienceImage from './Images/Science.webp'
import FinanceImage from './Images/Finance.webp'

const About = () => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-500 to-lime-600 font-serif">
      {/* Hero Image Section */}
      <div className="h-[100vh] w-full relative">
        <img 
          src={About_bg} 
          alt="About Us Background" 
          className="h-full w-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
          <h5 className="text-3xl md:text-4xl font-mono">'Who we are'</h5>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mt-2 font-serif">"How We Work"</h1>
        </div>
      </div>

      {/* About Us Text Section */}
      <div className="px-6 md:px-20 lg:px-52 py-16 md:py-24 flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold max-w-4xl">
          Across Landscapes. Across Generations. Across Possibilities.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-6 max-w-4xl">
          At NatureNest, we are committed to protecting nature, preserving biodiversity, and promoting sustainable living. Rooted in the beauty of the Himalayas, we strive to bridge the gap between conservation, communities, and innovation. With science as our foundation and collaboration as our strength, we bring together real-world solutions, policy expertise, and sustainable partnerships to create lasting impact.
        </p>
      </div>
      <div className="px-6 md:px-20 py-16 space-y-16">
      
      {/* Science Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img src={ScienceImage} alt="Science" className="w-full md:w-1/2 h-72 object-cover object-center rounded-lg shadow-lg" />
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold">Science-Driven Conservation</h2>
          <p className="text-lg mt-4">Our conservation efforts are backed by research and data, ensuring that every step we take contributes to long-term environmental well-being.</p>
          <a href="#" className="text-blue-500 font-semibold mt-2 inline-block">🔎 How science guides us →</a>
        </div>
      </div>


      {/* Policy Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <img src={CommunityImage} alt="Policy" className="w-full md:w-1/2 h-72 object-cover object-center rounded-lg shadow-lg" />
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold">Advocating for Change</h2>
          <p className="text-lg mt-4">Through responsible advocacy, we work with policymakers to integrate nature-based solutions into critical environmental and economic strategies.</p>
          <a href="#" className="text-blue-500 font-semibold mt-2 inline-block">📜 How we influence policy →</a>
        </div>
      </div>

      {/* Business Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img src={BusinessImage} alt="Business" className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow-lg" />
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold">Engaging Businesses for a Greener Future</h2>
          <p className="text-lg mt-4">Industries play a crucial role in shaping our planet’s future. We collaborate with businesses to develop sustainable solutions that benefit both nature and people.</p>
          <a href="#" className="text-blue-500 font-semibold mt-2 inline-block">🏢 How we guide businesses →</a>
        </div>
      </div>

      {/* Community Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <img src={CommunityImage} alt="Community" className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow-lg" />
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold">Empowering Local Communities & Indigenous Knowledge</h2>
          <p className="text-lg mt-4">Conservation is most effective when local voices lead the way. We respect, learn from, and uplift the wisdom of communities closely connected to the land.</p>
          <a href="#" className="text-blue-500 font-semibold mt-2 inline-block">🌿 How we learn from locals →</a>
        </div>
      </div>

      {/* Technology Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img src={TechImage} alt="Technology" className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow-lg" />
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold">Innovating with Technology</h2>
          <p className="text-lg mt-4">Harnessing the power of modern technology, we implement innovative tools to monitor, protect, and restore ecosystems more efficiently.</p>
          <a href="#" className="text-blue-500 font-semibold mt-2 inline-block">🛰️ How tech helps us →</a>
        </div>
      </div>

      {/* Finance Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <img src={FinanceImage} alt="Finance" className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow-lg" />
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold">Sustainable Finance for Lasting Impact</h2>
          <p className="text-lg mt-4">By unlocking new funding avenues for conservation, we scale up efforts to protect our environment beyond traditional resources.</p>
          <a href="#" className="text-blue-500 font-semibold mt-2 inline-block">💰 How finance fuels change →</a>
        </div>
      </div>

      {/* Youth Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img src={YouthImage} alt="Youth" className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow-lg" />
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold">Inspiring the Next Generation</h2>
          <p className="text-lg mt-4">The future of conservation depends on young changemakers. We support and collaborate with youth who are passionate about preserving our planet.</p>
          <a href="#" className="text-blue-500 font-semibold mt-2 inline-block">🚀 Join our youth movement →</a>
        </div>
      </div>

      {/* Vision 2030 */}
      <div className="text-center mt-16">
        <h2 className="text-4xl font-bold">Our Vision for 2030</h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          NatureNest is on a mission to create a sustainable future for generations to come. Through science, community partnerships, and innovation, we aim to restore ecosystems, combat climate change, and protect the breathtaking landscapes of our world.
        </p>
        <a href="#" className="text-blue-500 font-semibold mt-4 inline-block">🌏 Explore our impact →</a>
      </div>




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
          <h2 className='text-5xl font-serif mb-4 '>Nature's Wisdom</h2>
          <p className='text-lg italic bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text'>
            "Step into the heart of nature – where every breeze whispers a tale."
          </p>
          <p className='text-lg italic bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text'>
            "Find tranquility in nature’s embrace – let your spirit roam free."
          </p>
          <p className='text-lg italic bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text'>
            "Unwind in the arms of nature – where silence speaks volumes."
          </p>
          <p className='text-lg italic bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text'>
            "Revel in nature’s wonders – every moment is a timeless gift."
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default About;
