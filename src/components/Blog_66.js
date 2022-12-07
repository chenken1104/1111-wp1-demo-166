import React from 'react'
import { useBlogContext_66 } from '../BlogContext_66';

const Blog_66 = ({id, img, title, desc, category}) => {
  const {removeItem} = useBlogContext_66();
  return (
    <article className="blog">
    <img
      src={img}
      alt="Coffee photo"
      className="img blog-img"
    />
    <div className="blog-content">
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="item-control">
        <a href="#">read more</a>
        <div className='btn-container'>
          <button type='button' className='delete-btn' onClick={ () => removeItem(id)}> delete </button>
        </div>
      </div>
    </div>
  </article>
  )
}

export default Blog_66
