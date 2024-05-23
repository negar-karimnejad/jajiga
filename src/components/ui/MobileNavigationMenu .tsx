import { useEffect, useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { GoBell } from 'react-icons/go';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../../data/data';
import { useAuth } from '../../hooks/useAuth';
import { useAuthModal } from '../../hooks/useAuthModal';
import useRefHook from '../../hooks/useRefHook';
import Announcements from './Announcements';

function MobileNavigationMenu() {
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const { user } = useAuth();
  const { showModal, isShowNotification, ref } = useRefHook();
  const { openModalHandler } = useAuthModal();

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
      className={`fixed bottom-0 right-0 z-30 h-16 w-full border-t-2 bg-white py-2 transition-all duration-700 dark:border-t-gray-600 dark:bg-gray-950 md:hidden ${isVisible ? 'translate-y-0' : 'translate-y-24'}`}
    >
      <div className="flex items-center">
        {user ? (
          <button
            className={`flex flex-1 flex-col items-center justify-center gap-1 transition-all hover:text-red-600 dark:text-white dark:hover:text-red-600`}
            onClick={showModal}
          >
            <GoBell size={25} />
            <span className="font-vazirMedium text-[13px]">اعلانات</span>
            <div
              ref={ref}
              className={`absolute bottom-0 right-0 z-20 w-full rounded-t-lg border bg-white p-4 shadow-lg transition-all duration-500 dark:border-none dark:bg-gray-800 ${isShowNotification ? 'visible translate-y-0' : 'invisible translate-y-80'}`}
            >
              <Announcements />
            </div>
          </button>
        ) : (
          <button
            className={`flex flex-1 flex-col items-center justify-center gap-1 transition-all hover:text-red-600 dark:text-white dark:hover:text-red-600`}
            onClick={openModalHandler}
          >
            <BiUser size={25} />
            <span className="font-vazirMedium text-[13px]">ورود / ثبت نام</span>
          </button>
        )}
        {navigationLinks.map((link) =>
          link.title ? (
            <Link
              key={link.id}
              to={link.to}
              className={`flex flex-1 flex-col items-center justify-center gap-1 transition-all hover:text-red-600 dark:text-white dark:hover:text-red-600 ${location.pathname === link.to ? 'border-b-4 border-b-red-600 text-red-600 dark:border-b-red-600 dark:text-red-600' : ''}`}
            >
              <span>{link.icon}</span>
              <span className="font-vazirMedium text-[13px]">{link.title}</span>
            </Link>
          ) : (
            <div className="flex flex-col  items-center justify-center gap-1 transition-all hover:text-red-600 dark:text-white dark:hover:text-red-600">
              <span>{link.icon}</span>
              <span className="font-vazirMedium text-[13px]">
                {link?.title}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default MobileNavigationMenu;
