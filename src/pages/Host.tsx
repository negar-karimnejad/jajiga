import { Link, useParams } from 'react-router-dom';
import Application from '../components/home/Application';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import Breadcrumb from '../components/ui/Breadcrumb';
import DarkMode from '../components/ui/DarkMode';
import Loader from '../components/ui/Loader';
import { useHost } from '../hooks/useHost';
import useRooms from '../hooks/useRooms';
import convertToPersianDate from '../utilities/convertToPersianDate';
import { BsStarFill } from 'react-icons/bs';

function Host() {
  const { id } = useParams();
  const { rooms } = useRooms();
  const { host, loading } = useHost(Number(id));
  const userRooms = rooms.filter((room) => room.host_id === host.id);

  if (!host) return null;
  if (loading) return <Loader />;
  const {
    fullname,
    profile,
    registery_date,
    reservation_confirmation,
    response_time,
    active_residences,
  } = host;
  return (
    <>
      <DarkMode />
      <Application style="h-12" />
      <div className="mx-auto w-full border-b bg-white py-2 dark:border-0 dark:bg-gray-800 lg:gap-x-10">
        <div className="container flex items-center justify-between gap-x-3">
          <WhiteBgNavbar />
        </div>
      </div>
      <div className="relative">
        <div className="h-24 w-full bg-yellow-400">
          <div className="h-full w-full bg-[url(/images/patterns/pattern.png)]">
            <Breadcrumb pageLink="نمایه میزبان" />
          </div>
        </div>
        <div className="-mt-5 h-screen rounded-t-2xl bg-white dark:bg-gray-800">
          <div className="container flex gap-5 pt-5 max-md:flex-col">
            <div className="flex-1 rounded-xl border bg-white p-5 shadow-md shadow-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-900 ">
              <div className="">
                <div className="flex items-center gap-5">
                  <img
                    alt={fullname}
                    src={profile}
                    className="h-20 w-20 rounded-full dark:border-2"
                  />
                  <div>
                    <h4 className="mb-3 font-vazirBold text-lg dark:text-white">
                      {fullname}
                    </h4>
                    <p className="text-[13px] text-gray-600 dark:text-gray-300">
                      تاریخ عضویت:
                      <span className="mr-1 font-persianNums">
                        {convertToPersianDate(registery_date)}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="mb-2 mt-7 font-persianNums text-[13px] text-gray-800 dark:text-gray-100">
                  <span className="font-vazirBold dark:text-white">
                    تعداد اقامتگاه های فعال:{' '}
                  </span>
                  {active_residences} اقامتگاه
                </p>
                <p className="mb-2 font-persianNums text-[13px] text-gray-800 dark:text-gray-100">
                  <span className="font-vazirBold dark:text-white">
                    میانگین زمان پاسخ‌گویی:{' '}
                  </span>
                  کمتر از {response_time} دقیقه
                </p>
                <p className="mb-2 font-persianNums text-[13px] text-gray-800 dark:text-gray-100">
                  <span className="font-vazirBold dark:text-white">
                    میزان تأیید رزرو:{' '}
                  </span>
                  {reservation_confirmation} درصد
                </p>
              </div>
            </div>
            <div className="flex-1">
              <h3>لیست اقامتگاه ها</h3>
              <div>
                {userRooms.map((room) => (
                  <div key={room.id}>
                    <Link to={`/room/${room.code}`} className="relative">
                      <div className="relative overflow-hidden rounded-3xl">
                        <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>

                        <img
                          loading="lazy"
                          src={room?.images?.at(0)}
                          className="block w-full rounded-3xl"
                          alt=""
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex h-full flex-col items-start justify-between px-4 pb-4 text-sm text-white">
                        <div className="mt-2 flex flex-col items-center gap-2">
                          <p className="w-20 rounded-full bg-white px-1 py-0.5 font-vazirBold text-[11px] text-black">
                            ✨ ممتــــــــاز
                          </p>
                          <p className="w-20 rounded-full bg-yellow-400 px-1 py-0.5 font-vazirBold text-[11px] text-black">
                            <span>⚡</span> رزرو فوری
                          </p>
                        </div>
                        <p className="font-persianNums">
                          از {room.price.toLocaleString()} تومان
                        </p>
                      </div>
                    </Link>
                    <Link to="/room/123" className="text-sm dark:text-white">
                      <p className="mb-1 mt-3 font-vazirBold">{room.title}</p>
                      <p className="flex gap-1 font-persianNums text-[13px]">
                        {room.bedroom}خوابه .{room.foundation_meterage} متر . تا{' '}
                        {room.max_capacity} مهمان
                        <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Host;
