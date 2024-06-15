import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCalendarContext } from '../../context/CalendarContext';
import useRoom from '../../hooks/useRoom';
import ReservationForm from './ReservationForm';

function RoomSidebar() {
  const { id } = useParams();
  const { room } = useRoom(Number(id));
  const { closeCalendarModal } = useCalendarContext();

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
    <div className="relative top-0 h-fit max-lg:top-[63px] max-md:hidden md:sticky md:col-span-4">
      <div className="overflow-hidden rounded-xl shadow-lg dark:border dark:border-gray-700 dark:bg-gray-800">
        <header className="flex justify-between bg-neutral-700 p-4 text-white dark:bg-gray-900">
          <span className="font-vazirMedium text-base">نرخ هر شب از:</span>
          <span className="font-persianNums text-base">
            {room.price ? room.price.toLocaleString() : 0} تومان
          </span>
        </header>
        <ReservationForm />
      </div>
    </div>
  );
}

export default RoomSidebar;
