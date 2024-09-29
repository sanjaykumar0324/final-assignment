import React from "react";
import { Blog_type } from "../../../utils/type";
import { NAVIGATE_ARROW_ICON } from "../../../utils/constants";
import { findCategoryById } from "../../../utils/utilityFunctions";
import { useAppSelector } from "../../../redux/store";
import { selectBlogCategory } from "../../../utils/selectors";

const BlogSmallCard: React.FC<Blog_type> = (blog) => {
  const categories = useAppSelector(selectBlogCategory);
  const categoryNames = findCategoryById(blog.category, categories);
  return (
    <div>
      <div className="flex md:flex-row flex-col gap-10">
        <img src={blog.image} className="lg:w-[35%]   md:w-[50vw] w-[100vw] rounded-xl" />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p>
              By {blog.author} / in {blog.date}
            </p>
            <p className="text-lg">{<NAVIGATE_ARROW_ICON />}</p>
          </div>
          <h1>{blog.title}</h1>
          <p>{blog.desc}</p>
          <div className="flex gap-10 ">
            {categoryNames.map((item, index) => (
              <button className="px-4  py-1  text-sm bg-slate-300 rounded-md " key={index}>
                     {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSmallCard;
