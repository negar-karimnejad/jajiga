import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useRoom from '../../hooks/useRoom';
import Guarantee from '../../pages/Guarantee';
import FaqModal from '../ui/FaqModal';
import Modal from '../ui/Modal';
import CalendarFunc from '../ui/calendar';
import FloatingSidebar from './FloatingSidebar';
import ReservationForm from './ReservationForm';

function RoomSidebar() {
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const [isOpenFql, setIsOpenFql] = useState(false);
  const [isOpenGuarantee, setIsOpenGuarantee] = useState(false);

  const closeFqlModal = () => {
    setIsOpenFql(false);
  };
  const closeGuaranteeModal = () => {
    setIsOpenGuarantee(false);
  };
  const openFqlModal = () => {
    setIsOpenFql(true);
  };
 
  const { id } = useParams();
  const { room } = useRoom(Number(id));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCalendarModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeCalendarModal = () => {
    setIsShowCalendar(false);
  };



  return (
    <>
      <div className="relative top-0 h-fit max-lg:top-[63px] max-md:hidden md:sticky md:col-span-4">
        <div className="overflow-hidden rounded-xl shadow-lg dark:border dark:border-gray-700 dark:bg-gray-800">
          <header className="flex justify-between bg-neutral-700 p-4 text-white dark:bg-gray-900">
            <span className="font-vazirMedium text-base">نرخ هر شب از:</span>
            <span className="font-persianNums text-base">
              {room?.price.toLocaleString()} تومان
            </span>
          </header>
          <ReservationForm />
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0 top-24 z-10 rounded-xl border bg-white shadow-lg shadow-gray-500 ${isShowCalendar ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          <div className="relative scale-90 pt-5">
            <CalendarFunc />
            <button
              onClick={closeCalendarModal}
              className="absolute -right-5 -top-3 h-6 w-6 font-vazirBold text-3xl text-black/40 transition-all hover:text-black"
            >
              &times;
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <FloatingSidebar openFqlModal={openFqlModal} />
      </div>
      <FaqModal isOpen={isOpenFql} closeHandler={closeFqlModal} />
      <Modal
        centered={false}
        isOpen={isOpenGuarantee}
        closeModalHandler={closeGuaranteeModal}
      >
        <Guarantee />
      </Modal>
    </>
  );
}

export default RoomSidebar;
