import React from "react";
import { HelpDesk_type } from "../utils/type";

const HelpDeskCard: React.FC<HelpDesk_type> = (helpDeskItem) => {
  return (
    <div className="bg-[#F4F4FF] rounded-xl">
      <div className=" p-4 lg:p-10 flex flex-col gap-2 lg:gap-4">
        <img
          src={helpDeskItem.icon}
          className="w-[50px] h-[50px] cursor-pointer"
          alt={helpDeskItem.title}
        />
        <h1 className="text-2xl">{helpDeskItem.title}</h1>
        <p className="text-sm text-gray-500">{helpDeskItem.desc}</p>
        <div>
          <p className="cursor-pointer hover:text-red-500">view more</p>
        </div>
      </div>
    </div>
  );
};

export default HelpDeskCard;
