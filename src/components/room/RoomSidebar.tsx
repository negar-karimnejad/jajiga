import { useEffect, useState } from 'react';
import { GoQuestion, GoShieldCheck } from 'react-icons/go';
import { IoIosClose, IoMdInformationCircleOutline } from 'react-icons/io';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useCalendarContext } from '../../context/CalendarContext';
import { useAuth } from '../../hooks/useAuth';
import { useAuthModal } from '../../hooks/useAuthModal';
import useRoom from '../../hooks/useRoom';
import useTrips from '../../hooks/useTrips';
import { Trip } from '../../redux/store/trips';
import Button from '../ui/Button';
import CalendarFunc from '../ui/calendar';

function RoomSidebar({
  openFqlModal,
  openGuaranteeModal,
}: {
  openFqlModal: () => void;
  openGuaranteeModal: () => void;
}) {
  const navigate = useNavigate();

  const [isShowInfo, setIsShowInfo] = useState(false);
  const [numbers, setNumbers] = useState(-1);
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [numbersError, setNumbersError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCost, setShowCost] = useState(false);

  const { id } = useParams();
  const { room } = useRoom(Number(id));
  const { dates, setDates, calculateNights } = useCalendarContext();
  const { user } = useAuth();
  const { trips, addTrip } = useTrips();
  const { openModalHandler } = useAuthModal();
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

  useEffect(() => {
    if (dates[1]) {
      closeCalendarModal();
    }
  }, [dates]);

  useEffect(() => {
    if (dates[0] || dates[1]) {
      setDateError(false);
    }

    if (numbers !== -1) {
      setNumbersError(false);
    }

    if (numbers !== -1 && dates[0] && dates[1]) {
      setShowCost(true);
      setLoading(true);
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [dates, numbers]);

  if (!room) return null;

  const nights = calculateNights();

  const closeCalendarModal = () => {
    setIsShowCalendar(false);
  };

  const reservationHandler = async () => {
    if (!dates[0] || !dates[1]) {
      setDateError(true);
    }
    if (numbers === -1) {
      setNumbersError(true);
    } else {
      if (!user) {
        openModalHandler();
      } else {
        const existedTrip = trips.find(
          (trip) =>
            trip.room.id === room.id &&
            trip.userId === user.id &&
            trip.enter === dates[0].format(),
        );
        console.log(existedTrip);

        if (existedTrip) {
          Swal.fire({
            title: 'این اقامتگاه را قبلا رزرو کرده اید.',
            toast: true,
            showConfirmButton: false,
            position: 'top-right',
            icon: 'error',
            timerProgressBar: true,
            timer: 2000,
          });
          return;
        } else {
          const newTrip: Trip = {
            id: Math.floor(Math.random() * 100),
            enter: dates[0].format(),
            exit: dates[1].format(),
            room: room,
            nights: nights,
            numbers,
            cost: totalPrice,
            userId: user.id,
          };
          try {
            await addTrip(newTrip);
            Swal.fire({
              title: 'اقامتگاه با موفقیت رزرو شد.',
              toast: false,
              position: 'center',
              showConfirmButton: true,
              showCancelButton: true,
              icon: 'success',
              customClass: { icon: 'm-auto mt-4' },
              confirmButtonText: 'برو به سفرها',
              cancelButtonText: 'باشه',
            }).then((result) => {
              if (result.isConfirmed) {
                setDates([null, null]);
                setNumbers(-1);
                setShowCost(false);
                navigate('/trips');
              }
            });
          } catch (error) {
            Swal.fire({
              text: 'متاسفانه عملیات انجام نشد',
              toast: true,
              timer: 5000,
              position: 'top-right',
              showConfirmButton: false,
              icon: 'error',
            });
          }
        }
      }
    }
  };

  const totalPrice =
    numbers > room?.capacity
      ? room?.extra_person_charge + nights * room?.price
      : nights * room?.price;

  return (
    <>
      <div className="relative top-0 h-fit max-lg:top-[63px] max-md:hidden md:sticky md:col-span-4">
        <div className="overflow-hidden rounded-xl shadow-lg dark:border dark:border-gray-700 dark:bg-gray-800">
          <header className="flex justify-between bg-neutral-700 p-4 text-white dark:bg-gray-900">
            <span className="font-vazirMedium text-base">نرخ هر شب از:</span>
            <span className="font-persianNums text-base">
              {room.price.toLocaleString()} تومان
            </span>
          </header>
          <div className="my-5 px-4">
            <form className="flex flex-col">
              <p className="mb-1 dark:text-white">تاریخ سفر</p>
              <div
                onClick={() => setIsShowCalendar(true)}
                className={`z-30 rounded-xl border py-1 ${dateError ? ' border-red-500' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`duration-400 mx-1 flex-1 cursor-pointer rounded-lg text-center text-gray-400 transition-all ${isShowCalendar ? 'border border-blue-500 text-blue-500' : 'border border-transparent'}`}
                  >
                    {dates[0] ? (
                      <p className="flex flex-col">
                        <span className="text-[12px]">ورود</span>
                        <span className="text-gray-700">
                          {dates[0].format()}
                        </span>
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
                        <span className="text-gray-700">
                          {dates[1].format()}
                        </span>
                      </p>
                    ) : (
                      'تاریخ خروج'
                    )}
                  </div>
                </div>
              </div>
              {dateError && (
                <p className="font-vazirMedium text-[12px] text-red-600">
                  تاریخ سفر را مشخص کنید
                </p>
              )}
              <label
                htmlFor="numbers"
                className="my-4 flex flex-col dark:text-white"
              >
                تعداد نفرات
                <select
                  name="numbers"
                  id="numbers"
                  value={numbers}
                  onChange={(e) => setNumbers(Number(e.target.value))}
                  className={`mt-1 rounded-xl border bg-transparent px-4 py-2 text-gray-700 outline-none ${numbersError ? ' border-red-500' : ''}`}
                >
                  <option value={-1} className="text-gray-500">
                    تعداد نفرات را مشخص کنید
                  </option>
                  {Array.from({ length: room.max_capacity }).map((_, index) => (
                    <option
                      key={index}
                      value={index + 1}
                      className="font-persianNums text-gray-700"
                    >
                      {room.capacity >= index + 1
                        ? `${index + 1} نفر`
                        : `${index + 1} نفر (${room.capacity} نفر + ${index + 1 - room.capacity} نفر اضافه)`}
                    </option>
                  ))}
                </select>
                {numbersError ? (
                  <p className="font-vazirMedium text-[12px] text-red-600">
                    تعداد نفرات را مشخص کنید
                  </p>
                ) : (
                  <p className="mt-1 text-[12px] text-gray-500 dark:text-gray-200">
                    تا 1 کودک زیر 5 سال در صورتحساب لحاظ نمی گردد.
                  </p>
                )}
              </label>
              {loading ? (
                <div className="flex min-h-40 items-center justify-center">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="spin-loader"></div>
                  </div>
                </div>
              ) : (
                showCost && (
                  <div className="my-1 w-full rounded-md border border-gray-100 p-2 shadow-md">
                    <div className="mb-3 flex items-center justify-between border border-dashed bg-gray-50 p-1 text-sm text-gray-600">
                      <p className="flex items-center gap-0.5">
                        <span className="font-persianNums">{nights}</span> شب{' '}
                        <IoIosClose />{' '}
                        <span className="font-persianNums">
                          {room.price.toLocaleString()}{' '}
                        </span>
                        تومان
                      </p>
                      <p>
                        <span className="font-persianNums">
                          {(numbers > room.max_capacity
                            ? room.extra_person_charge + room.price * nights
                            : room.price * nights
                          ).toLocaleString()}
                        </span>{' '}
                        تومان
                      </p>
                    </div>
                    {numbers > room.capacity && (
                      <div className="flex  items-center justify-between text-sm text-gray-600">
                        <p>هزینه نفرات اضافه</p>
                        <p>
                          <span className="font-persianNums">
                            {numbers > room.capacity &&
                              (
                                (numbers - room.capacity) *
                                room?.extra_person_charge
                              ).toLocaleString()}
                          </span>{' '}
                          تومان
                        </p>
                      </div>
                    )}
                    <div className="my-3 flex items-center justify-between border-t border-dashed py-1 text-sm">
                      <p className="font-vazirBold">مبلغ صورتحساب</p>
                      <p className="font-vazirBold">
                        <span className="font-persianNums font-bold">
                          {totalPrice.toLocaleString()}
                        </span>{' '}
                        تومان
                      </p>
                    </div>
                    <div className="my-3 flex items-center justify-between border-t border-dashed py-1 text-sm">
                      <p className="font-vazirBold">مبلغ قابل پرداخت</p>
                      <p className="font-vazirBold">
                        <span className="font-persianNums font-bold">
                          {totalPrice.toLocaleString()}
                        </span>{' '}
                        تومان
                      </p>
                    </div>
                  </div>
                )
              )}
              <Button
                onClick={reservationHandler}
                style="font-vazirMedium relative bg-yellow-400 hover:bg-yellow-500 rounded-full w-full my-5"
              >
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
