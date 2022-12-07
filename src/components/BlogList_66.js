import React from 'react'
import Blog_66 from './Blog_66';

const BlogList_66 = ({blogs, removeItem})  => {
  return (
    <div className="blogs-center">
        { blogs.map( (blog) => {
           const {id, img, title, desc, category} = blog;
           return (
            <Blog_66 key={id} id={id} img={img} title={title} desc={desc} category={category} removeItem={removeItem}/>
           )
        }) }
      </div>
  )
}

export default BlogList_66
