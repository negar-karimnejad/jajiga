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
      <div className="flex w-full items-center justify-center bg-white dark:bg-gray-800">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="border-blue-gray-100 dark:border-gray-600 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 dark:text-gray-50 block font-sans text-sm leading-none antialiased opacity-70"></p>
              </th>
              <th className="border-blue-gray-100 dark:border-gray-600 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 dark:text-gray-50 block font-sans text-sm leading-none antialiased opacity-70">
                  نام
                </p>
              </th>
              <th className="border-blue-gray-100 dark:border-gray-600 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 dark:text-gray-50 block font-sans text-sm leading-none antialiased opacity-70">
                  کد
                </p>
              </th>
              <th className="border-blue-gray-100 dark:border-gray-600 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 dark:text-gray-50 block font-sans text-sm leading-none antialiased opacity-70">
                  میانگین زمان پاسخ‌گویی
                </p>
              </th>
              <th className="border-blue-gray-100 dark:border-gray-600 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 dark:text-gray-50 block font-sans text-sm leading-none antialiased opacity-70">
                  تاریخ عضویت
                </p>
              </th>
              <th className="border-blue-gray-100 dark:border-gray-600 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 dark:text-gray-50 block font-sans text-sm leading-none antialiased opacity-70">
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
