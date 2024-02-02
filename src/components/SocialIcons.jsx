import React from 'react'
import insta from "../assets/insta.jpg"
import thread from "../assets/thread.png"
import user from "../assets/user.png"
import { FaArrowDown } from 'react-icons/fa'

const SocialIcons = () => {
  return (
    <div className='hidden lg:flex top-[35%]  flex-col left-0 fixed w-1/12 text-white'>
      <div className='my-3 pl-2 bg-gray-600 ml-[-100px] hover:ml-[-1px] hover:rounded-r-md w-40 duration-300' ><a href="https://twitter.com/WWERomanReigns?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className='flex justify-between items-center'><span>Thread</span><img src={thread} className='w-12 py-3 pr-2' alt="" /></a></div>
      <div className='my-3 pl-2 bg-gray-600 ml-[-100px] hover:ml-[-1px] hover:rounded-r-md w-40 duration-300'><a href="https://www.instagram.com/romanreigns/?hl=en" className='flex justify-between items-center'><span>Instagram</span><img src={insta} className='w-12 py-3 px-2' alt="" /></a></div>
      <div className='my-3 pl-2 bg-gray-600 ml-[-100px] hover:ml-[-1px] hover:rounded-r-md w-40 duration-300'><a href="https://en.wikipedia.org/wiki/Roman_Reigns"  className='flex justify-between items-center'><span>Wikki <  FaArrowDown className='relative inline'/> </span><img src={user} className='w-9 py-3 px-2' alt="" /></a></div>
    </div>
  )
}

export default SocialIcons