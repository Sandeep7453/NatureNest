import React from 'react'


const Cards = ({image, title, description, button}) => {
  return (
    <div className='bg-cyan-600 h-[30rem] flex flex-col p-3 w-[100%] rounded-4xl md:w-96 md:wrapper gap-2'>
        <img src={image} alt="" className=' h-72 w-full rounded-2xl bg-center'/> 
        <h3 className='text-2xl font-bold'>{title} </h3>
        <p className='text-gray-100'>{description} </p>
        <button className='outline-2 p-3 rounded-4xl bg-blue-700 text-white outline-blue-700 mt-3'>{button} </button>
    </div>
  )
}

export default Cards;