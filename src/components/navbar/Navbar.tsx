import Logo from './Logo';
import NavMenu from './NavMenu';
import NavSearch from './NavSearch';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <NavMenu />
      <NavSearch />
      <Logo />
    </div>
  );
}

export default Navbar;
