import { Link, Outlet } from 'react-router-dom';
import Navbar_xx from '../components/Navbar_xx';

const SharedLayout_xx = () => {
  return (
    <>
      <Navbar_xx />
      <section className='section'>
         <Outlet />
      </section>
    </>

  );
};
export default SharedLayout_xx;
