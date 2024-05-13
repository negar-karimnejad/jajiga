import { BsJournalCheck, BsStarFill } from 'react-icons/bs';
import { FiHome } from 'react-icons/fi';
import { TbClockCheck } from 'react-icons/tb';
import { Link, useParams } from 'react-router-dom';
import Application from '../components/home/Application';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import LikeAndShareButtons from '../components/room/LikeAndShareButtons';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import Loader from '../components/ui/Loader';
import { useHost } from '../hooks/useHost';
import useRooms from '../hooks/useRooms';
import convertToPersianDate from '../utilities/convertToPersianDate';

function Host() {
  const { id } = useParams();
  const { rooms } = useRooms();
  const { host, loading } = useHost(Number(id));
  const userRooms = host && rooms.filter((room) => room.host_id === host.id);

  if (!host) return null;
  if (loading) return <Loader />;

  const {
    fullname,
    profile,
    registery_date,
    reservation_confirmation,
    response_time,
  } = host;

  const active_residences =
    rooms && rooms.filter((room) => room.host_id === Number(id)).length;
    
  return (
    <>
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
        <div className="-mt-5 rounded-t-2xl bg-white pb-20 dark:bg-gray-800">
          <div className="container grid-cols-12 gap-10 pt-5 max-sm:flex max-sm:flex-col sm:grid sm:items-start">
            <div className="col-span-12 rounded-xl border bg-white p-5 shadow-md shadow-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-900 md:col-span-6 lg:col-span-4">
              <div className="">
                <div className="flex items-center gap-5">
                  <img
                    alt={fullname}
                    src={profile}
                    className="h-20 w-20 object-top object-cover rounded-full dark:border-2"
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
                <p className="mb-2 mt-7 flex gap-1 font-persianNums text-[13px] text-gray-800 dark:text-gray-100">
                  <FiHome size={17} />
                  <span className="font-vazirBold dark:text-white">
                    تعداد اقامتگاه های فعال:{' '}
                  </span>
                  {active_residences} اقامتگاه
                </p>
                <p className="mb-2 flex gap-1 font-persianNums text-[13px] text-gray-800 dark:text-gray-100">
                  <TbClockCheck size={17} />
                  <span className="font-vazirBold dark:text-white">
                    میانگین زمان پاسخ‌گویی:{' '}
                  </span>
                  کمتر از {response_time} دقیقه
                </p>
                <p className="mb-2 flex gap-1 font-persianNums text-[13px] text-gray-800 dark:text-gray-100">
                  <BsJournalCheck size={17} />
                  <span className="font-vazirBold dark:text-white">
                    میزان تأیید رزرو:{' '}
                  </span>
                  {reservation_confirmation} درصد
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8">
              <h3 className="mb-3 font-vazirBold text-lg dark:text-white">
                لیست اقامتگاه ها
              </h3>
              <div className="flex flex-col flex-wrap items-center gap-10 lg:flex-row">
                {userRooms?.map((room) => (
                  <div key={room.id} className="">
                    <Link to={`/room/${room.code}`} className="relative">
                      <div className="relative overflow-hidden rounded-xl">
                        <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
                        <img
                          loading="lazy"
                          src={room?.images?.at(0)}
                          className="block h-52 w-80 rounded-xl"
                          alt=""
                        />
                        <div className="absolute left-2 top-2">
                          <LikeAndShareButtons />
                        </div>
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
                      </div>
                    </Link>
                    <Link
                      to={`/room/${room.code}`}
                      className="text-sm dark:text-white"
                    >
                      <p className="mb-1 mt-3 font-vazirBold">{room.title}</p>
                      <p className="mt-2 flex gap-2 text-[13px] text-gray-500 dark:text-gray-300">
                        <span className="font-persianNums">
                          {room.bedroom}خوابه . {room.foundation_meterage} متر .
                          تا {room.max_capacity} مهمان
                        </span>
                        <span className="flex gap-1 font-persianNums">
                          <BsStarFill className="text-yellow-500" />
                          {room.rating?.total}
                        </span>
                        <span className="font-persianNums">
                          ({room.reviews} نظر)
                        </span>
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-sm">
                        هر شب از
                        <span className="mr-1 font-persianNums">
                          {room.price?.toLocaleString()}
                        </span>
                        تومان
                        <Button style="cursor-default font-persianNums text-[13px] bg-gray-200 rounded-full py-1 hover:shadow-none ">
                          {room.reserved}+ رزرو موفق
                        </Button>
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
