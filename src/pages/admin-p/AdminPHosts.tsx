import { BiEdit, BiTrash } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/admin-p/SectionHeader';
import useRooms from '../../hooks/useRooms';
import convertToPersianDate from '../../utilities/convertToPersianDate';

function AdminPHosts() {
  const { rooms } = useRooms();
  const hosts = rooms.map((room) => room.host);
  console.log(hosts);

  return (
    <>
      <SectionHeader btnTitle="افزودن میزبان" title="میزبان ها" />
      <div className="z-10 flex min-h-screen w-full items-center justify-center bg-white">
        <div className="w-full">
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
                    تاریخ عضویت
                  </p>
                </th>
                <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                  <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70"></p>
                </th>
              </tr>
            </thead>
            <tbody>
              {hosts.map((host) => (
                <tr className="hover:bg-gray-100">
                  <td className="border-blue-gray-50 border-b p-4">
                    <img
                      src={host.profile}
                      alt={host.fullname}
                      className="border-blue-gray-50 bg-blue-gray-50/50 relative inline-block h-12 w-12 rounded-lg border object-cover object-center"
                    />
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm font-bold leading-normal antialiased">
                      {host.fullname}
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b py-4">
                    <p className="text-blue-gray-900 block rounded-lg bg-green-300 p-1 text-center font-sans text-sm font-normal leading-normal antialiased shadow">
                      {host.id}
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm font-bold leading-normal antialiased">
                      {host.reservation_confirmation} درصد
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm font-bold leading-normal antialiased">
                      {convertToPersianDate(host.registery_date)}
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-circle btn-ghost m-1"
                      >
                        ...
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
                      >
                        {' '}
                        <li className="py-0.5 hover:text-violet-500">
                          <a>
                            <BiEdit />
                            ویرایش اقامتگاه
                          </a>
                        </li>
                        <li className="py-0.5 hover:text-violet-500">
                          <Link to={`/admin-p/rooms/${host.id}`}>
                            <FaEye />
                            مشاهده اقامتگاه
                          </Link>
                        </li>
                        <li className="py-0.5 hover:text-violet-500">
                          <a>
                            <BiTrash />
                            حذف اقامتگاه
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminPHosts;