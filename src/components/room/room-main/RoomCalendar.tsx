import { useEffect, useState } from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { CiCircleQuestion } from 'react-icons/ci';
import { IoTrashOutline } from 'react-icons/io5';
import { Calendar, Value } from 'react-multi-date-picker';
import weekends from 'react-multi-date-picker/plugins/highlight_weekends';
import 'react-multi-date-picker/styles/layouts/mobile.css';
import { useParams } from 'react-router-dom';
import useRoom from '../../../hooks/useRoom';
import Button from '../../ui/Button';

function RoomCalendar() {
  const [value, setValue] = useState<Value>(new Date());
  const { id } = useParams();
  const { room } = useRoom(Number(id));

  const handleChange = (dates: Value) => {
    setValue(dates);
  };

  const [numberOfMonths, setNumberOfMonths] = useState(() => {
    return window.innerWidth > 1100 ? 2 : 1; // Initial value based on window width
  });

  useEffect(() => {
    const handleResize = () => {
      setNumberOfMonths(window.innerWidth > 1100 ? 2 : 1); // Update numberOfMonths based on window width
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const weekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
  // const holidays = ['2024-05-06', '2024-05-07', '2024-05-08'];

  if (!room) return;
  return (
    <div className="mt-5" id="calenderRef">
      <div className="space-y-5">
        <div className="flex items-center gap-5 rounded-lg border p-3">
          <svg
            fill="currentColor"
            viewBox="0 0 52 52"
            preserveAspectRatio="xMidYMid meet"
            className="h-14 w-14 fill-yellow-400"
          >
            <path
              d="m7.4 44 1.1-.4c.3-.1.6-.1.9 0 .3.1.5.3.7.6s.1.6 0 .9c-.1.3-.4.5-.7.6l-1.1.4.5 1.1c.1.3.1.6 0 .9-.1.3-.4.5-.7.6-.3.1-.6.1-.9 0s-.5-.3-.7-.6L6.1 47l-1.1.5c-.3.1-.6.1-.9 0-.3-.1-.5-.3-.7-.6-.1-.3-.1-.6 0-.9.1-.3.4-.5.7-.6l1.1-.4-.5-1.1c-.1-.3-.1-.6 0-.9.1-.3.4-.5.7-.6.3-.1.6-.1.9 0 .3.1.5.3.7.6l.4 1zM8 7c0 1.7-1.3 3-3 3S2 8.7 2 7s1.3-3 3-3 3 1.3 3 3zM52 49.5c0 1.4-1.1 2.5-2.5 2.5S47 50.9 47 49.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5z"
              className="st0"
            ></path>
            <path
              d="M27 40.2c.4 0 .8-.3.8-.7l.4-3c.6-4.4 4-7.9 8.4-8.4l3-.4c.4-.1.7-.4.7-.8s-.3-.8-.7-.8l-3-.4c-4.4-.6-7.9-4-8.4-8.4l-.4-3c-.1-.4-.4-.7-.8-.7s-.8.3-.8.7l-.4 3c-.6 4.4-4 7.9-8.4 8.4l-3 .4c-.4.1-.7.4-.7.8s.3.8.7.8l3 .4c4.4.6 7.9 4 8.4 8.4l.4 3c0 .3.4.7.8.7z"
              className="fill-yellow-400"
            ></path>
            <path
              d="M27 40.9c-.8 0-1.5-.6-1.6-1.4l-.4-3c-.5-4-3.7-7.3-7.8-7.8l-3-.4c-.8-.1-1.4-.8-1.4-1.6s.6-1.5 1.4-1.6l3-.4c4-.5 7.3-3.7 7.8-7.8l.4-3c.1-.8.8-1.4 1.6-1.4s1.5.6 1.6 1.4l.4 3c.5 4 3.7 7.3 7.8 7.8l3 .4c.8.1 1.4.8 1.4 1.6s-.6 1.5-1.4 1.6l-3 .4c-4 .5-7.3 3.7-7.8 7.8l-.4 3c-.1.8-.8 1.4-1.6 1.4zm0-26.7s-.1 0 0 0l-.5 3c-.6 4.7-4.4 8.5-9.1 9.1l-3 .4s-.1 0-.1.1c0 0 0 .1.1.1l3 .4c4.7.6 8.5 4.4 9.1 9.1l.4 3c0 .1.2.1.2 0l.4-3c.6-4.7 4.4-8.5 9.1-9.1l3-.4s.1 0 .1-.1c0 0 0-.1-.1-.1l-3-.4c-4.7-.6-8.5-4.4-9.1-9.1l-.5-3c.1 0 0 0 0 0z"
              className="fill-gray-800 dark:fill-white"
            ></path>
            <path
              d="M48.5 5.5h.9c.2 0 .5.1.6.3.2.2.3.4.3.6s-.2.4-.4.6c-.2.2-.4.3-.6.3h-.9v.9c0 .2-.1.4-.3.6-.2.2-.4.3-.6.3s-.4-.3-.5-.4c-.2-.2-.3-.4-.3-.6v-.9h-.9c-.2 0-.5-.1-.6-.3-.1-.1-.2-.3-.2-.5s.1-.4.3-.6c.2-.2.4-.3.6-.3h.9v-.9c0-.2.1-.4.3-.6.2-.2.4-.3.6-.3s.5.1.6.3c.2.2.3.4.3.6v.9z"
              className="st0"
            ></path>
          </svg>
          <div className="flex flex-col gap-3">
            <h3 className="font-vazirMedium text-gray-800 dark:text-white">
              اقامتگاه ممتاز
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              اقامتگاهی باکیفیت با میزبانی مهمان نواز که اقامتی شایسته را
              برایتان تضمین می‌کند.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 rounded-lg border p-3">
          <svg
            className="h-14 w-14"
            fill="none"
            viewBox="0 0 52 54"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M24.9659 38.8514L27.6041 31.304L20.6735 31.2829C20.3803 31.2829 20.15 31.0517 20.15 30.7574C20.15 30.6312 20.1919 30.5261 20.2757 30.421C22.3067 27.9192 24.3377 25.4174 26.3687 22.9156C27.3738 21.6962 28.3788 20.4558 29.4048 19.1944C29.5932 18.9632 29.9073 18.9422 30.1376 19.1103C30.3051 19.2575 30.368 19.4888 30.3051 19.699L27.646 27.2675L34.5766 27.2885C34.8697 27.2885 35.1 27.5197 35.1 27.8141C35.1 27.9402 35.0582 28.0453 34.9953 28.1294C33.0481 30.6522 30.9961 33.133 28.9441 35.6348C27.9391 36.8542 26.9341 38.0735 25.8662 39.377C25.6778 39.6082 25.3637 39.6293 25.1334 39.4611C24.9449 39.2929 24.8821 39.0616 24.9659 38.8514Z"
              fill="currentColor"
              className="fill-yellow-400"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.2535 11C29.7227 11 29.2925 11.4477 29.2925 12L29.3332 19.2558C29.7578 18.6983 30.1838 18.137 30.6128 17.5716C30.8034 17.3204 30.9947 17.0684 31.1866 16.8156C31.3783 16.5637 31.6979 16.5407 31.9322 16.724C32.1026 16.8844 32.1665 17.1363 32.1026 17.3654L29.3974 25.6122L36.448 25.6351C36.7462 25.6351 36.9805 25.8871 36.9805 26.2078C36.9805 26.3452 36.9379 26.4598 36.874 26.5514C35.1115 28.9971 33.2647 31.4066 31.4086 33.8282C31.1785 34.1284 30.9482 34.4288 30.718 34.7294C30.1966 35.407 29.6751 36.0846 29.1452 36.7744L29 43C29 43.5523 29.4303 44 29.961 44H36.312C40.558 44 44 40.4183 44 36V19C44 14.5817 40.558 11 36.312 11H30.2535ZM29.299 30.1813L29.3547 30.0105L29.303 30.0103L29.299 30.1813Z"
              fill="#DBDBDB"
              className="dark:fill-white"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.725 3.21429C37.2635 3.21429 37.7 3.7018 37.7 4.30317V11.7683C37.7 12.3696 37.2635 12.8572 36.725 12.8572C36.1865 12.8572 35.75 12.3696 35.75 11.7683V4.30317C35.75 3.7018 36.1865 3.21429 36.725 3.21429Z"
              fill="#323232"
              className="dark:fill-white"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.175 3.21429C19.7134 3.21429 20.15 3.7018 20.15 4.30317V11.7683C20.15 12.3696 19.7134 12.8572 19.175 12.8572C18.6365 12.8572 18.2 12.3696 18.2 11.7683V4.30317C18.2 3.7018 18.6365 3.21429 19.175 3.21429Z"
              fill="#323232"
              className="dark:fill-white"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.8962 9.88628C12.9227 7.9928 15.783 7.07144 19.1411 7.07144H37.4289C40.7961 7.07144 43.6575 7.99233 45.6799 9.88726C47.7102 11.7895 48.7604 14.5474 48.75 17.9488C48.75 17.9492 48.75 17.9497 48.75 17.9501L48.75 37.3187C48.75 40.72 47.6944 43.4815 45.663 45.3879C43.6389 47.2875 40.7778 48.2143 37.4089 48.2143H19.1411C15.7768 48.2143 12.9142 47.2693 10.8889 45.3399C8.85844 43.4056 7.80005 40.6063 7.80005 37.1581V17.9469C7.80005 14.5441 8.86162 11.7872 10.8962 9.88628ZM12.3247 11.3633C10.7927 12.7947 9.87347 14.9661 9.87347 17.9469V37.1581C9.87347 40.194 10.7959 42.4133 12.332 43.8765C13.8731 45.3447 16.1628 46.1763 19.1411 46.1763H37.4089C40.4027 46.1763 42.6938 45.3567 44.2312 43.9139C45.7613 42.478 46.6766 40.3012 46.6766 37.3187V17.9469L46.6766 17.9438C46.6859 14.9622 45.7753 12.7922 44.2493 11.3624C42.7152 9.92494 40.4244 9.10939 37.4289 9.10939H19.1411C16.1565 9.10939 13.8647 9.92447 12.3247 11.3633Z"
              fill="#323232"
              className="dark:fill-white"
            ></path>
            <path
              d="M50.2667 1.71429H51.1334C51.3632 1.71429 51.5837 1.80459 51.7462 1.96534C51.9087 2.12608 52 2.3441 52 2.57143C52 2.79876 51.9087 3.01677 51.7462 3.17752C51.5837 3.33827 51.3632 3.42857 51.1334 3.42857H50.2667V4.28571C50.2667 4.51304 50.1754 4.73106 50.0129 4.89181C49.8503 5.05255 49.6299 5.14286 49.4 5.14286C49.1702 5.14286 48.9498 5.05255 48.7872 4.89181C48.6247 4.73106 48.5334 4.51304 48.5334 4.28571V3.42857H47.6667C47.4369 3.42857 47.2164 3.33827 47.0539 3.17752C46.8914 3.01677 46.8 2.79876 46.8 2.57143C46.8 2.3441 46.8914 2.12608 47.0539 1.96534C47.2164 1.80459 47.4369 1.71429 47.6667 1.71429H48.5334V0.857143C48.5334 0.629814 48.6247 0.411797 48.7872 0.251051C48.9498 0.0903058 49.1702 0 49.4 0C49.6299 0 49.8503 0.0903058 50.0129 0.251051C50.1754 0.411797 50.2667 0.629814 50.2667 0.857143V1.71429Z"
              className="fill-yellow-400"
            ></path>
            <path
              d="M5.41301 47.594L6.53341 47.1334C6.83056 47.0113 7.1646 47.0109 7.46205 47.1323C7.75951 47.2537 7.996 47.4871 8.11952 47.7809C8.24303 48.0748 8.24344 48.4052 8.12066 48.6994C7.99788 48.9936 7.76197 49.2275 7.46482 49.3496L6.34442 49.8102L6.81013 50.9183C6.93365 51.2122 6.93406 51.5425 6.81128 51.8367C6.68851 52.1309 6.45259 52.3648 6.15544 52.487C5.8583 52.6091 5.52425 52.6095 5.2268 52.4881C4.92935 52.3667 4.69285 52.1333 4.56933 51.8395L4.10363 50.7314L2.98323 51.192C2.68608 51.3141 2.35204 51.3145 2.05459 51.1931C1.75713 51.0717 1.52064 50.8384 1.39712 50.5445C1.27361 50.2506 1.2732 49.9202 1.39598 49.626C1.51875 49.3319 1.75467 49.098 2.05182 48.9758L3.17221 48.5152L2.7065 47.4071C2.58299 47.1132 2.58258 46.7829 2.70536 46.4887C2.82814 46.1945 3.06405 45.9606 3.3612 45.8384C3.65835 45.7163 3.99239 45.7159 4.28984 45.8373C4.5873 45.9587 4.82379 46.1921 4.9473 46.4859L5.41301 47.594Z"
              className="fill-yellow-400"
            ></path>
            <path
              d="M7 5C7 6.65685 5.65685 8 4 8C2.34315 8 1 6.65685 1 5C1 3.34315 2.34315 2 4 2C5.65685 2 7 3.34315 7 5Z"
              className="fill-yellow-400"
            ></path>
            <path
              d="M52 49.5C52 50.8807 50.8807 52 49.5 52C48.1193 52 47 50.8807 47 49.5C47 48.1193 48.1193 47 49.5 47C50.8807 47 52 48.1193 52 49.5Z"
              className="fill-yellow-400"
            ></path>
          </svg>
          <div className="flex flex-col gap-3">
            <h3 className="font-vazirMedium text-gray-800 dark:text-white">
              رزرو فوری
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              در این روزها رزرو در یک مرحله و بدون نیاز به تایید میزبان قطعی می
              شود.
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-vazirMedium text-lg" title="تقویم / نرخ">
            تقویم / نرخ
          </h3>
          <div>
            <Calendar
              value={value}
              onChange={handleChange}
              className="custom-calendar mt-5 !w-full !border-0 dark:bg-white"
              numberOfMonths={numberOfMonths}
              locale={persian_fa}
              calendar={persian}
              shadow={false}
              zIndex={0}
              range
              plugins={[weekends()]}
              weekDays={weekDays}
              minDate={new Date()}
              maxDate={
                new Date(new Date().getFullYear(), new Date().getMonth() + 2)
              }
            />
            <div className="mb-5 mt-2 flex items-center justify-between">
              <Button
                style="bg-gray-100 font-vazirMedium rounded-md text-[12px] flex gap-2 items-center"
                type="button"
              >
                <CiCircleQuestion size={20} />
                راهنمای تقویم
              </Button>
              <Button
                style="border-2 border-gray-300 hover:shadow-none dark:text-gray-300 dark:border-gray-400 dark:hover:border-gray-200 hover:border-gray-400 border-dashed font-vazirMedium rounded-md text-sm flex gap-2 items-center"
                type="button"
              >
                <IoTrashOutline size={20} />
                پاک کردن
              </Button>
            </div>
          </div>
          <div className="my-2 flex gap-3 text-sm">
            <strong className="dark:text-gray-200">
              ارقام به تومان می‌باشند
            </strong>
            <span></span>
          </div>
          <div className="my-2 flex gap-3 text-sm dark:text-gray-400">
            <strong className="dark:text-gray-200">نرخ هر نفر اضافه:</strong>
            <span>
              +
              <span className="font-persianNums">
                {room.extra_person_charge?.toLocaleString()}
              </span>{' '}
              تومان / بیشتر از{' '}
              <span className="font-persianNums">{room.capacity}</span> نفر
            </span>
          </div>
          {room.discount?.map((dis, index) => (
            <div
              key={index}
              className="my-2 flex gap-3 text-sm dark:text-gray-400"
            >
              <strong className="dark:text-gray-200">
                تخفیف رزرو بیش از{' '}
                <span className="font-persianNums">{dis.day}</span> شب:
              </strong>
              <span>
                <span className="font-persianNums">{dis.off}</span> درصد
              </span>
            </div>
          ))}
          {room.min_stay && (
            <div className="my-2 flex gap-3 text-sm dark:text-gray-400">
              <strong className="dark:text-gray-200">حداقل اقامت:</strong>
              <span>
                <span className="font-persianNums">{room.min_stay}</span> شب
              </span>
            </div>
          )}
          {room.max_stay && (
            <div className="my-2 flex gap-3 text-sm dark:text-gray-400">
              <strong className="dark:text-gray-200">حداکثر اقامت:</strong>
              <span>
                <span className="font-persianNums">{room.max_stay}</span> شب
              </span>
            </div>
          )}
          <div className="my-5 h-[1px] w-full bg-gray-200"></div>
        </div>{' '}
      </div>
    </div>
  );
}

export default RoomCalendar;
