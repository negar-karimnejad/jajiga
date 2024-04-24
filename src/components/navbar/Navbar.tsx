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

  return (
    <>
      {scrollYPosition > 470 && (
        <div className="fixed left-0 right-0 top-0 z-50 mx-auto w-full border-b bg-white py-2 dark:border-0 dark:bg-gray-700 lg:gap-x-10">
          <div className="container flex items-center justify-between gap-x-3">
            <WhiteBgNavbar />
          </div>
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
        {scrollYPosition < 470 && <Logo withTitle={true} />}
      </div>
    </>
  );
}

export default Navbar;
