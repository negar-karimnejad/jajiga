import { BiEdit, BiTrash } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
              <tr className="hover:bg-gray-100">
                <td className="border-blue-gray-50 border-b p-4">
                  <img
                    src={room.images[0]}
                    alt={room.title}
                    className="border-blue-gray-50 bg-blue-gray-50/50 relative inline-block h-12 w-12 rounded-lg border object-cover object-center"
                  />
                </td>
                <td className="border-blue-gray-50 border-b p-4">
                  <p className="text-blue-gray-900 block font-sans text-sm font-bold leading-normal antialiased">
                    {room.title}
                  </p>
                </td>
                <td className="border-blue-gray-50 border-b p-4">
                  <p className="text-blue-gray-900 block rounded-lg bg-green-300 p-1 text-center font-sans text-sm font-normal leading-normal antialiased shadow">
                    {room.code}
                  </p>
                </td>
                <td className="border-blue-gray-50 border-b p-4">
                  <p className="text-blue-gray-900 block font-persianNums text-sm font-normal leading-normal antialiased">
                    {room.price.toLocaleString()}{' '}
                    <span className="font-sans text-[12px] text-gray-500">
                      تومان
                    </span>
                  </p>
                </td>
                <td className="flex items-center gap-2 p-4">
                  <img
                    src={room.host.profile}
                    className="h-10 w-10 rounded-full object-cover"
                    alt=""
                  />
                  <p className="text-blue-gray-900 block font-sans text-sm font-normal leading-normal antialiased">
                    {room.host.fullname}
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
                        <Link to={`/admin-p/rooms/${room.code}`}>
                          <FaEye />
                          مشاهده اقامتگاه
                        </Link>
                      </li>
                      <li className="py-0.5 hover:text-violet-500">
                        <a>
                          <BiEdit />
                          ویرایش اقامتگاه
                        </a>
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
    </>
  );
}

export default AdminPRooms;
