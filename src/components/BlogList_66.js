import React from 'react'
import Blog_66 from './Blog_66';
import { useBlogContext } from '../App_66'

const BlogList_66 = ()  => {
  const {blogs} = useBlogContext();
  return (
    <div className="blogs-center">
        { blogs.map( (blog) => {
           const {id, img, title, desc, category} = blog;
           return (
            <Blog_66 key={id} id={id} img={img} title={title} desc={desc} category={category}/>
           )
        }) }
      </div>
  )
}

export default BlogList_66
