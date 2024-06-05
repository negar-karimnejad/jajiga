import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/navbar/Logo';
import { adminPMenus } from '../../data/data';
import { useAuth } from '../../hooks/useAuth';

function AdminSidebar({ isPushMenu }: { isPushMenu: boolean }) {
  const { user } = useAuth();
  const [activeItem, setActiveItem] = useState(1);
  return (
    <div className="sticky top-5 overflow-hidden rounded-lg bg-white dark:bg-gray-800 max-md:hidden">
      {isPushMenu ? (
        <>
          <div className="flex items-center justify-center bg-gray-800 p-2 dark:rounded-md dark:border-b-2 dark:border-gray-600">
            <Logo />
          </div>
          <div className="p-5">
            <div className=" my-7">
              <ul className="mt-6 flex flex-col gap-8 text-base">
                {adminPMenus.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`transition-all hover:text-purple-500 dark:hover:text-purple-500 ${activeItem === item.id ? 'text-purple-500' : 'text-gray-600 dark:text-gray-100'}`}
                  >
                    <Link to={item.to} className="flex items-center gap-4">
                      {item.icon}
                      {/* {item.title} */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center bg-gray-800 p-2 dark:rounded-md dark:border-b-2 dark:border-gray-600">
            <Logo withTitle={true} />
          </div>
          <div className="p-5">
            <div className="rounded-md border-2 p-3 dark:border-gray-700 dark:text-white">
              <p>{user?.user_metadata.fullname}</p>
            </div>
            <div className=" my-7">
              <h5 className="text-lg text-gray-600 dark:text-white">
                منوی اصلی
              </h5>
              <ul className="mt-6 flex flex-col gap-8 text-base">
                {adminPMenus.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`transition-all hover:text-purple-500 dark:hover:text-purple-500 ${activeItem === item.id ? 'text-purple-500' : 'text-gray-600 dark:text-gray-100'}`}
                  >
                    <Link to={item.to} className="flex items-center gap-4">
                      {item.icon}
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="pb-1 text-center text-[12px] text-gray-500 dark:text-gray-400">
            داشبورد
            <br />© 2024 تمامی حقوق محفوظ است
          </p>
        </>
      )}
    </div>
  );
}

export default AdminSidebar;
