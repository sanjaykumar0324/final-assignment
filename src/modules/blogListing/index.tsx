import React, { useEffect } from "react";
import HeroBlogListing from "./sections/HeroBlogListing";
import FashionBlogs from "./sections/FashionBlogs";
import { useAppDispatch } from "../../redux/store";
import { getAllCategories } from "../../redux/slices/blogCategorySlice";
import { getAllBlogs } from "../../redux/slices/blogsSlice";
import LifestyleBlogs from "./sections/LifestyleBlogs";
import Header from "../../layout/Header";
import TravelAndCultureBlogs from "./sections/TravelAndCultureBlogs";

const BlogListing: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllBlogs());
  }, []);

  return (
    <>
    <Header/>
      <HeroBlogListing />

      <FashionBlogs />
      <TravelAndCultureBlogs/>

      <LifestyleBlogs />
    </>
  );
};

export default BlogListing;
