import React, { useEffect } from "react";
import HeroBlogListing from "./sections/HeroBlogListing";
import FashionBlogs from "./sections/FashionBlogs";
import { useAppDispatch } from "../../redux/store";
import { getAllCategories } from "../../redux/slices/blogCategorySlice";
import { getAllBlogs } from "../../redux/slices/blogsSlice";
import LifestyleBlogs from "./sections/LifestyleBlogs";
import Header from "../../layout/Header";
import SpotlightBlogs from "./sections/SpotlightBlogs";
import Aos from "aos";



const BlogListing: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllCategories());
      await dispatch(getAllBlogs());
      Aos.refresh();
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Header />
      <HeroBlogListing />
      <FashionBlogs />
      <SpotlightBlogs/>
      <LifestyleBlogs />
    </>
  );
};

export default BlogListing;
