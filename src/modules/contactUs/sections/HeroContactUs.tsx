import React, { useState } from "react";
import {
  CONTACT_US_DESC,
  CONTACT_US_TITLE,
  HELP_CENTER_BG_IMAGE,
} from "../../../utils/constants";
import { serviceData } from "../../../data/serviceData";
import ServiceCard from "../components/ServiceCard";

const HeroContactUs: React.FC = () => {
  const [helpSearch, setHelpSearch] = useState("");

  const handleHelpOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHelpSearch(e.target.value);
  };
  const handleHelpSearchClick = () => {
    alert(helpSearch);

    setHelpSearch("");
  };
  return (
    <div className="h-[90vh] md:h-[75vh]">
      <div
        className="h-[100%] relative bg-cover bg-center flex flex-col justify-center  "
        style={{
          backgroundImage: `url(${HELP_CENTER_BG_IMAGE})`,
          height: "70%",
          backdropFilter: "blur(10px)",
          width: "100%",
        }}
      >
        <div className="container mx-auto flex flex-col gap-4 ">
          <div className="flex flex-col gap-2">
            <h1
              className=" text-center lg:text-5xl font-bold text-white "
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {CONTACT_US_TITLE}
            </h1>
            <p
              className="text-center"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              {CONTACT_US_DESC}
            </p>
          </div>
          <div
            className="flex justify-between border border-black bg-white rounded-full"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="150"
          >
            <input/>
            <input
              placeholder="Search Your Answers"
              type="text"
              value={helpSearch}
              onChange={(e) => handleHelpOnChange(e)}
              className="px-2 m-2 lg:m-3 xl:px-4 xl:m-4 text-sm  xl:text-lg focus:outline-none"
            />
            <button
              className="px-2 py-1 m-0.5  sm:mr-1 sm:px-4 sm:py-2 sm:my-1  md:mx-1  md:my-1 md:px-4 md:py-2  lg:px-4 lg:py-2  xl:py-4 xl:px-6 bg-black text-white text-sm xl:text-lg rounded-2xl xl:rounded-full"
              onClick={handleHelpSearchClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-[45%] md:top-[50%]  lg:top-[50%] transform -translate-x-1/2 text-black w-full px-2  lg:w-[80%] xl:w-[50%]">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          {serviceData.map((item) => (
            <ServiceCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroContactUs;
