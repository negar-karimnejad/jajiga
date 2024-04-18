import Logo from './Logo';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';

function Navbar() {
  return (
    <div className="container navbar fixed top-0 z-50">
      <div className="flex-1 gap-10">
        <div className="cursor-pointer rounded-full bg-gray-300/50 px-2">
          <NavMenu />
        </div>
        <NavLinks />
      </div>
      {/* <NavSearch /> */}
      <Logo withTitle={true} />
    </div>
  );
}

export default Navbar;
