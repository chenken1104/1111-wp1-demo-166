import React,{Component} from 'react';
import { useState } from 'react';
import { useMenuContext_66 } from './MenuContext';
import Category_66 from './components/Category_66';
import Menu_66 from './components/Menu_66';
import items from './data';

const allCategories = ['all', 'breakfast', 'lunch', 'shakes', '89'];

const App_66 = () => {
  const {menuItems, filterItems, 
  categories} = useMenuContext_66()


  return (
    <section className="menu">
    {/* title */}
    <div className="title">
      <h2>our menu 208410166</h2>
      <div className="underline"></div>
    </div>
    {/* filter buttons */}
    <Category_66 categories={categories} filterItems={filterItems}/>
    {/*menu items*/}
    <Menu_66 items={menuItems}/>
      
       {/* javascript */}
    <script src="app.js"></script>
    </section>
  );
};

export default App_66;
