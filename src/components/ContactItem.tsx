import React from 'react'
import { ContactData } from '../data/contactData'

type ContactItemProp={
    contactItem:ContactData,
    isLast?: boolean;
}
const ContactItem :React.FC<ContactItemProp>= ({contactItem,isLast}) => {
  return (
    <div className={`border border-l-0 border-t-0 border-b-0 ${isLast ? 'border-r-0' : 'border-r-gray-400'}`}>
        <div className='flex flex-col gap-4 items-center p-4'> 
            <p className='text-5xl text-red-500'>{<contactItem.icon/>}</p>
            <h1 className='text-lg font-bold'>{contactItem.title}</h1>
            <p className='text-lg hover:underline'>{contactItem.description}</p>

            
        </div>
    </div>
  )
}

export default ContactItem