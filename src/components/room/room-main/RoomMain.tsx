import { useRef } from 'react';
import Breadcrumb from '../../ui/Breadcrumb';
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
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={containerRef}
        className="container mb-5 mt-10 flex flex-col-reverse gap-5 dark:text-white md:grid md:grid-cols-12"
      >
        <div className="relative md:col-span-8" id="featuresRef">
          <RoomAccessibility />
          <Breadcrumb pageLink="ساوجبلاغ" links={['البرز']} />
          <RoomAbout />
          <RoomFeatures />
          <RoomCalendar />
          <RoomRules />
          <RoomMap />
          <RoomScore />
          <RoomComments />
          <RoomHost />
        </div>
        <RoomSidebar />
      </div>
    </>
  );
}

export default RoomMain;
