import React from 'react'
import roman  from "../assets/roman.jpg"
import arrowr from "../assets/arrowr.png"
import {Link} from "react-scroll"


const Home = () => {
  return (
    <div name="home" className='h-screen bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row' >
        <div className='flex justify-center flex-col h-3/4 md:h-full'>
          <h1 className='text-4xl sm:marker:text-7xl font-bold text-white'>American Professional Wrestler</h1>
          <p className='text-gray-500 py-4 w-full'>Reigns debuted on the WWE main roster in November 2012 as part of the faction "The Shield". He has been holding the WWE title for 502 days, and if he maintains it until December 29, 2024, he will become the fifth person in WWE history to hold the title for 1,000 days.</p>
        <div >
        <Link to='portfolio' smooth duration={500} className='text-white w-1/2 group px-2 py-6 my-2 flex items-center rounded-md  bg-gradient-to-r from bg-cyan-500  to-blue-500 cursor-pointer '>Portfolio <span className='mx-1 '>
          <img className='w-1/12 group-hover:rotate-90 duration-300' src={arrowr} alt="" /></span></Link>
        </div>
        </div>
         <div>
          <img src={roman} className='rounded-2xl mx-auto w-2/3 md:w-2/3' alt="My profile" /></div>
      </div>
     
    </div>
  )
}
export default Home