import React from "react";
import { customerCareData } from "../../../data/customerCareData";
import {
  CUSTOMER_CARE_DESC,
  CUSTOMER_CARE_TITLE,
} from "../../../utils/constants";
import CustomerCareCard from "../components/CustomerCareCard";

const CustomerCare: React.FC = () => {
  return (
    <div className="my-20">
      <div className="container mx-auto ">
        <div className=" flex flex-col items-center gap-10 mb-10 px-2">
          <h1
            className="text-2xl lg:text-4xl font-bold"
            data-aos="slide-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            {CUSTOMER_CARE_TITLE}
          </h1>
          <p data-aos="slide-up" data-aos-duration="500" data-aos-delay="150">
            {CUSTOMER_CARE_DESC}
          </p>
        </div>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 w-[96%]  md:w-[90%]  lg:w-[90%] xl:w-[80%] container mx-auto py-6 md:py-10 gap-8 md:gap-10 border border-gray-400 rounded-xl"
          data-aos="slide-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
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
