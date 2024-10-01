import React, { useEffect, useRef, useState } from "react";
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

  const absoluteContentRef = useRef<HTMLDivElement>(null);
  const [absoluteHeight, setAbsoluteHeight] = useState(0);

  useEffect(() => {
    if (absoluteContentRef.current) {
      setAbsoluteHeight(absoluteContentRef.current.offsetHeight);
    }
  }, [firstSpotlight]);

  return (
    <div className="flex flex-col gap-5 mt-20">
      <h1
        className="text-2xl md:text-5xl text-center"
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
              <img
                src={firstSpotlight.image}
                className="xl:w-[74vw] lg:w-[100%] lg:px-6 md:px-3 px-2 rounded-xl"
              />
              <div
                ref={absoluteContentRef}
                className="absolute flex flex-col left-1/2 transform -translate-x-1/2 -bottom-36 md:-bottom-24 lg:-bottom-28 xl:-bottom-16 bg-white rounded-2xl w-[90%] lg:w-3/4 gap-4 px-4 md:px-10 md:py-10 lg:px-16 lg:py-16 py-4"
              >
                <p className="font-semibold">
                  By {firstSpotlight.author} / {firstSpotlight.date}
                </p>
                <h1 className="text-sm lg:text-lg font-bold">
                  {firstSpotlight.title}
                </h1>
                <p>{firstSpotlight.desc}</p>
                <div className="flex gap-10">
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

        <div style={{ paddingTop: absoluteHeight }}>
          <div className="grid grid-cols-1 md:grid-cols-1 md:px-3 px-3 lg:px-6 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:px-28 p-2">
            {spotlightBlogs.posts.slice(1).map((blog) => (
              <BlogSpotlightCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightBlogs;
