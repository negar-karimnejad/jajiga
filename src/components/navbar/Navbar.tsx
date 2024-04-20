import { useEffect, useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';
import WhiteBgNavbar from './WhiteBgNavbar';

function Navbar() {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollYPosition(newScrollYPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(scrollYPosition);

  return (
    <>
      {scrollYPosition > 470 && (
        <div className="container fixed left-0 right-0 top-0 z-50 mx-auto flex w-full items-center justify-between gap-x-3 bg-white py-2 lg:gap-x-10">
          <WhiteBgNavbar />
        </div>
      )}

      <div className="container navbar fixed left-0 right-0 top-0 z-40 mx-auto">
        <div className="flex-1 gap-10">
          <div className="cursor-pointer rounded-full bg-gray-300/50 px-2">
            <NavMenu />
          </div>
          <div className="flex shrink-0 gap-8 text-gray-50 max-md:hidden">
            <NavLinks />
          </div>
        </div>
        <Logo withTitle={true} />
      </div>
    </>
  );
}

export default Navbar;
