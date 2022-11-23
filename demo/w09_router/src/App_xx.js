import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_xx from './pages/HomePage_xx';
import AboutPage_xx from './pages/AboutPage_xx';
import ProductsPage_xx from './pages/ProductsPage_xx';
import ErrorPage_xx from './pages/ErrorPage_xx';
import SharedLayout_xx from './pages/SharedLayout_xx'
import SharedProductLayout_xx from './pages/SharedProductLayout_xx';
import SingleProductPage_xx from './pages/SingleProductPage_xx';
import BooklistPage_xx from './pages/BooklistPage_xx';

function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout_xx />}>
            <Route index element={<HomePage_xx />} />
            <Route path='about' element={<AboutPage_xx />}/>
            <Route path='products' element ={<SharedProductLayout_xx />} >
               <Route index element={<ProductsPage_xx />} />
               <Route path=":productId"  element={<SingleProductPage_xx />}/>
             </Route>
             <Route path="booklist" element={<BooklistPage_xx />} />
            <Route path='*' element={<ErrorPage_xx />}/>
          </Route>  
        </Routes>
     </BrowserRouter>
  );
}

export default App;