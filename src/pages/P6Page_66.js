import { useEffect, useState } from 'react';
import Product_66 from '../components/Product_66';
import midterm_data_66 from '../midterm_data_66';

const P6Page_66 = () => {
  const [searchName, setSearchName] = useState('');
  const [products, setProducts] = useState(midterm_data_66);

  console.log('products', products);

  return (
    <>
      <h2>P6Page_xx</h2>
    </>
  );
};
export default P6Page_66;
