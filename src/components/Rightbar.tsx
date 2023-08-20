import React from 'react'
import { FC } from 'react'
import { popData } from '../data'
import PopCard from './PopCard'
import { chatData } from '../data'
import logo from '../assets/logo8.png'

interface RightbarProps {
}

const Rightbar: FC<RightbarProps> = ({ }) => {

  return (
    
    <div className='flex flex-col gap-y-10 h-[1000px]  pl-6  rounded-2xl items-left text-center justify-start'>
      
        <h1 className='font-semibold mt-3 text-sm text-left'>Popular product</h1>
        <div>
            {popData.map((data)=>(
            <div className='flex flex-col text-left gap-y-2'>
         <div>
         <img src={logo} className='h-[46.38px] w-[53.38px]  bg-gray-900 rounded-full flex justify-between ' />
         <div className='text-black font-semibold text-sm'>{data.text}</div>
         <div className='text-[#06152B]/70 font-normal text-base'>{data.subtext}</div>
        </div>
        </div>
        ))}
        </div>
        <div className='gap-y-5'>
        <h1 className='font-semibold text-md text-left'>Chat</h1>
            {chatData.map((data) =>(
          <div className='flex flex-col mt-3  text-sm gap-y-2'>
            <div>
            <img src={logo} className='h-[46.38px] w-[53.38px]  bg-gray-900 rounded-full flex justify-between ' />
            <div className='text-black font-semibold text-sm'>{data.text}</div>
            <div className='text-[#06152B]/70 font-normal text-sm'>{data.subtext}</div>
            </div>
             </div>
            ))}
        </div>
        
        </div>
        
  )
}

export default Rightbar