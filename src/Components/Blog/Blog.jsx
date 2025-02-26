import React from 'react'
import Card from '../Blog/Card_Blog'
import { Link } from 'react-router-dom'
import Neelkanth from '../Blog/Images/Neelkanth.webp'
import Kedarnath from '../Blog/Images/Kedarnath4.jpeg'

const Blog = () => {
  return (
  <div className=' md:flex p-4 h-auto md:justify-around flex-wrap flex justify-center gap-3 w-[100vw] bg-gradient-to-r from-emerald-900 to-emerald-800'>
<Link to="/Kedarnath">
<Card 
image = {Kedarnath}
title="Lost in Devotion: My Journey to Kedarnath"
 description="A soul-stirring adventure to the sacred shrine of Kedarnath, where the echoes of mantras blend with the whispering winds. Discover the essence of devotion and nature’s grandeur." 
 />
</Link> 



<Link to="/neelkanth">
  <Card
  image ={Neelkanth}
    title="Riding Through the Divine: My Thrilling Journey to Neelkanth" 
    description="An unforgettable bike adventure through the mystical roads to Neelkanth, where devotion meets the wild. From off-roading thrills to rain-soaked rides, experience the essence of faith and adventure like never before." 
  />
</Link>




  </div>
  )
}

export default Blog