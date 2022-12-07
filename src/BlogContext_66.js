import React, { useState, useEffect, useContext} from 'react';
import data from './blogData_66'
import Alert_66 from './components/Alert_66'
import BlogList_66 from './components/BlogList_66';

const BlogContext_66 = React.createContext();

const BlogContextProvider_66 = ({children}) => {
  const [blogs, setBlogs] = useState(data);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  console.log('blogs', blogs);

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs(blogs.filter( (blog) => blog.id !== id));
  }

  const clearBlogs = () => {
    showAlert(true, 'empty all blogs', 'danger');
    setBlogs([]);
  }

  const filterItems = (category) => {
    if(category === 'all') {
      setBlogs(data);
    } else {
      const newBlogs = data.filter( (blog) => blog.category === category); 
      setBlogs(newBlogs);
    }
  }

  return (
    <BlogContext_66.Provider value={{blogs, alert,removeItem,
    clearBlogs, filterItems, showAlert}}>
    {children}
    </BlogContext_66.Provider>
  );
};

const useBlogContext_66 = () => {
  return useContext(BlogContext_66);
}

export { BlogContextProvider_66, useBlogContext_66 };
