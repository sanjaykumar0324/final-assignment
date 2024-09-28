import React, { useState } from "react";
import { FAQ_type } from "../../../utils/type";
import { FAQ_TOGGLE_DOWN_ICON, FAQ_TOGGLE_UP_ICON } from "../../../utils/constants";

const FAQItem: React.FC<FAQ_type> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" ">
      <div className="flex justify-between" onClick={toggleOpen}>
        <h3 className="cursor-pointer bg-[#FFFFFF] p-6">{question}</h3>
        <button className="">{isOpen ? <FAQ_TOGGLE_UP_ICON/>: <FAQ_TOGGLE_DOWN_ICON/>}</button>
      </div>
      {isOpen && <p className=" pt-4 pb-6 px-6 bg-[#FFFFFF] ">{answer}</p>}
    </div>
  );
};

export default FAQItem;
