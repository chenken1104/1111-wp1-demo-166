import { useState } from "react";
import midterm_data_66 from "../midterm_data_66";

const P2Page_66 = () => {
  const [products, setProducts] = useState(midterm_data_66);
  console.log("products", products);
  return (
    <>
      <section className="main-section">
        <div className="filter-left">
          <div className="left-content-btn">
            <form className="input-form-btn">
              <input
                type="text"
                className="search-input"
                placeholder="search..."
              />
            </form>
            <h4>Company</h4>
            <article className="companies">
              <button className="company-btn">all</button>
              <button className="company-btn">ikea</button>
              <button className="company-btn">marcos</button>
              <button className="company-btn">caressa</button>
            </article>
          </div>
        </div>
        <div className="products-right">
          <div className="products-container">
            {products.map((product) => {
              const { id, img, title, desc } = product;
              return (
                <div className="single-product" key={id}>
                  <img
                    src={img}
                    className="single-product-img img"
                    alt="albany table"
                  />
                  <footer>
                    <h5 className="name">{title}</h5>
                    <span className="price">{desc}</span>
                  </footer>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default P2Page_66;
