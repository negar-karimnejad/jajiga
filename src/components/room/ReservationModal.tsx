import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import CalendarFunc from '../ui/CalendarFunc';
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
        className={`fixed right-0 top-0 z-50 flex h-screen w-full cursor-default flex-col items-center justify-end bg-black/60 transition-all duration-500 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={closeModalHandler}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`min-h-fit w-full rounded-lg bg-white px-5 shadow transition-all duration-500 dark:text-white ${isOpen ? 'translate-y-0' : 'translate-y-96'}`}
        >
          <Button
            style="absolute w-5 h-5 -top-10 min-[600px]:left-2 left-3 font-vazirBold text-4xl text-white"
            onClick={closeModalHandler}
          >
            &times;
          </Button>
          <ReservationForm
            isShowCalendar={isShowCalendar}
            openCalendarModal={openCalendarModal}
            closeCalendarModal={closeCalendarModal}
            closeModalHandler={closeModalHandler}
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
