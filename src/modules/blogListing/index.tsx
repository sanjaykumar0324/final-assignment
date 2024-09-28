import React from 'react'
import HeroBlogListing from './sections/HeroBlogListing'
import TravelAndCultureBlogs from './sections/TravelAndCultureBlogs'
import FashionBlogs from './sections/FashionBlogs'
import HeroCard from './components/HeroCard'

const BlogListing :React.FC = () => {
  return (
    <>
    <HeroBlogListing/>
    <HeroCard/>
    <FashionBlogs/>

    <TravelAndCultureBlogs/>

    </>
  )
}

export default BlogListing