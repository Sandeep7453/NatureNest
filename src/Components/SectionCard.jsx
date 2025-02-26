import React from 'react';
import Cards from './Cards';
import Landscape from '../Images/Landscape_card.jpg';
import Wilderness from '../Images/Wilderness_card.jpg';
import MountainView from '../Images/Mountain_card.jpg'
import Sunset from '../Images/Sunset.jpg'
import RiverValley from '../Images/RiverValley.jpg'

const SectionCard = () => {
  const cardData = [
    {
      image: Landscape, 
      title: 'Explore the Wilderness',
      description: 'Experience the untouched beauty of nature, where wildlife and landscapes create a breathtaking harmony.',
      button: 'Discover More',
    },
    {
      image: Wilderness, 
      title: 'Journey Through the Forest',
      description: 'Discover the magic hidden deep within the dense green forests, where adventure awaits at every turn.',
      button: 'Start Your Adventure',
    },
    {
      image: MountainView,
      title: 'Majestic Mountain Peaks',
      description: 'Stand atop towering mountains and witness breathtaking panoramic views that will leave you speechless.',
      button: 'View More',
    },
    {
      image: Sunset, 
      title: 'Golden Sunset by the Beach',
      description: 'Feel the warmth of the setting sun as golden hues paint the sky over the peaceful waves of the ocean.',
      button: 'Relax & Unwind',
    },
    {
      image: RiverValley, 
      title: 'Tranquil River Valley',
      description: 'Follow the gentle flow of the river through lush valleys, where serenity and beauty coexist in harmony.',
      button: 'Discover Serenity',
    },
  ];
  

  return (
    <div className=" bg-gradient-to-r from-emerald-500 to-emerald-900 flex justify-around items-center flex-col gap-6 p-6 pt-25 md:flex-row">
      {cardData.map((item, index) => (
        <Cards
          key={index} 
          image={item.image}
          title={item.title}
          description={item.description}
          button={item.button}
        />
      ))}
    </div>
  );
};

export default SectionCard;
