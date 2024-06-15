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
  const [isOpenReserveModal, setIsOpenReserveModal] = useState(false);

  const hostRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { id } = useParams();

  const { room } = useRoom(Number(id));

  const closeModalHandler = () => {
    setIsOpenReserveModal(false);
  };
  const openModalHandler = () => {
    setIsOpenReserveModal(true);
  };
  const closeFqlModal = () => {
    setIsOpenFql(false);
  };

  const openFqlModal = () => {
    setIsOpenFql(true);
  };

  const closeGuaranteeModal = () => {
    setIsOpenGuarantee(false);
  };

  if (!room) return null;
  const roomsGeo: [number, number][] = [
    [
      room.location.lat ? room.location.lat : 0,
      room.location.lng ? room.location.lng : 0,
    ],
  ];

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
          <RoomAbout hostRef={hostRef} />
          <RoomFeatures />
          <RoomCalendar openModalHandler={openModalHandler} />
          <RoomRules />
          <div className="mt-5 h-64">
            <h4 className="mb-3 font-vazirBold text-lg">نقشه</h4>
            <RoomMap blueCircleMarker={true} geo={roomsGeo} />
          </div>
          <RoomScore />
          <RoomComments />
          <RoomHost room={room} hostRef={hostRef} />
          <FloatingSidebar
            isOpenReserveModal={isOpenReserveModal}
            closeModalHandler={closeModalHandler}
            openModalHandler={openModalHandler}
            room={room}
            openFqlModal={openFqlModal}
          />
        </div>
        <FaqModal isOpen={isOpenFql} closeHandler={closeFqlModal} />

        <Modal
          centered={false}
          isOpen={isOpenGuarantee}
          closeModalHandler={closeGuaranteeModal}
        >
          <Guarantee />
        </Modal>
        <RoomSidebar />
      </div>
    </>
  );
}

export default RoomMain;
