import { BsJournalCheck } from 'react-icons/bs';
import { FiHome } from 'react-icons/fi';
import { TbClockCheck } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import 'swiper/css';
import Application from '../components/home/Application';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import RoomsContainer from '../components/rooms/RoomsContainer';
import Breadcrumb from '../components/ui/Breadcrumb';
import useRooms from '../hooks/useRooms';
import convertToPersianDate from '../utilities/convertToPersianDate';

function Host() {
  const { id } = useParams();
  const { rooms } = useRooms();

  const userRooms = rooms.filter((room) => room.host.id === Number(id));
  const host = rooms.find((room) => room.host.id === Number(id))?.host;
  const active_residences = userRooms.length;

  if (!host) return null;

  const {
    fullname,
    profile,
    registery_date,
    reservation_confirmation,
    response_time,
  } = host;

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
                    className="h-20 w-20 rounded-full object-cover object-top dark:border-2"
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
              <div className="container grid grid-cols-1 gap-5 pb-20 lg:grid-cols-2">
                {userRooms?.map((room) => (
                  <RoomsContainer isHost={true} room={room} key={room.id} />
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
