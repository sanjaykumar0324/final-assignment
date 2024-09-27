import React, { useState } from 'react'
import { contactData } from '../../data/contactData'
import ContactItem from '../../components/ContactItem'

const Contact :React.FC= () => {
    const [isLast,setIsLast]=useState()
  return (
    <div className='container mx-auto'>
        <div className='grid grid-cols-2 lg:grid-cols-4 p-2 lg:p-20 gap-10'>
            {contactData.map((item)=>(
                <ContactItem key={item.id} contactItem={item}/>
            ))}
        </div>

    </div>
  )
}

export default Contact