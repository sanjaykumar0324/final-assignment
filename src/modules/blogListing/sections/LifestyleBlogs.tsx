import React, { useEffect } from "react";
import { useAppSelector } from "../../../redux/store";
import { selectBlogLifestyle } from "../../../utils/selectors";
import BlogSmallCard from "../components/BlogSmallCard";
import BlogBigCard from "../components/BlogBigCard";

const LifestyleBlogs: React.FC = () => {
  const lifestyleBlogs = useAppSelector(selectBlogLifestyle);
  useEffect(()=>{
      console.log("life")
  },[])

  return (
    <div className="flex flex-col justify-center mt-20">
      <div className="container mx-auto flex  gap-10 p-4">
        <div
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-easing="linear"
          
        >
          <img
            src={lifestyleBlogs.image}
            className="rounded-full"
            alt="Lifestyle"
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="300"
          data-aos-easing="linear"
        >
          <h1 className="text-2xl md:text-5xl">{lifestyleBlogs.title}</h1>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {lifestyleBlogs.posts.length > 0 && (
          <div className="col-span-1">
            <BlogBigCard {...lifestyleBlogs.posts[0]} />
          </div>
        )}
        <div className="col-span-1 grid grid-cols-1 gap-4">
          {lifestyleBlogs.posts.slice(1).map((blog) => (
            <BlogSmallCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifestyleBlogs;
