import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useRoom from '../../../hooks/useRoom';
import Guarantee from '../../../pages/Guarantee';
import Breadcrumb from '../../ui/Breadcrumb';
import FaqModal from '../../ui/FaqModal';
import Modal from '../../ui/Modal';
import FloatingSidebar from '../FloatingSidebar';
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

function RoomMain() {
  const [isOpenFql, setIsOpenFql] = useState(false);
  const [isOpenGuarantee, setIsOpenGuarantee] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { id } = useParams();

  const { room } = useRoom(Number(id));

  const closeFqlModal = () => {
    setIsOpenFql(false);
  };

  const openFqlModal = () => {
    setIsOpenFql(true);
  };
  const openGuaranteeModal = () => {
    setIsOpenGuarantee(true);
  };

  const closeGuaranteeModal = () => {
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
          <RoomMap room={room}/>
          <RoomScore />
          <RoomComments />
          <RoomHost room={room} />
          <FloatingSidebar room={room} openFqlModal={openFqlModal} />
        </div>
        <FaqModal isOpen={isOpenFql} closeHandler={closeFqlModal} />
        <Modal
          centered={false}
          isOpen={isOpenGuarantee}
          closeModalHandler={closeGuaranteeModal}
        >
          <Guarantee />
        </Modal>
        <RoomSidebar
          openGuaranteeModal={openGuaranteeModal}
          openFqlModal={openFqlModal}
        />
      </div>
    </>
  );
}

export default RoomMain;
