import React from "react";
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
    <div className="min-h-screen">
      <div className="px-2 py-4 lg:px-6 xl:px-10 lg:py-4 grid  grid-cols-1 lg:grid-cols-[65%_35%] gap-4">
        <div className="lg:col-span-1 relative h-[50vh] lg:h-[90vh]">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url(${BLOG_HERO_IMAGE})` }}
          ></div>

          <div className="absolute bottom-28 lg:px-2 xl:px-20">
            <h1
              className=" text-white px-2 text-lg md:text-2xl xl:text-5xl  font-bold    w-[50%] rounded"
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-easing="linear"
            >
              {BLOG_HERO_TITLE}
            </h1>
            <div className="flex gap-4 mt-4 px-4">
              <button
                className="text-white text-lg"
                data-aos="fade-up-right"
                data-aos-duration="300"
                data-aos-easing="linear"
              >
                Admin
              </button>
              <button
                className="text-xl   hover:bg-red-300 text-white rounded-full lg:text-2xl p-2 border border-gray-500"
                data-aos="fade-up-left"
                data-aos-duration="300"
                data-aos-delay="100"

                data-aos-easing="linear"
              >
                {<NAVIGATE_ARROW_ICON />}{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 flex flex-col gap-4 ">
          <div
            className="bg-[#BDE48A]   p-4 xl:px-10 max-md:h-[40vh]  md:h-[40vh] lg:h-[30vh]   rounded-xl"
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-delay="100"

            data-aos-easing="linear"
          >
            <div className="flex justify-end ">
              <p className="text-2xl text-end p-2 border border-black rounded-full ">
                {<BLOG_SPARK_ICON />}
              </p>
            </div>
            <div className="flex flex-col h-[100%] justify-center gap-2">
              <p className="font-bold">Design</p>
              <p className="">{BLOG_HERO_DESIGN}</p>
              <p className="flex items-center gap-2 underline hover:text-red-300">
                Read More <NAVIGATE_ARROW_ICON />
              </p>
            </div>
          </div>
          <div
            className="h-[40vh] relative lg:h-[58vh] bg-red-300 rounded-2xl "
            data-aos="fade-up-left"
            data-aos-duration="500"
            data-aos-easing="linear"
            data-aos-delay="300"
          >
            <div
              className="absolute inset-0 bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `url(${FEATURED_CATEGORIES_IMAGE})` }}
            ></div>

            <h1 className="absolute text-white left-6 px-2 text-xl md:text-2xl xl:text-5xl bottom-28 font-bold  lg:px-2 xl:px-10  w-[50%] rounded">
              Lifestyle
            </h1>
            <button className=" flex items-center gap-2 absolute bottom-12 text-sm left-6 lg:bottom-18 lg:left-14  hover:text-red-300  text-white underline  lg:text-lg p-2 ">
              view all posts{<NAVIGATE_ARROW_ICON />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlogListing;
