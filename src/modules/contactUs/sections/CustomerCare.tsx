import React from "react";
import { customerCareData } from "../../../data/customerCareData";
import { CONTACT_DESC, CONTACT_TITLE } from "../../../utils/constants";
import CustomerCareCard from "../components/CustomerCareCard";

const CustomerCare: React.FC = () => {
  return (
    <div className="my-20">
      <div className="container mx-auto">
        <div className=" flex flex-col items-center gap-10 mb-10 px-2">
          <h1 className="text-2xl lg:text-4xl font-bold">{CONTACT_TITLE}</h1>
          <p>{CONTACT_DESC}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 m-4 lg:px-20 py-6 md:py-10 gap-4 md:gap-10 border border-black rounded-xl">
          {customerCareData.map((item, index) => (
            <CustomerCareCard
              key={item.id}
              customerCareItem={item}
              isLast={index === customerCareData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;
