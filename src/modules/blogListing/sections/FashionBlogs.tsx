import React from "react";
import { useAppSelector } from "../../../redux/store";
import { selectBlogFashion } from "../../../utils/selectors";
import BlogSmallCard from "../components/BlogSmallCard";
import BlogBigCard from "../components/BlogBigCard";

const FashionBlogs: React.FC = () => {
  const fashionBlogs = useAppSelector(selectBlogFashion);
  console.log(fashionBlogs);

  return (
    <div className=" flex flex-col justify-center ">
      <div className="container mx-auto flex gap-10 p-4 xl:px-28">
      <div
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-easing="linear"
        >
          <img
            src={fashionBlogs.image}
            className="rounded-full"
            alt="Lifestyle"
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="300"
          data-aos-easing="linear"
        >
          <h1 className="text-2xl md:text-5xl">{fashionBlogs.title}</h1>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4 p-4 xl:px-28">
        {fashionBlogs.posts.length > 0 && (
          <div className="col-span-1">
            <BlogBigCard {...fashionBlogs.posts[0]} />
          </div>
        )}
        <div className="col-span-1 grid grid-cols-1 gap-4">
          {fashionBlogs.posts.slice(1).map((blog) => (
            <BlogSmallCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FashionBlogs;
