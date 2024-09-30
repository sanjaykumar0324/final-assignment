import React from "react";
import { FAQ_type } from "../../../utils/type";
import {
  FAQ_TOGGLE_DOWN_ICON,
  FAQ_TOGGLE_UP_ICON,
} from "../../../utils/constants";

interface FAQItemProps extends FAQ_type {
  isActive: boolean;
  onToggle: (index: number) => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isActive,
  onToggle,
  index,
}) => {
  return (
    <div className="bg-white p-4 mb-4">
      <div
        className="flex justify-between items-center p-6 cursor-pointer  transition"
        onClick={() => onToggle(index)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <button>
          {isActive ? <FAQ_TOGGLE_UP_ICON /> : <FAQ_TOGGLE_DOWN_ICON />}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-700 ${
          isActive ? "max-h-40" : "max-h-0"
        }`}
      >
        <p
          className="pt-4 pb-6 px-6 text-sm md:text-lg"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
