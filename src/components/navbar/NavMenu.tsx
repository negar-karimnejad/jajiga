import { useEffect, useState } from 'react';
import { BiExit } from 'react-icons/bi';
import {
  PiInstagramLogo,
  PiTelegramLogo,
  PiTwitterLogo,
  PiYoutubeLogo,
} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { mobileNavMenuLinks } from '../../data/data';
import { useAuth } from '../../hooks/useAuth';
import { useAuthModal } from '../../hooks/useAuthModal';
import useTrips from '../../hooks/useTrips';
import Button from '../ui/Button';

function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModalHandler } = useAuthModal();
  const { user, signoutFunc } = useAuth();
  const { trips } = useTrips();

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
        className={`fixed right-0 top-0 z-50 h-screen w-full bg-black/60 transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="relative w-[450px] max-[490px]:w-[330px] sm:w-[350px]">
          <Button
            style={`absolute font-vazirBold text-4xl text-white px-0 py-0 duration-700 transition-all hover:shadow-none left-0 ${isMenuOpen ? 'top-2' : '-top-10'}`}
          >
            &times;
          </Button>
          <div
            style={{ direction: 'ltr' }}
            onClick={(e) => e.stopPropagation()}
            className={`absolute top-0 z-50 flex h-[46.5rem] w-[420px] flex-col justify-between rounded-s-xl bg-white pt-5 shadow transition-all duration-500 dark:border-l-4 dark:border-l-gray-800 dark:bg-gray-900 max-[490px]:w-[300px] sm:w-[320px] ${isMenuOpen ? 'right-0' : '-right-[420px]'}`}
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
                className="h-14 w-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              {!user ? (
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    openModalHandler();
                  }}
                  style="rounded-full bg-gray-100 px-3 py-2 font-vazirBold text-[12px] text-gray-600 hover:shadow-md hover:bg-gray-300 dark:bg-gray-600 dark:text-white"
                >
                  ورود / ثبت نام
                </Button>
              ) : (
                <div>
                  <div className="mb-2 mr-2 text-gray-600 dark:text-gray-300">
                    {user.user_metadata.fullname}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to="/profile"
                      className="rounded-full bg-gray-100 px-2 py-1.5 text-center text-[10px] text-gray-600 hover:bg-gray-300 hover:shadow-md dark:bg-gray-600 dark:text-white"
                    >
                      ویرایش حساب کاربری
                    </Link>
                    {user.user_metadata.role === 'admin' && (
                      <Link
                        to="/admin-p"
                        className="rounded-full bg-yellow-300 px-2 py-1.5 text-center text-[10px] text-gray-600 hover:bg-yellow-400 hover:shadow-md"
                      >
                        پنل مدیریت
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </header>
            <div className="border-b my-1"></div>
            <ul style={{ direction: 'rtl' }} className="pr-5 text-sm overflow-y-scroll h-[32rem]">
              {mobileNavMenuLinks.map((item) => {
                if (
                  item.title === 'کیف پول' ||
                  item.title === 'سفرها' ||
                  item.title === 'حساب کاربری'
                ) {
                  return (
                    <div key={item.id}>
                      {user && (
                        <li className="relative rounded-s-full p-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
                          <Link
                            onClick={() => setIsMenuOpen(false)}
                            to={item.to}
                            className="flex items-center gap-4"
                          >
                            <span className="text-lg text-gray-500 dark:text-gray-200">
                              {item.icon}
                            </span>
                            <span className="font-vazirBold text-gray-500 dark:text-gray-200">
                              {item.title}
                            </span>
                          </Link>
                          {item.title === 'سفرها' && trips.length > 0 && (
                            <div className="absolute bottom-0 left-5 top-0 m-auto flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 pt-1 font-persianNums dark:text-gray-950">
                              {trips.length}
                            </div>
                          )}
                        </li>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <li
                      key={item.id}
                      className="relative rounded-s-full p-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        to={item.to}
                        className="flex items-center gap-4"
                      >
                        <span className="text-lg text-gray-500 dark:text-gray-200">
                          {item.icon}
                        </span>
                        <span className="font-vazirBold text-gray-500 dark:text-gray-200">
                          {item.title}
                        </span>
                      </Link>
                      {item.title === 'فرصت های شغلی' && (
                        <div className="absolute bottom-0 left-5 top-0 m-auto flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 pt-1 font-persianNums dark:text-gray-950">
                          7
                        </div>
                      )}
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
                    <span className="text-lg text-gray-500 dark:text-gray-200">
                      <BiExit />
                    </span>
                    <span className="font-vazirBold text-gray-500 dark:text-gray-200">
                      خروج
                    </span>
                  </Button>
                </li>
              )}
            </ul>
            <div className="px-4 text-gray-500">0.139.7</div>
            <footer className="flex items-center justify-between rounded-t-xl bg-gray-200 px-10 py-3 dark:bg-gray-400">
              <Link target="_blank" to="https://www.aparat.com/jajiga">
                <PiYoutubeLogo
                  size={20}
                  className="text-gray-500 transition-all hover:text-gray-900 dark:text-gray-900 dark:hover:text-white"
                />
              </Link>
              <Link target="_blank" to="https://twitter.com/jajiga_iran">
                <PiTwitterLogo
                  size={20}
                  className="text-gray-500 transition-all hover:text-gray-900 dark:text-gray-900 dark:hover:text-white"
                />
              </Link>
              <Link target="_blank" to="https://www.instagram.com/jajiga.iran">
                <PiInstagramLogo
                  size={20}
                  className="text-gray-500 transition-all hover:text-gray-900 dark:text-gray-900 dark:hover:text-white"
                />
              </Link>
              <Link target="_blank" to="https://t.me/jajiga">
                <PiTelegramLogo
                  size={20}
                  className="text-gray-500 transition-all hover:text-gray-900 dark:text-gray-900 dark:hover:text-white"
                />
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavMenu;
