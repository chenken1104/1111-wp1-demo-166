import React, { useState, useEffect, useContext} from 'react';
import data from './blogData_66'
import Alert_66 from './components/Alert_66'
import BlogList_66 from './components/BlogList_66';

const BlogContext = React.createContext();

const App_66 = () => {
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
    <BlogContext.Provider value={{blogs, alert,
    removeItem, clearBlogs, filterItems, showAlert}}>
    <section className="blogs">
    {alert.show && <Alert_66 {...alert} removeAlert={showAlert} />}
      <div className="section-title">
        <h2>CSS Grid using breakpoints</h2>
      </div>
      <div className="filter-container">
        <button type="button" className="filter-btn" onClick={() => filterItems('all')}>all</button>
        <button type="button" className="filter-btn" onClick={() => filterItems('lifestyle')}>lifestyle</button>
        <button type="button" className="filter-btn" onClick={() => filterItems('travel')}>travel</button>
      </div>
      <div className="blogs-center">
        <BlogList_66 key={1}/>
      </div>
      <button className='clear-btn' onClick={clearBlogs}>
        clear all blogs
      </button>
    </section>
    </BlogContext.Provider>
  );
};

const useBlogContext = () => {
  return useContext(BlogContext);
}

export { App_66, useBlogContext };
