import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

function AdminPLayout() {
  return (
    <div className="bg-gray-100">
      <AdminHeader />
      <div className="grid grid-cols-12 gap-5 p-5">
        <AdminSidebar />
        <div className="col-span-9 rounded-lg bg-yellow-500 p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminPLayout;
