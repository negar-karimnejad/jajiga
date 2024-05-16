import WhiteBgNavbar from './WhiteBgNavbar';

function Navbar({ scrollYPosition }: { scrollYPosition?: number }) {
  return (
    <div
      className={`${scrollYPosition !==undefined ? (scrollYPosition > 250 ? 'translate-y-0' : '-translate-y-20') : ''} sticky top-0 z-40 transition-all duration-500`}
    >
      <div className="w-full border-b bg-white py-2 dark:border-0 dark:bg-gray-700 lg:gap-x-10">
        <div className="container flex items-center justify-between gap-x-3">
          <WhiteBgNavbar />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
