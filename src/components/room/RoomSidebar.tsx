import { useEffect, useState } from 'react';
import { GoQuestion, GoShieldCheck } from 'react-icons/go';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import { useCalendarContext } from '../../context/CalendarContext';
import useRoom from '../../hooks/useRoom';
import Button from '../ui/Button';
import CalendarFunc from '../ui/calendar';

function RoomSidebar({
  openFqlModal,
  openGuaranteeModal,
}: {
  openFqlModal: () => void;
  openGuaranteeModal: () => void;
}) {
  const [isShowInfo, setIsShowInfo] = useState(false);
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const { id } = useParams();
  const { room } = useRoom(Number(id));
  const { dates } = useCalendarContext();

  const closeCalendarModal = () => {
    setIsShowCalendar(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCalendarModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!room) return null;

  return (
    <>
      <div className="relative top-[78px] h-fit max-lg:top-[63px] max-md:hidden md:sticky md:col-span-4">
        <div className="overflow-hidden rounded-xl shadow-lg dark:border dark:border-gray-700 dark:bg-gray-800">
          <header className="flex justify-between bg-neutral-700 p-4 text-white dark:bg-gray-900">
            <span className="font-vazirMedium text-base">نرخ هر شب از:</span>
            <span className="font-persianNums text-base">
              {room.price.toLocaleString()} تومان
            </span>
          </header>
          <div className="my-6 px-4">
            <form className="flex flex-col">
              <p className="mb-1 dark:text-white">تاریخ سفر</p>
              <div
                onClick={() => setIsShowCalendar(true)}
                className="z-30 rounded-xl border py-1"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`duration-400 mx-1 flex-1 cursor-pointer rounded-lg text-center text-gray-400 transition-all ${isShowCalendar ? 'border border-blue-500 text-blue-500' : 'border border-transparent'}`}
                  >
                    {dates[0] ? (
                      <p className="flex flex-col">
                        <span className="text-[12px]">ورود</span>
                        <span className='text-gray-700'>{dates[0].format()}</span>
                      </p>
                    ) : (
                      'تاریخ ورود'
                    )}
                    {/* {formatDate(dates[0] as DateObject)} */}
                  </div>
                  <div className="h-6 w-0.5 bg-gray-200"></div>
                  <div className="flex-1 cursor-pointer text-center text-gray-400">
                  {dates[1] ? (
                      <p className="flex flex-col">
                        <span className="text-[12px]">خروج</span>
                        <span className='text-gray-700'>{dates[1].format()}</span>
                      </p>
                    ) : (
                      'تاریخ خروج'
                    )}
                  </div>
                </div>
              </div>
              <label htmlFor="" className="my-5 flex flex-col dark:text-white">
                تعداد نفرات
                <select
                  name=""
                  id=""
                  className="mt-1 rounded-xl border bg-transparent px-4 py-2 text-gray-400 outline-none"
                >
                  <option value="" className="text-gray-500">
                    تعداد نفرات را مشخص کنید
                  </option>
                  <option value="1" className="font-persianNums text-gray-700">
                    1 نفر
                  </option>
                  <option value="2" className="font-persianNums text-gray-700">
                    2 نفر
                  </option>
                  <option value="3" className="font-persianNums text-gray-700">
                    3 نفر
                  </option>
                  <option value="4" className="font-persianNums text-gray-700">
                    4 نفر
                  </option>
                  <option value="5" className="font-persianNums text-gray-700">
                    5 نفر
                  </option>
                  <option value="6" className="font-persianNums text-gray-700">
                    6 نفر
                  </option>
                </select>
                <p className="mt-1 text-[12px] text-gray-500 dark:text-gray-200">
                  تا 1 کودک زیر 5 سال در صورتحساب لحاظ نمی گردد.
                </p>
              </label>
              <Button style="font-vazirMedium relative bg-yellow-400 hover:bg-yellow-500 rounded-full w-full my-5">
                ثبت درخواست رزرو{' '}
                <span className="font-vazirMedium text-[12px]">(رایگان)</span>
              </Button>
            </form>
            <p className="mb-4 flex items-center justify-center gap-2 text-center text-[13px] text-gray-600 dark:text-gray-100">
              <IoChatbubblesOutline size={18} />
              با امکان چت آنلاین با میزبان
              <div
                className="relative"
                onMouseEnter={() => setIsShowInfo(true)}
                onMouseLeave={() => setIsShowInfo(false)}
              >
                <IoMdInformationCircleOutline
                  size={18}
                  className="text-sky-500"
                />
                <div
                  className={`absolute -left-2 -top-20 whitespace-nowrap rounded-lg bg-neutral-700 px-5 py-3 text-sm leading-6 text-white shadow-lg after:absolute after:-bottom-1 after:left-3 after:h-2 after:w-2 after:rotate-45 after:bg-neutral-700 ${isShowInfo ? 'block' : 'hidden'}`}
                >
                  برای چت با میزبان ابتدا درخواست رزرو
                  <br /> (رایگان) خود را ثبت نمایید.
                </div>
              </div>
            </p>
            <div className="flex flex-col gap-3 lg:flex-row">
              <Button
                onClick={openGuaranteeModal}
                style="dark:text-gray-50 dark:border-gray-300 flex items-center gap-2 bg-transparent rounded-xl border-2 border-gray-100 hover:border-gray-200 hover:shadow-none w-full"
              >
                <GoShieldCheck />
                ضمانت تحویل
              </Button>
              <Button
                onClick={openFqlModal}
                style="dark:text-gray-50 dark:border-gray-300 flex items-center gap-2 bg-transparent rounded-xl border-2 border-gray-100 hover:border-gray-200 hover:shadow-none w-full"
              >
                <GoQuestion />
                راهنمای رزرو
              </Button>
            </div>
          </div>
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0 top-24 z-10 rounded-xl border bg-white shadow-lg shadow-gray-500 ${isShowCalendar ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          <div className="relative scale-90 pt-5">
            <CalendarFunc />
            <button
              onClick={closeCalendarModal}
              className="absolute -right-5 -top-3 h-6 w-6 font-vazirBold text-3xl text-black/40 transition-all hover:text-black"
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomSidebar;
