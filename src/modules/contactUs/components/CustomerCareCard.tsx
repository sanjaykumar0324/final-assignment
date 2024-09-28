import React from 'react'
import { CustomerCare_type } from '../utils/type';

type CustomerCareCardProp={
    customerCareItem:CustomerCare_type,
    isLast?: boolean;
}
const CustomerCareCard :React.FC<CustomerCareCardProp>= ({customerCareItem,isLast}) => {
  return (
    <div className={`border border-l-0 border-t-0 border-b-0 ${isLast ? 'border-r-0' : 'border-r-gray-400'}`}>
        <div className='flex flex-col gap-4 items-center p-4'> 
            <p className='text-5xl text-red-500'>{<customerCareItem.icon/>}</p>
            <h1 className='text-lg font-bold'>{customerCareItem.title}</h1>
            <p className='text-lg hover:underline'>{customerCareItem.description}</p>

            
        </div>
    </div>
  )
}

export default CustomerCareCard