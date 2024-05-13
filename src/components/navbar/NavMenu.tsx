import { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BiExit, BiSupport } from 'react-icons/bi';
import { BsExclamationSquare } from 'react-icons/bs';
import { CiGift } from 'react-icons/ci';
import { IoIosHeartEmpty } from 'react-icons/io';
import {
  IoBriefcaseOutline,
  IoHomeOutline,
  IoShieldCheckmarkOutline,
  IoWalletOutline,
} from 'react-icons/io5';
import { LiaQuestionCircle } from 'react-icons/lia';
import { MdOutlineAppSettingsAlt, MdRule } from 'react-icons/md';
import {
  PiInstagramLogo,
  PiTelegramLogo,
  PiTwitterLogo,
  PiYoutubeLogo,
} from 'react-icons/pi';
import { TbHomePlus, TbMessageCircleQuestion } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useAuthModal } from '../../hooks/useAuthModal';
import SigningModal from '../auth/SigningModal';
import Button from '../ui/Button';

const navMenuLinks = [
  {
    id: 1,
    title: 'صفحه اصلی',
    icon: <IoHomeOutline />,
    to: '/',
  },
  {
    id: 14,
    title: 'کیف پول',
    icon: <IoWalletOutline />,
    to: '/finance',
  },
  {
    id: 2,
    title: 'علاقه مندی ها',
    icon: <IoIosHeartEmpty />,
    to: '/wishes',
  },
  {
    id: 15,
    title: 'حساب کاربری',
    icon: <AiOutlineUser />,
    to: '/profile',
  },
  {
    id: 3,
    title: 'میزبان شو',
    icon: <TbHomePlus />,
    to: '/host',
  },
  {
    id: 4,
    title: 'پشتیبانی',
    icon: <BiSupport />,
    to: '/support',
  },
  {
    id: 5,
    title: 'سوالات متداول',
    icon: <TbMessageCircleQuestion />,
    to: '/faq',
  },
  {
    id: 6,
    title: 'راهنما',
    icon: <LiaQuestionCircle />,
    to: '/help',
  },
  {
    id: 7,
    title: 'ضمانت تحویل',
    icon: <IoShieldCheckmarkOutline />,
    to: '/guarantee',
  },
  {
    id: 8,
    title: 'قوانین وبسایت',
    icon: <MdRule />,
    to: '/rules',
  },
  {
    id: 10,
    title: 'دعوت از دوستان',
    icon: <CiGift />,
    to: '/invite',
  },
  {
    id: 11,
    title: 'نصب جاجیگا',
    icon: <MdOutlineAppSettingsAlt />,
    to: '/app',
  },
  {
    id: 12,
    title: 'فرصت های شغلی',
    icon: <IoBriefcaseOutline />,
    to: '/jobs',
  },
  {
    id: 13,
    title: 'درباره ما',
    icon: <BsExclamationSquare />,
    to: '/about',
  },
];

function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModalHandler } = useAuthModal();
  const { user, signoutFunc } = useAuth();

  useEffect(() => {
    // Disable body scroll when the modal is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className="flex items-center" onClick={() => setIsMenuOpen(true)}>
        <div className="w-8 rounded-full dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mr-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div className="w-8 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#e6e6e6"
            className="h-9 w-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>

      {/* NavMenue Modal */}
      <div
        className={`fixed right-0 top-0 h-screen w-full bg-black/60 transition-all duration-500 ${isMenuOpen ? 'visible z-50' : 'invisible z-0'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="relative w-[450px] max-[490px]:w-[330px] sm:w-[350px]">
          <Button style="absolute -left-3 top-2 font-vazirBold text-4xl text-white px-0 py-0 hover:shadow-none">
            &times;
          </Button>
          <div
            style={{ direction: 'ltr' }}
            onClick={(e) => e.stopPropagation()}
            className={`absolute top-0 z-50 h-screen w-[420px] overflow-y-scroll rounded-s-xl bg-white pt-3 shadow transition-all duration-500 dark:border-l-4 dark:border-l-gray-800 dark:bg-gray-900 max-[490px]:w-[300px] sm:w-[320px] ${isMenuOpen ? 'right-0' : '-right-[420px]'}`}
          >
            <header
              style={{ direction: 'rtl' }}
              className="flex items-center gap-2 px-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ccc"
                className="h-16 w-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  openModalHandler();
                }}
                style="rounded-full bg-gray-100 px-3 py-2 font-vazirBold text-[12px] text-gray-600 hover:shadow-md hover:bg-gray-300 dark:bg-gray-600 dark:text-white"
              >
                ورود / ثبت نام
              </Button>
            </header>
            <div className="my-3 border-b"></div>
            <ul style={{ direction: 'rtl' }} className="pr-5 text-sm">
              {navMenuLinks.map((item) => {
                if (item.title === 'کیف پول' || item.title === 'حساب کاربری') {
                  return (
                    <>
                      {user && (
                        <li
                          key={item.id}
                          className="rounded-s-full p-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <Link
                            onClick={() => setIsMenuOpen(false)}
                            to={item.to}
                            className="flex items-center gap-4"
                          >
                            <span className="text-lg text-gray-500 dark:text-gray-400">
                              {item.icon}
                            </span>
                            <span className="font-vazirBold text-gray-500 dark:text-gray-400">
                              {item.title}
                            </span>
                          </Link>
                        </li>
                      )}
                    </>
                  );
                } else {
                  return (
                    <li
                      key={item.id}
                      className="rounded-s-full p-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        to={item.to}
                        className="flex items-center gap-4"
                      >
                        <span className="text-lg text-gray-500 dark:text-gray-400">
                          {item.icon}
                        </span>
                        <span className="font-vazirBold text-gray-500 dark:text-gray-400">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  );
                }
              })}
              {user && (
                <li
                  onClick={() => signoutFunc()}
                  className="rounded-s-full p-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Button
                    onClick={() => setIsMenuOpen(false)}
                    style="flex items-center gap-4 px-0 py-0 hover:shadow-none"
                  >
                    <span className="text-lg text-gray-500 dark:text-gray-400">
                      <BiExit />
                    </span>
                    <span className="font-vazirBold text-gray-500 dark:text-gray-400">
                      خروج
                    </span>
                  </Button>
                </li>
              )}
            </ul>
            <div className="px-4 text-gray-500">0.139.7</div>
            <footer className="flex items-center justify-between rounded-t-xl bg-gray-200 px-10 py-3 dark:bg-gray-600">
              <Link target="_blank" to="https://www.aparat.com/jajiga">
                <PiYoutubeLogo
                  size={20}
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-400"
                />
              </Link>
              <Link target="_blank" to="https://twitter.com/jajiga_iran">
                <PiTwitterLogo
                  size={20}
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-400"
                />
              </Link>
              <Link target="_blank" to="https://www.instagram.com/jajiga.iran">
                <PiInstagramLogo
                  size={20}
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-400"
                />
              </Link>
              <Link target="_blank" to="https://t.me/jajiga">
                <PiTelegramLogo
                  size={20}
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-400"
                />
              </Link>
            </footer>
          </div>
        </div>
      </div>

      {/*Signing Modal */}
      <SigningModal />
    </>
  );
}

export default NavMenu;
