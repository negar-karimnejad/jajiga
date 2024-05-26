import { useState } from 'react';
import { BiChevronUp, BiHome } from 'react-icons/bi';
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
import RoomCardSkeleton from '../components/ui/skeleton/RoomCardSkeleton';

function Rooms() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const [fullsize, setFullsize] = useState(false);

  const roomsGeo: [number, number][] = [];

  const { id } = useParams();
  const { rooms, loading: roomsLoading } = useRooms();
  const { roomsMeta, loading } = useRoomsMeta();

  const roomMeta = roomsMeta.find((meta) => meta.name === id);

  const sRooms = id
    ? rooms.filter((room) => room.category?.includes(id))
    : rooms;

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  const closeCalendarModal = () => {
    setIsShowCalendar(false);
  };

  return (
    <div className="bg-white dark:bg-gray-700">
      <Navbar />
      {/* <div className="sticky top-[4.8rem] z-30 h-12 bg-gray-200">1</div> */}
      <div>
        <div className="flex grid-cols-12 flex-col-reverse rounded-t-2xl bg-gray-50 shadow-inner shadow-gray-500/50 dark:bg-gray-800 md:grid">
          <div className="md:col-span-7 lg:col-span-8">
            <header className="container">
              <div
                onClick={() => setIsShowCalendar(true)}
                className="relative my-4 mr-2 flex items-center gap-1 text-[12px]"
              >
                <div className="ml-1 h-2 w-2 animate-pulse rounded-full bg-yellow-400">
                  <span className="absolute -right-0.5 bottom-1 h-3 w-3 animate-ping rounded-full bg-yellow-400"></span>
                </div>
                برای مشاهده نتایج دقیق‌تر،
                <strong className="cursor-default">تاریخ سفر</strong>و
                <strong className="cursor-default">تعداد نفرات</strong>را انتخاب
                نمایید
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
              </div>
              <div className="mb-10 flex overflow-hidden rounded-xl shadow-lg md:h-40">
                <div className="w-full max-sm:hidden">
                  {loading ? (
                    <RoomCardSkeleton />
                  ) : (
                    <img
                      src={roomMeta?.canonical}
                      className="h-full w-full object-cover object-center"
                      alt={roomMeta?.title}
                    />
                  )}
                </div>
                <div className="w-[500px] rounded-xl bg-white p-5 dark:bg-gray-900 max-sm:w-full sm:-mr-5">
                  <div className="mb-5 flex items-center justify-between">
                    <h1
                      className="font-vazirBold text-base dark:text-white max-md:pr-5"
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
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-md:pr-5">
                    {roomMeta?.description}
                  </p>
                </div>
              </div>
            </header>

            <main className="container grid grid-cols-1 gap-5 pb-20 lg:grid-cols-2 xl:grid-cols-3">
              {sRooms.length > 0 ? (
                roomsLoading ? (
                  Array.from({ length: sRooms.length }).map((_, index) => (
                    <RoomCardSkeleton key={index} />
                  ))
                ) : (
                  sRooms.map((room) => {
                    roomsGeo.push([room.location.lat, room.location.lng]);
                    return (
                      <RoomsContainer
                        isHost={false}
                        room={room}
                        key={room.id}
                      />
                    );
                  })
                )
              ) : (
                <p className="container">اقامتگاهی یافت نشد.</p>
              )}
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

          <div
            className="max-md:mb-5 md:col-span-5 md:h-screen lg:col-span-4"
            onClick={() => setFullsize(true)}
          >
            <div
              className={`left-0 top-0 z-20 h-screen transition-all duration-700 max-md:relative max-md:w-full md:fixed md:w-[20rem] lg:w-[22rem] xl:w-[440px] ${fullsize ? 'max-md:h-[400px]' : 'max-md:h-20 md:h-screen'}`}
            >
              <RoomMap
                fullsize={fullsize}
                blueCircleMarker={false}
                geo={roomsGeo}
              />
              {fullsize && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullsize(false);
                  }}
                  className="absolute -bottom-4 left-0 right-0 mx-auto flex w-fit items-center gap-2 rounded-full bg-neutral-800/95 px-5 py-2 text-sm text-white transition-all hover:ring-2 hover:ring-gray-400 md:hidden"
                >
                  <BiChevronUp size={20} /> مشاهده نتایج
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <ShareModal isOpen={isOpen} closeModalHandler={closeModalHandler} />
    </div>
  );
}

export default Rooms;
