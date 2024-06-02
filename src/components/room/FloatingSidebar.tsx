import { PiQuestionFill } from 'react-icons/pi';
import { Room } from '../../redux/store/room';
import Button from '../ui/Button';
import { useState } from 'react';
import ReservationModal from './ReservationModal';

function FloatingSidebar({
  openFqlModal,
  room,
}: {
  room: Room;
  openFqlModal: () => void;
}) {
  const [isOpenReserveModal, setIsOpenReserveModal] = useState(false);

  const closeModalHandler = () => {
    setIsOpenReserveModal(false);
  };
  const openModalHandler = () => {
    setIsOpenReserveModal(true);
  };

  return (
    <>
      <div className="sticky bottom-16 mt-5 flex items-center justify-between rounded-lg bg-neutral-800/70 px-4 py-2.5 text-white backdrop-blur-[3px] dark:bg-gray-700/70 md:hidden">
        <div>
          <div className="font-vazirMedium text-[11px]">
            هر شب از{' '}
            <span className="font-persianNums text-lg">
              {room.price.toLocaleString()}
            </span>{' '}
            تومان
          </div>
          <button
            onClick={openFqlModal}
            className="flex items-center gap-1 text-sm"
          >
            <PiQuestionFill size={18} />
            راهنمای رزرو
          </button>
        </div>
        <Button
          onClick={openModalHandler}
          style="rounded-full px-3 font-vazirBold hover:bg-yellow-500 bg-yellow-400"
        >
          درخواست رزرو
        </Button>
      </div>
      <div>
        <ReservationModal
          closeModalHandler={closeModalHandler}
          isOpen={isOpenReserveModal}
        />
      </div>
    </>
  );
}

export default FloatingSidebar;
