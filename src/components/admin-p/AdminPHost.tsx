import { useState } from 'react';
import { BsJournalCheck } from 'react-icons/bs';
import { FiHome } from 'react-icons/fi';
import { RiSearchEyeLine } from 'react-icons/ri';
import { TbClockCheck } from 'react-icons/tb';
import useRooms from '../../hooks/useRooms';
import convertToPersianDate from '../../utilities/convertToPersianDate';
import Modal from '../ui/Modal';

interface Host {
  id: number;
  fullname: string;
  registery_date: Date;
  response_time: number;
  reservation_confirmation: number;
  profile: string;
}

interface AdminPHostProps {
  host: Host | undefined;
}

function AdminPHost({ host }: AdminPHostProps) {
  const { rooms } = useRooms();
  const [isShowHostModal, setIsShowHostModal] = useState(false);

  const closeModal = () => setIsShowHostModal(false);

  const userRooms = rooms.filter((room) => room?.host?.id === host?.id);
  const active_residences = userRooms?.length;

  return (
    <>
      <tr key={host?.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="border-blue-gray-50 dark:text-white border-b p-4">
          <img
            src={host?.profile}
            alt={host?.fullname}
            className="border-blue-gray-50 dark:text-white bg-blue-gray-50/50 relative inline-block h-12 w-12 rounded-lg border object-cover object-top"
          />
        </td>
        <td className="border-blue-gray-50 dark:text-white border-b p-4">
          <p className="text-blue-gray-900 block font-sans text-sm font-bold leading-normal antialiased">
            {host?.fullname}
          </p>
        </td>
        <td className="border-blue-gray-50 dark:text-white border-b py-4">
          <p className="text-blue-gray-900 block rounded-lg bg-green-300 dark:text-gray-900 p-1 text-center font-sans text-sm font-normal leading-normal antialiased shadow">
            {host?.id}
          </p>
        </td>
        <td className="border-blue-gray-50 dark:text-white border-b p-4">
          <p className="text-blue-gray-900 block font-sans text-sm font-normal leading-normal antialiased">
            کمتر از{' '}
            <span className="font-persianNums">{host?.response_time}</span>{' '}
            دقیقه
          </p>
        </td>
        <td className="border-blue-gray-50 dark:text-white border-b p-4">
          <p className="text-blue-gray-900 block font-persianNums text-sm font-normal leading-normal antialiased">
            {host?.registery_date && convertToPersianDate(host?.registery_date)}
          </p>
        </td>
        <td
          onClick={() => setIsShowHostModal(true)}
          className="border-blue-gray-50 dark:text-white border-b p-4"
        >
          <p className="text-blue-gray-900 ml-5 flex cursor-pointer justify-center font-sans text-sm font-normal leading-normal antialiased hover:text-violet-500">
            <RiSearchEyeLine size={24} />
          </p>
        </td>
      </tr>

      <Modal closeModalHandler={closeModal} isOpen={isShowHostModal}>
        <div className="my-5">
          <div className="flex items-center gap-5 border-b border-dashed pb-3">
            <img
              alt={host?.fullname}
              src={host?.profile}
              className="h-20 w-20 rounded-full object-cover object-top dark:border-2"
            />
            <div>
              <h4 className="mb-3 font-vazirBold text-lg dark:text-white">
                {host?.fullname}
              </h4>
              <p className="text-[13px] text-gray-600 dark:text-gray-300">
                تاریخ عضویت:
                <span className="mr-1 font-persianNums">
                  {host?.registery_date &&
                    convertToPersianDate(host?.registery_date)}
                </span>
              </p>
            </div>
          </div>
          <p className="mb-4 mt-7 flex gap-1 font-persianNums text-[13px] text-gray-800 dark:text-gray-100">
            <FiHome size={17} />
            <span className="font-vazirBold dark:text-white">
              تعداد اقامتگاه های فعال:{' '}
            </span>
            {active_residences} اقامتگاه
          </p>
          <p className="mb-4 flex gap-1 font-persianNums text-[13px] text-gray-800 dark:text-gray-100">
            <TbClockCheck size={17} />
            <span className="font-vazirBold dark:text-white">
              میانگین زمان پاسخ‌گویی:{' '}
            </span>
            کمتر از {host?.response_time} دقیقه
          </p>
          <p className="mb-4 flex gap-1 font-persianNums text-[13px] text-gray-800 dark:text-gray-100">
            <BsJournalCheck size={17} />
            <span className="font-vazirBold dark:text-white">
              میزان تأیید رزرو:{' '}
            </span>
            {host?.reservation_confirmation} درصد
          </p>
        </div>
      </Modal>
    </>
  );
}

export default AdminPHost;
