import { useRef, useState } from 'react';
import { PiQuestionFill } from 'react-icons/pi';
import { useParams } from 'react-router-dom';
import useRoom from '../../../hooks/useRoom';
import Breadcrumb from '../../ui/Breadcrumb';
import Button from '../../ui/Button';
import FaqModal from '../../ui/FaqModal';
import Modal from '../../ui/Modal';
import RoomSidebar from '../RoomSidebar';
import RoomAbout from './RoomAbout';
import RoomAccessibility from './RoomAccessibility';
import RoomCalendar from './RoomCalendar';
import RoomComments from './RoomComments';
import RoomFeatures from './RoomFeatures';
import RoomHost from './RoomHost';
import RoomMap from './RoomMap';
import RoomRules from './RoomRules';
import RoomScore from './RoomScore';
import Guarantee from '../../../pages/Guarantee';

function RoomMain() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { id } = useParams();
  const { room } = useRoom(Number(id));
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenGuarantee, setIsOpenGuarantee] = useState(false);

  const closeHandler = () => {
    setIsOpen(false);
  };

  const openHandler = () => {
    setIsOpen(true);
  };
  const openGuaranteeModalHandler = () => {
    setIsOpenGuarantee(true);
  };

  const closeGuaranteeModalHandler = () => {
    setIsOpenGuarantee(false);
  };

  if (!room) return null;
  return (
    <>
      <div
        ref={containerRef}
        className="container mb-5 mt-10 flex flex-col-reverse gap-5 dark:text-white md:grid md:grid-cols-12"
      >
        <div className="relative md:col-span-8" id="featuresRef">
          <RoomAccessibility />
          <div className="-mr-4">
            <Breadcrumb
              pageLink={room.category && room.category[2]}
              links={room.category && [room.category[1]]}
            />
          </div>
          <RoomAbout />
          <RoomFeatures />
          <RoomCalendar />
          <RoomRules />
          <RoomMap />
          <RoomScore />
          <RoomComments />
          <RoomHost room={room} />
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
                onClick={openHandler}
                className="flex items-center gap-1 text-sm"
              >
                <PiQuestionFill size={18} />
                راهنمای رزرو
              </button>
            </div>
            <Button style="rounded-full px-3 font-vazirBold hover:bg-yellow-500 bg-yellow-400">
              درخواست رزرو
            </Button>
          </div>
        </div>
        <FaqModal isOpen={isOpen} closeHandler={closeHandler} />
        <Modal
          centered={false}
          isOpen={isOpenGuarantee}
          closeModalHandler={closeGuaranteeModalHandler}
        >
          <Guarantee />
        </Modal>
        <RoomSidebar
          openGuaranteeModalHandler={openGuaranteeModalHandler}
          openHandler={openHandler}
        />
      </div>
    </>
  );
}

export default RoomMain;
