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
    <div
      className="h-[60vh] mb-40 max-lg:mb-[360px]"
      style={{
        backgroundImage: `url(${HELP_CENTER_BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full backdrop-blur-md flex flex-col gap-2 items-center text-white">
        <h1
          className="text-3xl lg:text-5xl font-semibold mt-28"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {CONTACT_US_TITLE}{" "}
        </h1>
        <p
          className="text-sm md:text-base lg:font-medium"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          {CONTACT_US_DESC}
        </p>
        <div className="bg-white p-1 w-[90%] lg:w-[40%] rounded-full flex mt-16"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="150">
          <input
            className="text-base px-4 py-2 lg:py-4 rounded-full grow text-black focus:outline-none font-medium max-sm:w-full"
            type="text"
            placeholder="Search for answer"
            onChange={handleHelpOnChange}
          />
          <button className="rounded-full px-6 lg:px-12 bg-black text-white" onClick={handleHelpSearchClick}>Search</button>
        </div>
      </div>
      <div className="absolute w-full lg:flex gap-6 justify-center translate-y-[-25%] lg:translate-y-[-50%] p-4">
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
