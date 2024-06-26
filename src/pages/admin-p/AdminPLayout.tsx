import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/admin-p/AdminHeader';
import AdminSidebar from '../../components/admin-p/AdminSidebar';
import { useAuth } from '../../hooks/useAuth';

function AdminPLayout() {
  const navigate = useNavigate();
  const { user, isFetched } = useAuth();
  const [isPushMenu, setIsPushMenu] = useState(false);

  const toggleMenu = () => setIsPushMenu((prev) => !prev);
  const closeMenu = () => setIsPushMenu(false);

  useEffect(() => {
    if (isFetched && !user) {
      navigate('/');
    }
  }, [isFetched, navigate, user]);

  if (!user) {
    return null;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="grid grid-cols-12 gap-5 px-5">
        <div
          className={`transition-all duration-300 ease-linear ${isPushMenu ? 'col-span-1 mx-auto' : 'md:col-span-5 lg:col-span-4 xl:col-span-3'}`}
        >
          <AdminSidebar closeMenu={closeMenu} isPushMenu={isPushMenu} />
        </div>
        <div
          className={`space-y-5 rounded-md transition-all duration-300 ease-linear dark:bg-gray-900 ${isPushMenu ? 'col-span-11 max-md:col-span-12' : 'col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9'}`}
        >
          <div className="fixed top-0 z-20 h-5 w-full bg-gray-100 dark:bg-gray-900"></div>
          <AdminHeader toggleMenu={toggleMenu} />
          <div className="rounded-md bg-gray-100 dark:bg-gray-900">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPLayout;
