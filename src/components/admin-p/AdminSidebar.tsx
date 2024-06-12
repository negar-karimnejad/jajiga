import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { adminPMenus } from '../../data/data';
import { useAuth } from '../../hooks/useAuth';
import Logo from '../navbar/Logo';

function AdminSidebar({
  isPushMenu,
  closeMenu,
}: {
  isPushMenu: boolean;
  closeMenu: () => void;
}) {
  const { user } = useAuth();
  const location = useLocation();

  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div
        onClick={() => closeMenu()}
        className={`fixed right-0 top-0 z-50 h-screen w-full ${isPushMenu ? 'visible' : 'invisible'}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-28 z-40 w-72 overflow-hidden rounded-lg border bg-white shadow-lg shadow-gray-500 transition-all duration-500 dark:bg-gray-800 md:hidden ${isPushMenu ? 'right-3' : '-right-96'}`}
        >
          <div className="p-5">
            <ul className="my-4 flex flex-col gap-7 text-base">
              {adminPMenus.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setActiveItem(item.to);
                    closeMenu();
                  }}
                  className={`transition-all hover:text-violet-500 dark:hover:text-violet-500 ${activeItem === item.to ? 'text-violet-500' : 'text-gray-600 dark:text-gray-100'}`}
                >
                  <Link to={item.to} className="flex items-center gap-4">
                    {item.icon}
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center bg-gray-700 p-2 dark:rounded-md dark:border-b-2 dark:border-gray-950">
            <Logo withTitle={true} />
          </div>
        </div>
      </div>

      <div className="sticky top-5 overflow-hidden rounded-lg bg-white dark:bg-gray-800 max-md:hidden">
        {isPushMenu ? (
          <>
            <div className="flex items-center justify-center bg-gray-800 px-2 py-4 dark:rounded-md dark:border-b-2 dark:border-gray-950">
              <Logo />
            </div>
            <div className="p-5">
              <ul className="my-10 flex flex-col gap-10 text-base">
                {adminPMenus.map((item) => (
                  <li
                    key={item.id}
                    title={item.title}
                    onClick={() => setActiveItem(item.to)}
                    className={`transition-all hover:text-violet-500 dark:hover:text-violet-500 ${activeItem === item.to ? 'text-violet-500' : 'text-gray-600 dark:text-gray-100'}`}
                  >
                    <Link to={item.to} className="flex items-center gap-4">
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center bg-gray-800 p-2 dark:rounded-md dark:border-b-2 dark:border-gray-950">
              <Logo withTitle={true} />
            </div>
            <div className="px-5">
              <div className="flex items-end gap-5 border-b-2 py-2 dark:border-b-gray-700 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ccc"
                  className="h-16 w-16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  ></path>
                </svg>
                <div>
                  <p className="text-lg">
                    پنل مدیریت{' '}
                      {user?.user_metadata.fullname}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    {user?.user_metadata.role === 'admin' ? 'مدیر' : ''}
                  </p>
                </div>
              </div>
              <ul className="my-6 flex flex-col gap-7 text-base">
                {adminPMenus.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => setActiveItem(item.to)}
                    className={`transition-all hover:text-violet-500 dark:hover:text-violet-500 ${activeItem === item.to ? 'text-violet-500' : 'text-gray-600 dark:text-gray-100'}`}
                  >
                    <Link to={item.to} className="flex items-center gap-4">
                      {item.icon}
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="border-t border-t-gray-200 py-2 text-center text-[12px] text-gray-500 dark:border-t-gray-900 dark:text-gray-400">
              داشبورد © 2024 تمامی حقوق محفوظ است
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default AdminSidebar;
