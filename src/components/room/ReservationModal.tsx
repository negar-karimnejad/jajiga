import { useEffect } from 'react';
import Button from '../ui/Button';
import CalendarFunc from '../ui/CalendarFunc';
import ReservationForm from './ReservationForm';
import { useCalendarContext } from '../../context/CalendarContext';

function ReservationModal({
  isOpen,
  closeModalHandler,
}: {
  isOpen: boolean;
  closeModalHandler: () => void;
}) {
  const { closeCalendarModal, isShowCalendar } = useCalendarContext();

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
        className={`fixed right-0 top-0 z-40 flex h-screen w-full cursor-default flex-col items-center justify-center bg-black/60 transition-all duration-500 max-md:justify-end ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={closeModalHandler}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`min-h-fit w-full rounded-lg bg-white px-5 shadow transition-all duration-500 dark:text-white md:w-[500px] ${isOpen ? 'translate-y-0' : 'translate-y-96'}`}
        >
          <Button
            style="absolute w-5 h-5 -top-10 min-[600px]:left-2 left-3 font-vazirBold text-4xl text-white"
            onClick={closeModalHandler}
          >
            &times;
          </Button>
          <ReservationForm closeModalHandler={closeModalHandler} />
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0 right-0 top-24 z-50 mx-auto rounded-xl border bg-white shadow-lg shadow-gray-500 sm:w-fit ${isShowCalendar ? 'visible opacity-100' : 'invisible opacity-0'}`}
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
