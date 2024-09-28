import React from 'react'
import { Service_type } from '../../../utils/type'
import { RIGHT_ARROW_ICON } from '../../../utils/constants'

const ServiceCard :React.FC<Service_type>= (serviceItem) => {
  return (
    <div className="bg-[#F4F4FF] rounded-xl  border border-gray-400">
      <div className=" p-4 lg:p-10 flex flex-col gap-2 lg:gap-4">
        <img
          src={serviceItem.icon}
          className="w-[50px] h-[50px] cursor-pointer"
          alt={serviceItem.title}
        />
        <h1 className="text-2xl">{serviceItem.title}</h1>
        <p className="text-sm text-gray-500">{serviceItem.desc}</p>
        <div className='flex gap-4 items-center justify-center bg-black text-white py-2 px-4 mx-8 rounded-2xl lg:rounded-xl xl:rounded-full'>
          <button className="cursor-pointer hover:text-red-500 text-sm xl:texl">{serviceItem.buttonText}</button>
           <RIGHT_ARROW_ICON/>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard