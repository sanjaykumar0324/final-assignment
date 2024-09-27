import React, { useState } from "react";
import { FAQ_type } from "../utils/type";

const FAQItem: React.FC<FAQ_type> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item mb-4">
      <h3
        onClick={toggleOpen}
        className="cursor-pointer bg-gray-200 p-4 rounded-lg transition duration-200 hover:bg-gray-300"
      >
        {question}
      </h3>
      {isOpen && <p className="mt-2 p-4 bg-gray-100 rounded-lg">{answer}</p>}
    </div>
  );
};

export default FAQItem;
