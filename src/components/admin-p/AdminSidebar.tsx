import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../navbar/Logo';
import { adminPMenus } from '../../data/data';
import { useAuth } from '../../hooks/useAuth';

function AdminSidebar({ isPushMenu }: { isPushMenu: boolean }) {
  const { user } = useAuth();
  const location = useLocation();

  const [activeItem, setActiveItem] = useState(location.pathname);
  return (
    <div className="sticky top-5 overflow-hidden rounded-lg bg-white dark:bg-gray-800 max-md:hidden">
      {isPushMenu ? (
        <>
          <div className="flex items-center justify-center bg-gray-800 px-2 py-4 dark:rounded-md dark:border-b-2 dark:border-gray-950">
            <Logo />
          </div>
          <div className="p-5">
            <ul className="my-6 flex flex-col gap-9 text-base">
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
          <div className="p-5">
            <div className="border-b-2 px-3 dark:border-b-gray-700 dark:text-white">
              <p>{user?.user_metadata.fullname}</p>
            </div>
            <ul className="my-4 flex flex-col gap-6 text-base">
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
          <p className="py-2 border-t border-t-gray-200 dark:border-t-gray-900 text-center text-[12px] text-gray-500 dark:text-gray-400">
            داشبورد © 2024 تمامی حقوق محفوظ است
          </p>
        </>
      )}
    </div>
  );
}

export default AdminSidebar;
