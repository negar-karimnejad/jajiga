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
      className={`fixed bottom-0 right-0 z-30 h-16 w-full border-t-2 bg-white py-2 transition-all duration-700 dark:border-t-gray-600 dark:bg-gray-950 md:hidden ${isVisible ? 'translate-y-0' : 'translate-y-32'}`}
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
            <div
              key={link.id}
              className="flex flex-col  items-center justify-center gap-1 transition-all hover:text-red-600 dark:text-white dark:hover:text-red-600"
            >
              <span>{link.icon}</span>
              <span className="font-vazirMedium text-[13px]">
                {link?.title}
              </span>
            </div>
          ),
        )}
      </div>
      {location.pathname !== '/support' && (
        <Link
          to="/support"
          className="absolute bottom-20 left-4 h-10 w-10 cursor-pointer rounded-full border-2 border-gray-300 bg-white p-1 dark:border-gray-500 dark:bg-gray-800"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 17H18C17.448 17 17 16.552 17 16V11C17 10.448 17.448 10 18 10H19C20.105 10 21 10.895 21 12V15C21 16.105 20.105 17 19 17Z"
              fill="#F0C807"
              stroke="#323232"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dark:stroke-white"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 17H5C3.895 17 3 16.105 3 15V12C3 10.895 3.895 10 5 10H6C6.552 10 7 10.448 7 11V16C7 16.552 6.552 17 6 17Z"
              fill="#F0C807"
              stroke="#323232"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dark:stroke-white"
            ></path>
            <path
              d="M18.5 10V9.5C18.5 5.91 15.59 3 12 3V3C8.41 3 5.5 5.91 5.5 9.5V10"
              stroke="#252525"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dark:stroke-white"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.625 21.25H11.375C10.685 21.25 10.125 20.69 10.125 20C10.125 19.31 10.685 18.75 11.375 18.75H12.625C13.315 18.75 13.875 19.31 13.875 20C13.875 20.69 13.315 21.25 12.625 21.25Z"
              fill="#F0C807"
              stroke="#323232"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dark:stroke-white"
            ></path>
            <path
              d="M13.875 20H16C17.105 20 18 19.105 18 18V17"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dark:stroke-white"
            ></path>
          </svg>
        </Link>
      )}
    </div>
  );
}

export default MobileNavigationMenu;
