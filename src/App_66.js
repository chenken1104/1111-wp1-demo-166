import React, { useState, useEffect, useContext} from 'react';
import data from './blogData_66'
import Alert_66 from './components/Alert_66'
import BlogList_66 from './components/BlogList_66';

import { useBlogContext_66 } from './BlogContext_66';

const App_66 = () => {
  const { blogs, alert,removeItem, clearBlogs, filterItems,
  showAlert } = useBlogContext_66();
  return (
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
  );
};

export default App_66;
