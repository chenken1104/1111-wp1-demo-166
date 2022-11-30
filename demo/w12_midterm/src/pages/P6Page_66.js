import { useEffect, useState } from "react";
import Product_66 from "../components/Product_66";
import midterm_data_66 from "../midterm_data_66";
import Alert_66 from "../components/Alert_66";
const P6Page_66 = () => {
  const [searchName, setSearchName] = useState("");
  const [products, setProducts] = useState(midterm_data_66);

  console.log("products", products);

  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  useEffect(() => {
    const filterProducts = midterm_data_66.filter((product) => 
      product.title.toLowerCase().includes(searchName.toLowerCase())
    );
    setProducts(filterProducts);
  }, [searchName]);

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const filterItems = (category) => {
    if (category === "all") {
      setProducts(midterm_data_66);
    } else {
      const newProducts = midterm_data_66.filter(
        (product) => product.category === category
      );
      setProducts(newProducts);
    }
  };

  const clearAllProducts = () => {
    showAlert(true, "all products deleted", "danger");
    setProducts([]);
  };

  const fetchAllProducts = () => {
    // showAlert(true, 'empty list', 'danger');
    setProducts(midterm_data_66);
  };

  return (
    <>
      <section className="main-section">
        <div className="filter-left">
          <div className="left-content">
            <form className="input-form-btn">
              <input
                type="text"
                className="search-input"
                placeholder="search..."
                value={searchName}
                onChange={(e) => {
                  setSearchName(e.target.value);
                }}
              />
            </form>
            <h4>Company</h4>
            <article className="companies">
              <button
                className="company-btn"
                onClick={() => filterItems("All")}
              >
                all
              </button>
              <button
                className="company-btn"
                onClick={() => filterItems("Ikea")}
              >
                ikea
              </button>
              <button
                className="company-btn"
                onClick={() => filterItems("Marcos")}
              >
                marcos
              </button>
              <button
                className="company-btn"
                onClick={() => filterItems("Caressa")}
              >
                caressa
              </button>
              <button className="clear-btn" onClick={clearAllProducts}>
            clear All
          </button>
          <button className="fetch-btn" onClick={fetchAllProducts}>
            Fetch All
          </button>
          </article>
        </div>
        </div>
        {alert.show && <Alert_66 {...alert} removeAlert={showAlert}/>}
        <div className="products-right">
          <div className="products-container">
            {products.map((product) => {
              const { id, img, title, desc } = product;
              return (
                <Product_66 key={id} img={img} title={title} desc={desc} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default P6Page_66;
