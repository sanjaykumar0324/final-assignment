import React from 'react'
import { FAQ_type } from '../../../utils/type'

const FAQCard :React.FC<FAQ_type> = ({ question, answer }) => {
    console.log(question,answer)
  return (
   
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title text-xl font-medium">{question}</div>
    <div className="collapse-content">
      <p>{answer}</p>
    </div>
  </div>
  )
}

export default FAQCard