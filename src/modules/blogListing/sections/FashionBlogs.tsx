import React from "react";
import { useAppSelector } from "../../../redux/store";
import { selectBlogFashion } from "../../../utils/selectors";
import BlogSmallCard from "../components/BlogSmallCard";
import BlogBigCard from "../components/BlogBigCard";

const FashionBlogs: React.FC = () => {
  const fashionBlogs = useAppSelector(selectBlogFashion);
  console.log(fashionBlogs);

  return (
    <div className="min-h-screen flex flex-col justify-center mb-20">
      <div className="container mx-auto flex gap-10 p-4">
        <img src={fashionBlogs.image} className="rounded-full" />

        <h1 className="text-2xl md:text-5xl">{fashionBlogs.title}</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
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
