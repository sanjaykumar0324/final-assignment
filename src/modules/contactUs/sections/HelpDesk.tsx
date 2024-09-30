import React from "react";
import { helpDeskData } from "../../../data/helpDeskData";
import { HELP_DESK_TITLE } from "../../../utils/constants";
import HelpDeskCard from "../components/HelpDeskCard";

const HelpDesk: React.FC = () => {
  return (
    <div className="mx-2 my-2 lg:my-20 lg:mx-10">
      <div className="container mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-4xl mb-10 text-center font-bold">
          {HELP_DESK_TITLE}
        </h1>
        <div
          className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3"
          data-aos-duration="700"
          data-aos="slide-up"        >
          {helpDeskData.map((item) => (
            <HelpDeskCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
