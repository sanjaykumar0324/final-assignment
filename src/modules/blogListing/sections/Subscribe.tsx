import React from 'react'
import { TELEGRAM_ICON } from '../../../utils/constants'

const Subscribe : React.FC= () => {
  return (
    <div className='m-2'>
        
        <div className='container mx-auto  xl:px-16 xl:py-16 lg:p-10  md:p-6 xl:w-[72%] flex max-lg:gap-5 flex-col lg:flex-row items-center justify-evenly border border-gray-300  px-2'>
            <div>{<TELEGRAM_ICON className='text-7xl'/>}</div>
            <div className='lg:w-1/4 w-3/4 flex flex-col gap-2'>
                <p className='font-bold text-4xl'>Inside Design:</p>
                <p className='font-semibold text-3xl'>Stories & interviews</p>
                <p>Subscribe to learn about new product features, the latest in technology, and updates</p>
            </div>
            <div className='bg-white flex gap-2 border border-black rounded-md max-lg:w-full justify-between '>
                <input type='text'
                placeholder='Enter email here'
                onChange={(e)=>e.target.value}
                
                className='bg-white p-2 focus:outline-none w-1/2   rounded-xl'/>
                <button className='bg-black text-white p-3 m-1' onClick={()=>alert("Subscribed")}>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe