import React, { useEffect, useState } from "react";
import { FAQ_type } from "../../utils/type";
import FAQItem from "../../components/FAQItem";

const FAQ: React.FC = () => {
    const [faqs, setFaqs] = useState<FAQ_type[]>([]);
    
    useEffect(() => {
        const fetchFAQs = async () => {
            const response = await fetch('/src/data/faqData.json');
            const data: FAQ_type[] = await response.json();
            setFaqs(data);
        };
        
        fetchFAQs();
    }, []);
  return (
    <div className="faq max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;

