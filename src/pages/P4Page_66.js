import { useState } from 'react';
import Product_66 from '../components/Product_66';
import midterm_data_66 from '../midterm_data_66';

const P4Page_66 = () => {
  const [products, setProducts] = useState(midterm_data_66);
  console.log('products', products);

  const filterItems = (category) => {
    if (category == 'all' ) {
      setProducts(midterm_data_66);
    } else {
      const newProducts = midterm_data_66.filter(
        (product) => product.category === category
      );
      setProducts(newProducts);
    }
  };
  
  return (
    <>
    <section className="main-section">
      <div className="filter-left">
        <div className="left-content">
          <form className="input-form">
            <input type="text" className="search-input" placeholder="search..." />
          </form>
          <h4>Company</h4>
          <article className="companies">
            <button className="company-btn"
            onClick={() => filterItems("all")}>all</button>
            <button className="company-btn"
            onClick={() => filterItems("Ikea")}>ikea</button>
            <button className="company-btn"
            onClick={() => filterItems("Marcos")}>marcos</button>
            <button className="company-btn"
            onClick={() => filterItems("Caressa")}>caressa</button>
          </article>
        </div>
      </div>
      <div className="products-right">
        <div className="products-container">
          {products.map((product) => {
            const {id, img, category, title, desc} = product;
            return (
              <Product_66 key={id} img={img} category={category} title={title} desc={desc}/>
            )
          })}
        </div>
      </div>
    </section>
    </>
  );
};
export default P4Page_66;
