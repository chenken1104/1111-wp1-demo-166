import React from 'react'
import Blog_66 from './Blog_66';
import { useBlogContext_66 } from '../BlogContext_66';

const BlogList_66 = ()  => {
  const {blogs} = useBlogContext_66();
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
