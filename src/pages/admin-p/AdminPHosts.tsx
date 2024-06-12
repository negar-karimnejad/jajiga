import { BiTrash } from 'react-icons/bi';
import SectionHeader from '../../components/admin-p/SectionHeader';
import useRooms from '../../hooks/useRooms';
import convertToPersianDate from '../../utilities/convertToPersianDate';
import Swal from 'sweetalert2';

function AdminPHosts() {
  const { rooms } = useRooms();

  const allHosts = rooms.map((room) => room.host);

  // Remove duplicate hosts based on their id
  let hosts = allHosts.filter(
    (host, index, self) => index === self.findIndex((h) => h?.id === host?.id),
  );
  const deleteHandler = (id: number) => {
    Swal.fire({
      title: 'آیا از حذف میزبان مطمئنید؟',
      toast: false,
      position: 'center',
      showConfirmButton: true,
      showCancelButton: true,
      icon: 'warning',
      customClass: { icon: 'm-auto mt-4' },
      confirmButtonText: 'بله',
      cancelButtonText: 'انصراف',
    }).then((result) => {
      if (result.isConfirmed) {
        hosts = hosts.filter((host) => host?.id !== id);
        Swal.fire({
          title: 'میزبان با موفقیت حذف شد',
          toast: false,
          position: 'center',
          icon: 'success',
          customClass: { icon: 'm-auto mt-4' },
        });
      }
    });
  };
  
  if (!hosts) return null;
  return (
    <>
      <SectionHeader to="/admin-p/new-host" title="میزبان ها" />
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
                  تأیید رزرو
                </p>
              </th>
              <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70">
                  میانگین زمان پاسخ‌گویی
                </p>
              </th>

              <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70">
                  تاریخ عضویت
                </p>
              </th>
              <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70">
                  حذف میزبان
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {hosts.map((host) => (
              <tr key={host?.id} className="hover:bg-gray-100">
                <td className="border-blue-gray-50 border-b p-4">
                  <img
                    src={host?.profile}
                    alt={host?.fullname}
                    className="border-blue-gray-50 bg-blue-gray-50/50 relative inline-block h-12 w-12 rounded-lg border object-cover object-top"
                  />
                </td>
                <td className="border-blue-gray-50 border-b p-4">
                  <p className="text-blue-gray-900 block font-sans text-sm font-bold leading-normal antialiased">
                    {host?.fullname}
                  </p>
                </td>
                <td className="border-blue-gray-50 border-b py-4">
                  <p className="text-blue-gray-900 block rounded-lg bg-green-300 p-1 text-center font-sans text-sm font-normal leading-normal antialiased shadow">
                    {host?.id}
                  </p>
                </td>
                <td className="border-blue-gray-50 border-b p-4">
                  <p className="text-blue-gray-900 block font-sans text-sm font-normal leading-normal antialiased">
                    <span className="font-persianNums">
                      {host?.reservation_confirmation}
                    </span>{' '}
                    درصد
                  </p>
                </td>
                <td className="border-blue-gray-50 border-b p-4">
                  <p className="text-blue-gray-900 block font-sans text-sm font-normal leading-normal antialiased">
                    کمتر از{' '}
                    <span className="font-persianNums">
                      {host?.response_time}
                    </span>{' '}
                    دقیقه
                  </p>
                </td>
                <td className="border-blue-gray-50 border-b p-4">
                  <p className="text-blue-gray-900 block font-persianNums text-sm font-normal leading-normal antialiased">
                    {host?.registery_date &&
                      convertToPersianDate(host.registery_date)}
                  </p>
                </td>
                <td
                  onClick={() => deleteHandler(host?.id)}
                  className="border-blue-gray-50 border-b p-4"
                >
                  <p className="text-blue-gray-900 ml-5 flex cursor-pointer justify-center font-sans text-sm font-normal leading-normal antialiased hover:text-violet-500">
                    <BiTrash size={20} />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPHosts;
