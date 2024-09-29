import React, { useEffect } from "react";
import {
  BLOG_HERO_DESIGN,
  BLOG_HERO_IMAGE,
  BLOG_HERO_TITLE,
  BLOG_SPARK_ICON,
  FEATURED_CATEGORIES_IMAGE,
  NAVIGATE_ARROW_ICON,
} from "../../../utils/constants";

const HeroBlogListing: React.FC = () => {
  return (
    <div>
      <div className="px-2 py-4 lg:px-6 xl:px-10 lg:py-4 grid  grid-cols-1 lg:grid-cols-[65%_35%] gap-4">
        <div className="lg:col-span-1 relative h-[50vh] lg:h-[90vh]">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url(${BLOG_HERO_IMAGE})` }}
          ></div>

          <h1 className="absolute text-white px-2 text-lg md:text-2xl xl:text-5xl bottom-28 font-bold  lg:px-2 xl:px-20  w-[50%] rounded">
            {BLOG_HERO_TITLE}
          </h1>
          <button className="absolute bottom-12 text-xl left-20 lg:bottom-20 lg:left-1/3 hover:bg-red-400 text-white rounded-full lg:text-2xl p-2 border border-gray-500">
            {<NAVIGATE_ARROW_ICON />}{" "}
          </button>
        </div>
        <div className="lg:col-span-1 flex flex-col gap-4 ">
          <div className="bg-[#BDE48A]    justify-center p-4 xl:px-10 h-[30vh] md:h-[40] lg:h-[30]   rounded-xl">
            <div className="flex justify-end ">
              <p className="text-2xl text-end p-2 border border-black rounded-full ">
                {<BLOG_SPARK_ICON />}
              </p>
            </div>
            <div className="flex flex-col h-[100%] justify-center gap-4">
              <p className="font-bold">Design</p>
              <p>{BLOG_HERO_DESIGN}</p>
              <p className="flex items-center gap-2 underline hover:text-red-400">
                Read More <NAVIGATE_ARROW_ICON />
              </p>
            </div>
          </div>
          <div className="h-[40vh] relative lg:h-[58vh] bg-red-600 rounded-2xl ">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `url(${FEATURED_CATEGORIES_IMAGE})` }}
            ></div>

            <h1 className="absolute text-white left-6 px-2 text-xl md:text-2xl xl:text-5xl bottom-28 font-bold  lg:px-2 xl:px-10  w-[50%] rounded">
              Lifestyle
            </h1>
            <button className=" flex items-center gap-2 absolute bottom-12 text-sm left-6 lg:bottom-18 lg:left-14  hover:text-red-400  text-white underline  lg:text-lg p-2 ">
              view all posts{<NAVIGATE_ARROW_ICON />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlogListing;
