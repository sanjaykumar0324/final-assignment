import React from 'react';
import { useAppSelector } from '../../../redux/store';
import { selectBlogLifestyle } from '../../../utils/selectors';
import BlogSmallCard from '../components/BlogSmallCard';
import BlogBigCard from '../components/BlogBigCard';

const LifestyleBlogs: React.FC = () => {
  const lifestyleBlogs = useAppSelector(selectBlogLifestyle);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {lifestyleBlogs.length > 0 && (
          <div className="col-span-1">
            <BlogBigCard {...lifestyleBlogs[0]} />
          </div>
        )}
        <div className="col-span-1 grid grid-cols-1 gap-4">
          {lifestyleBlogs.slice(1).map((blog) => (
            <BlogSmallCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifestyleBlogs;
