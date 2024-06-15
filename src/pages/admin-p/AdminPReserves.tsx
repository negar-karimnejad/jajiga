import AdminPRoom from '../../components/admin-p/AdminPRoom';
import SectionHeader from '../../components/admin-p/SectionHeader';
import { Room } from '../../redux/store/room';

function AdminPReserves() {
  const reserves: Room[] = [];
  return (
    <>
      <SectionHeader btnTitle="" title="رزروها" to="/admin-p/new-room" />
      <div className="overflow-x-auto overflow-y-hidden bg-white dark:bg-gray-800">
        <table className="table">
          <thead>
            <tr>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100">
                  نام
                </p>
              </th>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100">
                  میزبان
                </p>
              </th>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100">
                  مهمان
                </p>
              </th>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100">
                  مبلغ
                </p>
              </th>
            </tr>
          </thead>
          <tbody className='h-80'>
            {reserves.map((room) => (
              <AdminPRoom room={room} key={room.id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPReserves;
