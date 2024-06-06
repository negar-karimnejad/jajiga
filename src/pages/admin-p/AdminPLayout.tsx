import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

function AdminPLayout() {
  const [isPushMenu, setIsPushMenu] = useState(false);
  const toggleMenu = () => setIsPushMenu((prev) => !prev);

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="grid grid-cols-12 gap-5 px-5">
        <div
          className={`transition-all duration-300 ease-linear ${isPushMenu ? 'col-span-1 mx-auto' : 'md:col-span-5 lg:col-span-4 xl:col-span-3'}`}
        >
          <AdminSidebar isPushMenu={isPushMenu} />
        </div>
        <div
          className={`transition-all duration-300 ease-linear space-y-5 rounded-md dark:bg-gray-900 ${isPushMenu ? 'col-span-11' : 'col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9'}`}
        >
          <div className="fixed top-0 h-5 w-full bg-gray-100 dark:bg-gray-900"></div>
          <AdminHeader toggleMenu={toggleMenu} />
          <div className="h-[100rem] rounded-md bg-white p-5 dark:bg-gray-800">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPLayout;
