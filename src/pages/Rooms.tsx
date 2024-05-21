import { useState } from 'react';
import { BiHome } from 'react-icons/bi';
import { BsShare } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import 'swiper/css';
import Navbar from '../components/navbar/Navbar';
import ShareModal from '../components/room/ShareModal';
import RoomMap from '../components/room/room-main/RoomMap';
import RoomsContainer from '../components/rooms/RoomsContainer';
import CalendarFunc from '../components/ui/calendar';
import { QuickSearchArray } from '../data/data';
import useRoomsMeta from '../hooks/useRoomaMeta';
import useRooms from '../hooks/useRooms';

function Rooms() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowCalendar, setIsShowCalendar] = useState(false);

  const roomsGeo: [number, number][] = [];

  const { id } = useParams();
  const { rooms } = useRooms();
  const { roomsMeta } = useRoomsMeta();
  const roomMeta = roomsMeta.find((meta) => meta.name === id);
  const sRooms = rooms.filter((room) => {
    if (id) {
      return room.category?.includes(id);
    }
  });

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  const closeCalendarModal = () => {
    setIsShowCalendar(false);
  };

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="sticky top-[4.8rem] z-30 h-12 bg-gray-200">1</div>
      <div>
        <div className="grid grid-cols-12 overflow-hidden rounded-t-2xl bg-gray-50 shadow-inner shadow-gray-500/50 dark:bg-gray-800">
          <div className=" col-span-8">
            <header className="container">
              <p
                onClick={() => setIsShowCalendar(true)}
                className="relative my-4 mr-2 flex items-center gap-1 text-[12px]"
              >
                <div className="ml-1 h-2 w-2 animate-pulse rounded-full bg-yellow-400">
                  <span className="absolute -right-0.5 bottom-1 h-3 w-3 animate-ping rounded-full bg-yellow-400"></span>
                </div>
                برای مشاهده نتایج دقیق‌تر،<strong>تاریخ سفر</strong>و
                <strong>تعداد نفرات</strong>را انتخاب نمایید
                <div
                  onClick={(e) => e.stopPropagation()}
                  className={`absolute left-0 top-0 z-30 rounded-xl border bg-white shadow-lg shadow-gray-500 ${isShowCalendar ? 'visible opacity-100' : 'invisible opacity-0'}`}
                >
                  <div className="relative scale-90">
                    <CalendarFunc />
                    <button
                      onClick={closeCalendarModal}
                      className="absolute -right-5 -top-7 h-6 w-6 font-vazirBold text-3xl text-black/40 transition-all hover:text-black"
                    >
                      &times;
                    </button>
                  </div>
                </div>
              </p>
              <div className=" mb-10 flex h-40 overflow-hidden rounded-xl shadow-lg">
                <div className="w-full">
                  <img
                    src={roomMeta?.canonical}
                    className="h-full object-cover"
                    alt={roomMeta?.title}
                  />
                </div>
                <div className="-mr-5 w-[500px] rounded-xl bg-white p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <h1
                      className="font-vazirBold text-base"
                      title={roomMeta?.title}
                    >
                      {roomMeta?.title}
                    </h1>
                    <button
                      type="button"
                      className="ml-8"
                      onClick={() => setIsOpen(true)}
                    >
                      <BsShare size={15} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    {roomMeta?.description}
                  </p>
                </div>
              </div>
            </header>

            <main className="container grid grid-cols-1 gap-5 pb-20 sm:grid-cols-2 md:grid-cols-3">
              {sRooms?.map((room) => {
                roomsGeo.push([room.location.lat, room.location.lng]);
                return (
                  <RoomsContainer isHost={false} room={room} key={room.id} />
                );
              })}
            </main>

            <footer className="rounded-t-xl bg-neutral-900 p-5">
              <h4 className="font-vazirMedium text-base text-white">
                جستجوهای مرتبط
              </h4>
              <div className="overflow-auto py-4">
                <div className="flex w-[55rem] flex-wrap gap-2">
                  {QuickSearchArray.map((item) => (
                    <Link
                      to={`/s/${item.to}`}
                      className="flex w-52 justify-between rounded-full bg-white py-0.5 pl-0.5 pr-3 text-[13px]"
                    >
                      <div className="">اجاره {item.title}</div>
                      <div className="flex justify-center gap-1 rounded-full bg-neutral-900 px-2 py-0.5 text-gray-100">
                        <BiHome size={15} />
                        <span className="font-persianNums text-[12px]">
                          9632
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </footer>
          </div>

          <div className="col-span-4 h-screen">
            <div className=" fixed left-0 top-0 h-screen w-96">
              <RoomMap blueCircleMarker={false} geo={roomsGeo} />
            </div>
          </div>
        </div>
      </div>
      <ShareModal isOpen={isOpen} closeModalHandler={closeModalHandler} />
    </div>
  );
}

export default Rooms;
