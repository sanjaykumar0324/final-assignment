import React from "react";
import { CONTACT_US_DESC, CONTACT_US_TITLE } from "../../../utils/constants";

const ServiceContactUs: React.FC = () => {
  return (
    <div>
      <div className="bg-blue-700">
        <div className="container mx-auto flex flex-col gap-4 px-2  py-24 md:px-10 md:py-24 lg:gap-6 lg:px-72  lg:py-32 xl:gap-10 xl:px-96 xl:py-36 ">
          <div className="">
            <h1 className=" text-center lg:text-5xl font-bold text-white ">
              {CONTACT_US_TITLE}
            </h1>
            <p className="text-center">{CONTACT_US_DESC}</p>
          </div>
          <div className="flex justify-between border border-black bg-white rounded-full">
            <input
              placeholder="Search Your Answers"
              className="px-2 m-2 lg:m-3 xl:px-4 xl:m-4 text-sm  xl:text-lg"
            />
            <button className="mr-1 px-4 py-2 my-1  md:mx-1  md:my-1 md:px-4 md:py-2  lg:px-4 lg:py-2  xl:py-4 xl:px-6 bg-black text-white text-sm xl:text-lg rounded-2xl xl:rounded-full">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContactUs;
