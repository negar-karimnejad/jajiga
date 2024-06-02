/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import CalendarFunc from '../ui/calendar';
import ReservationForm from './ReservationForm';

function ReservationModal({
  isOpen,
  closeModalHandler,
}: {
  isOpen: boolean;
  closeModalHandler: () => void;
}) {
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const openCalendarModal = () => setIsShowCalendar(true);
  const closeCalendarModal = () => setIsShowCalendar(false);

  useEffect(() => {
    //   Disable body scroll when the modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed right-0 top-0 z-40 flex h-screen w-full cursor-default flex-col items-center justify-center bg-black/60 transition-all duration-500 max-md:justify-end ${isOpen ? 'visible z-50 opacity-100' : 'invisible z-0 opacity-0'}`}
        onClick={closeModalHandler}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`overflow-y-auto rounded-lg bg-gray-50 p-2 shadow transition-all duration-500 dark:bg-gray-800 dark:text-white max-md:w-full min-[768px]:w-[500px] ${isOpen ? 'max-h-[30rem] min-h-[25rem]' : 'h-0'}`}
        >
          <Button
            style="absolute w-5 h-5 top-40 left-4 font-vazirBold text-4xl text-white"
            onClick={closeModalHandler}
          >
            &times;
          </Button>
          <ReservationForm
            isShowCalendar={isShowCalendar}
            openCalendarModal={openCalendarModal}
            closeCalendarModal={closeCalendarModal}
          />
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0 right-0 top-24 z-50 rounded-xl border bg-white shadow-lg shadow-gray-500 ${isShowCalendar ? 'visible opacity-100' : 'invisible opacity-0'}`}
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
    </>
  );
}

export default ReservationModal;
