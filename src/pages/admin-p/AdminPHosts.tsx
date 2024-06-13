import AdminPHost from '../../components/admin-p/AdminPHost';
import SectionHeader from '../../components/admin-p/SectionHeader';
import useRooms from '../../hooks/useRooms';

function AdminPHosts() {
  const { rooms } = useRooms();

  const allHosts = rooms.map((room) => room.host);

  // Remove duplicate hosts based on their id
  const hosts = allHosts.filter(
    (host, index, self) => index === self.findIndex((h) => h?.id === host?.id),
  );

  return (
    <>
      <SectionHeader to="/admin-p/new-host" title="میزبان ها" />
      <div className="overflow-x-auto overflow-y-hidden bg-white dark:bg-gray-800">
        <table className="table ">
          <thead>
            <tr>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100"></p>
              </th>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100">
                  نام
                </p>
              </th>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100">
                  کد
                </p>
              </th>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100">
                  میانگین زمان پاسخ‌گویی
                </p>
              </th>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100">
                  تاریخ عضویت
                </p>
              </th>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100">
                  مشاهده میزبان
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {hosts.map((host) => (
              <AdminPHost host={host} key={host?.id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPHosts;
