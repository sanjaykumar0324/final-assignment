import React, { useEffect, useState } from "react";
import { FAQ_type } from "../../utils/type";
import FAQItem from "../../components/FAQItem";
import { FAQ_API_URL } from "../../utils/constants";

const FAQ: React.FC = () => {
    const [faqs, setFaqs] = useState<FAQ_type[]>([]);
    
    useEffect(() => {
        const fetchFAQs = async () => {
            const response = await fetch(FAQ_API_URL);
            const data: FAQ_type[] = await response.json();
            setFaqs(data);
        };
        
        fetchFAQs();
    }, []);
  return (
    <div className=" bg-[#E0E0FF] ">
      <div className=" mx-auto   p-4 py-4 lg:py-28 lg:px-48">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-center">Popular Searched Questions</h2>
        <div className=" rounded-2xl border border-black p-4 bg-[#FFFFFF]">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

