import { useEffect, useState } from 'react';
import { BsHouseAdd } from 'react-icons/bs';
import { GoBell, GoHeart } from 'react-icons/go';
import { PiHouseLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const navigationLinks = [
  { id: 1, icon: <GoBell size={25} />, title: 'اعلانات', to: '' },
  { id: 2, icon: <BsHouseAdd size={25} />, title: 'میزبان شوید', to: '/host' },
  { id: 3, icon: <GoHeart size={25} />, title: 'علاقه مندی ها', to: '/wishes' },
  { id: 4, icon: <PiHouseLight size={25} />, title: 'صفحه اصلی', to: '/' },
];

function MobileNavigationMenu() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setIsVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed bottom-0 right-0 z-30 h-16 w-full border-t-2 bg-white p-2 transition-all duration-700 dark:border-t-gray-600 dark:bg-gray-950 md:hidden ${isVisible ? 'translate-y-0' : 'translate-y-20'}`}
    >
      <div className="flex items-center justify-around">
        {navigationLinks.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            className="flex flex-col items-center justify-center gap-1 transition-all hover:text-red-600 dark:text-white dark:hover:text-red-600"
          >
            <span>{link.icon}</span>
            <span className="font-vazirMedium text-[13px]">{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNavigationMenu;
