import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCalendarContext } from '../../context/CalendarContext';
import useRoom from '../../hooks/useRoom';
import CalendarFunc from '../ui/CalendarFunc';
import ReservationForm from './ReservationForm';

function RoomSidebar() {
  const { id } = useParams();
  const { room } = useRoom(Number(id));
  const { closeCalendarModal, isShowCalendar } = useCalendarContext();

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
  }, [closeCalendarModal]);

  if (!room) return null;

  return (
    <>
      <div className="relative top-0 h-fit max-lg:top-[63px] max-md:hidden md:sticky md:col-span-4">
        <div className="overflow-hidden rounded-xl shadow-lg dark:border dark:border-gray-700 dark:bg-gray-800">
          <header className="flex justify-between bg-neutral-700 p-4 text-white dark:bg-gray-900">
            <span className="font-vazirMedium text-base">نرخ هر شب از:</span>
            <span className="font-persianNums text-base">
              {room.price.toLocaleString()} تومان
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
    </>
  );
}

export default RoomSidebar;
