import { Link } from 'react-router-dom';

const Navbar_xx = () => {
  return (
    <nav className='navbar'>
      <div>
        <h4>陳裕坤 -- 208410166</h4>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/p1_66'>P1_66</Link>
        <Link to='/p2_66'>P2_66</Link>
        <Link to='/p3_66'>P3_66</Link>
        <Link to='/p4_66'>P4_66</Link>
        <Link to='/p5_66'>P5_66</Link>
        <Link to='/p6_66'>P6_66</Link>
      </div>
    </nav>
  );
};

export default Navbar_xx;
