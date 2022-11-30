const Product_66 = ({ id, img, title, desc}) => {
  return (
    <>
    <div className="single-product" key={id}>
      <img 
       src={img} 
       className="single-product-img img" 
       alt="utopia sofa" />
      <footer>
        <h5 className="name">{title}</h5>
        <span className="price">{desc}</span>
      </footer>
    </div>
    </>
  );
};
export default Product_66;
