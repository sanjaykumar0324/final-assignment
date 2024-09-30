import React from "react";
import { Blog_type } from "../../../utils/type";
import { NAVIGATE_ARROW_ICON } from "../../../utils/constants";
import { findCategoryById } from "../../../utils/utilityFunctions";
import { useAppSelector } from "../../../redux/store";
import { selectBlogCategory } from "../../../utils/selectors";

const BlogBigCard: React.FC<Blog_type> = (blog) => {
  const categories = useAppSelector(selectBlogCategory);
  const categoryNames = findCategoryById(blog.category, categories);
  return (
      <div className="flext flex-col ">
        <img src={blog.image} className="w-[100vw] xl:w-[80vw] rounded-2xl"/>
        <div className="flex justify-between p-2 gap-4" >
          <p className="font-semibold"> 
            By {blog.author} / in {blog.date}
          </p>
          <p className="text-lg pr-4 ">{<NAVIGATE_ARROW_ICON />}</p>
        </div>
        <div className="flex flex-col gap-4">
            <h1 className="font-bold text-lg">{blog.title}</h1>
            <p>{blog.desc}</p>
        </div>
        <div className="flex gap-10 mt-4 ">
          {categoryNames.map((item, index) => (
            <button className="px-4  py-1  text-sm bg-slate-300 rounded-md " key={index}>
                   {item}
            </button>
          ))}
        </div>
      </div>
  );
};

export default BlogBigCard;
