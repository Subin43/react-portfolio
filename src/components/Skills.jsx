import React from 'react'
import spear  from "../assets/spear.jpg"
import punch  from "../assets/superman punch.jpg"
import locks  from "../assets/lock.jpg"
import uranage from "../assets/uranage.jpg"
import Somoan from "../assets/Soman drop.jpg"
import drive from '../assets/drive-py.png'
import clothesline from '../assets/Clothesline.jpg'

const Skills = () => {
    let skill = [
        {
            im:spear,
            txt:"Spear"
        },
        {
            im:punch,
            txt:"Superman Punch"
        },
        {
            im:locks,
            txt:"Guillotine"
        },
        {
            im:Somoan,
            txt:"Somoan drop"
        },
        {
            im:uranage,
            txt:"uranage "
        },
        {
            im:clothesline,
            txt:"Clothesline "
        },
        {
            im:drive,
            txt:"drive-py "
        },


    ]
  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full min-h-full  pb-40 text-white md:h-screen pt-[12rem]'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
            <p className='py-6'>Check out my skills right here</p>
        </div>
        <div className='  w-full flex flex-wrap h-full '>
        {skill.map((item)=><div className=' relative group md:w-[21%] w-2/3 m-3 flex flex-col '>
                <img className=' w-full object-cover rounded-t-sm hover:scale-105 duration-300 hover:opacity-60  ' src={item.im} alt="" />
                 <div className='absolute top-1 pr-2 text-3xl duration-200 text-white  hidden group-hover:block'>{item.txt}</div> 
            </div>)}
        </div>
    </div>
</div>
  )
}

export default Skills