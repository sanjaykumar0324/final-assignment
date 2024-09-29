import React from 'react'
import { Blog_type } from '../../../utils/type'
import { useAppSelector } from '../../../redux/store';
import { findCategoryById } from '../../../utils/utilityFunctions';
import { selectBlogCategory } from '../../../utils/selectors';
import { NAVIGATE_ARROW_ICON } from '../../../utils/constants';

const BlogSpotlightCard :React.FC<Blog_type>= (blog) => {
    const categories = useAppSelector(selectBlogCategory);
    const categoryNames = findCategoryById(blog.category, categories);
  return (
    <div>
        <div className='flex flex-col '>
            <img src={blog.image} className='rounded-xl lg:rounded-2xl' />
            <div className='p-2'>
              <div className='flex justify-between'>
                <p>By{blog.author} / {blog.date}</p>
                <p className="text-lg">{<NAVIGATE_ARROW_ICON />}</p>
              </div>

              <h1>{blog.title}</h1>
              <p>{blog.desc}</p>
              <div className="flex gap-10 ">
            </div>
          <div className='flex gap-10 mt-4'>
            {categoryNames.map((item, index) => (
              <button className="px-4  py-1  text-sm bg-slate-300 rounded-md " key={index}>
                     {item}
              </button>
            ))}
          </div>
        </div>
        </div>
    </div>
  )
}

export default BlogSpotlightCard