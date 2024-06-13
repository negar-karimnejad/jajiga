import AdminPRoom from '../../components/admin-p/AdminPRoom';
import SectionHeader from '../../components/admin-p/SectionHeader';
import useRooms from '../../hooks/useRooms';

function AdminPRooms() {
  const { rooms } = useRooms();

  return (
    <>
      <SectionHeader
        btnTitle="افزودن اقامتگاه"
        title="اقامتگاه ها"
        to="/admin-p/new-room"
      />
      <div className="overflow-x-auto overflow-y-hidden bg-white dark:bg-gray-800">
          <table className="table">
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
                    نرخ هر شب
                  </p>
                </th>
                <th className="bg-blue-gray-50/50 p-4">
                  <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100">
                    میزبان
                  </p>
                </th>
                <th className="bg-blue-gray-50/50 p-4">
                  <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100"></p>
                </th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <AdminPRoom room={room} key={room.id} />
              ))}
            </tbody>
          </table>
      </div>
    </>
  );
}

export default AdminPRooms;
