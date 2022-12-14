import React from 'react';

const Catetgory_66 = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
          { categories.map((category, index) => {
              return (
                <button key={index} type="button" className="filter-btn" onClick={() => filterItems(category) }>{category}</button>
              )
          })}
    </div>
  );
};

export default Catetgory_66;
