import React from 'react';

import { useGlobalContext_66 } from './Context_66';

// components
import Navbar_66 from './components/Navbar_66';
import CartContainer_66 from './components/CartContainer_66';
// items

const App_66 = () => {
  const { loading, cart } = useGlobalContext_66();
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  return (
    <main>
      <Navbar_66 />
      <CartContainer_66 />
    </main>
  );
};

export default App_66;
