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
      <div className="flex w-full items-center justify-center bg-white">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70"></p>
              </th>
              <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70">
                  نام
                </p>
              </th>

              <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70">
                  کد
                </p>
              </th>
              <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70">
                  نرخ هر شب
                </p>
              </th>
              <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70">
                  میزبان
                </p>
              </th>
              <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70"></p>
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
