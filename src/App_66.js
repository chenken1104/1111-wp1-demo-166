import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_66 from './pages/HomePage_66';
import ErrorPage_66 from './pages/ErrorPage_66';
import SharedLayout_66 from './pages/SharedLayout_66';

import P1Page_66 from './pages/P1Page_66';
import P2Page_66 from './pages/P2Page_66';
import P3Page_66 from './pages/P3Page_66';
import P4Page_66 from './pages/P4Page_66';
import P5Page_66 from './pages/P5Page_66';
import P6Page_66 from './pages/P6Page_66';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout_66 />}>
          <Route index element={<HomePage_66 />} />
          <Route path='p1_66' element={<P1Page_66 />}/>
          <Route path='p2_66' element={<P2Page_66 />}/>
          <Route path='p3_66' element={<P3Page_66 />}/>
          <Route path='p4_66' element={<P4Page_66 />}/>
          <Route path='p5_66' element={<P5Page_66 />}/>
          <Route path='p6_66' element={<P6Page_66 />}/>
        </Route>
        <Route path='*' element={<ErrorPage_66 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
