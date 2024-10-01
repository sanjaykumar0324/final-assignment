import React from "react";
import { useAppSelector } from "../../../redux/store";
import {
  selectBlogCategory,
  selectBlogSpotlight,
} from "../../../utils/selectors";
import BlogSpotlightCard from "../components/BlogSpotlightCard";
import { findCategoryById } from "../../../utils/utilityFunctions";


const SpotlightBlogs: React.FC = () => {
  const spotlightBlogs = useAppSelector(selectBlogSpotlight);
  const firstSpotlight = spotlightBlogs.posts[0];

  const categories = useAppSelector(selectBlogCategory);
  const categoryNames =
    firstSpotlight && firstSpotlight.category
      ? findCategoryById(firstSpotlight.category, categories)
      : [];
      
      

  return (
    <div className=" flex flex-col gap-5 mt-20">
      <h1
        className="text-2xl md:text-5xl text-center "
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-easing="linear"
      >
        {spotlightBlogs.title}
      </h1>
      <div className="container mx-auto">
        {firstSpotlight ? (
          <div className="flex justify-center px-2">
            <div className="relative rounded-xl bg-opacity-50">
              <img src={firstSpotlight.image} className="w-full rounded-xl" />
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-36 md:-bottom-24 lg:-bottom-28 xl:-bottom-16 bg-white rounded-2xl w-[90%] lg:w-3/4 gap-4 lg:px-10 p-6 md:p-6 lg:py-10">
                <div >
                  <p className="font-semibold text-sm">
                    By {firstSpotlight.author} / {firstSpotlight.date}
                  </p>
                  <h1 className="text-sm md:text-lg font-bold">
                    {firstSpotlight.title}
                  </h1>
                  <p>{firstSpotlight.desc}</p>
                </div>
                <div className="flex gap-10 mt-2">
                  {categoryNames.map((item, index) => (
                    <button
                      className="px-4 py-1 text-sm bg-slate-300 rounded-md"
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>No spotlight blogs available.</p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-2 mt-44">
          {spotlightBlogs.posts.slice(1).map((blog) => (
            <BlogSpotlightCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpotlightBlogs;