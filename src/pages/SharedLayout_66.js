import { Outlet } from 'react-router-dom';
import Navbar_66 from '../components/Navbar_66';

const SharedLayout_66 = () => {
  return (
    <>
      <Navbar_66 />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout_66;
