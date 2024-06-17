import { useState } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useRooms from '../../hooks/useRooms';
import { Room } from '../../redux/store/room';
import Modal from '../ui/Modal';
import AdminPEditRoom from './AdminPEditRoom';

function AdminPRoom({ room }: { room: Room }) {
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const { removeRoom } = useRooms();

  const closeModal = () => setIsShowEditModal(false);

  const removeHandler = (roomId: number) => {
    Swal.fire({
      title: 'آیا از حذف اقامتگاه مطمئنید؟',
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
        removeRoom(roomId);
        Swal.fire({
          title: 'اقامتگاه با موفقیت حذف شد',
          toast: false,
          position: 'center',
          icon: 'success',
          customClass: { icon: 'm-auto mt-4' },
        });
      }
    });
  };

  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="p-4">
        <div className="flex h-12 w-12">
          <img
            src={room.images[0]}
            alt={room.title}
            className="rounded-lg object-cover object-center"
          />
        </div>
      </td>
      <td className="p-4">
        <p className="text-blue-gray-900 block whitespace-nowrap font-sans text-sm font-bold leading-normal antialiased dark:text-white">
          {room.title}
        </p>
      </td>
      <td className="p-4">
        <p className="text-blue-gray-900 block rounded-lg bg-green-300 p-1 text-center font-sans text-sm font-normal leading-normal antialiased shadow dark:text-gray-900">
          {room.code}
        </p>
      </td>
      <td className="p-4">
        <p className="text-blue-gray-900 block whitespace-nowrap font-persianNums text-sm font-normal leading-normal antialiased dark:text-white">
          {room.price ? room.price.toLocaleString() : 0}{' '}
          <span className="font-sans text-[12px] text-gray-500 dark:text-gray-100">
            تومان
          </span>
        </p>
      </td>
      <td className="flex items-center gap-2 p-4">
        <img
          src={room?.host?.profile}
          className="h-10 w-10 rounded-full object-cover"
          alt=""
        />
        <p className="text-blue-gray-900 block font-sans text-sm font-normal leading-normal  antialiased dark:text-white">
          {room?.host?.fullname}
        </p>
      </td>

      <td className="p-4">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle m-1 dark:btn-neutral"
          >
            ...
          </div>
          <ul
            tabIndex={0}
            className="menu dark:bg-gray-900 dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {' '}
            <li className="py-0.5 hover:text-violet-500 dark:text-white dark:hover:text-violet-500">
              <Link to={`/admin-p/rooms/${room.code}`}>
                <FaEye />
                مشاهده اقامتگاه
              </Link>
            </li>
            <li
              onClick={() => setIsShowEditModal(true)}
              className="py-0.5 hover:text-violet-500 dark:text-white dark:hover:text-violet-500"
            >
              <a>
                <BiEdit />
                ویرایش اقامتگاه
              </a>
            </li>
            <li
              onClick={() => removeHandler(room.id)}
              className="py-0.5 hover:text-violet-500 dark:text-white dark:hover:text-violet-500"
            >
              <a>
                <BiTrash />
                حذف اقامتگاه
              </a>
            </li>
          </ul>
        </div>
      </td>
      <Modal
        editRoom={true}
        closeModalHandler={closeModal}
        isOpen={isShowEditModal}
      >
        <AdminPEditRoom room={room} closeModal={closeModal} />
      </Modal>
    </tr>
  );
}

export default AdminPRoom;
