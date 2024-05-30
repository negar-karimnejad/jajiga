import moment from 'jalali-moment';
import { GoChevronLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { Trip } from '../../redux/store/trips';

function TripCard({ trip }: { trip: Trip }) {
  const inputDate = '۱۴۰۳/۰۳/۱۴';

  // Parse the Jalali date
  const jalaliMoment = moment(inputDate, 'jYYYY/jMM/jDD').locale('fa');

  // Define arrays for Persian months and weekdays
  const persianMonths = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];

  const persianWeekdays = [
    'شنبه',
    'یک‌شنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنج‌شنبه',
    'جمعه',
  ];

  // Format the date
  const day = jalaliMoment.jDate();
  const month = persianMonths[jalaliMoment.jMonth()];
  const weekday = persianWeekdays[jalaliMoment.day()];

  const jalaliDate = moment('1403/03/14', 'jYYYY-jMM-jDD');

  // Format the date to show day, month, and weekday in Persian
  const formattedDate = jalaliDate.locale('fa').format('DD MMMM dddd');

  console.log(formattedDate); // Outputs: 14 خرداد دوشنبه
  return (
    <div className="relative rounded-xl shadow-md">
      <Link to={`/room/${trip.room.code}`} className="group">
        <div className="relative">
          <div className="absolute inset-0 bottom-0 left-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="cursor-pointer transition-all">
            <img
              loading="lazy"
              src={trip.room.images[0]}
              className="h-48 w-full rounded-xl object-cover"
              alt={trip.room.title}
            />
          </div>
          <div className="absolute bottom-2 right-2 z-10 w-[80%] overflow-hidden text-ellipsis whitespace-nowrap font-vazirBold text-white">
            <p>{trip.room.title}</p>
          </div>
          <div className="absolute -bottom-7 left-2 z-10">
            <img
              alt={trip.room.host.fullname}
              src={trip.room.host.profile}
              className="h-14 w-14 rounded-full border-2 border-white object-cover object-top"
            />
          </div>
        </div>

        <div className="mb-5 mt-2 flex items-end justify-between px-2 text-gray-600">
          <div className="space-y-5 text-sm">
            <div className="flex">
              <div className="space-y-2">
                <p className="font-vazirBold ">
                  <span className="font-persianNums">{enterDay}</span>{' '}
                  {enterMonth}
                </p>
                <p className="text-sm">{enterWeekday}</p>
              </div>
              <div>
                <GoChevronLeft size={52} />
              </div>
              <div className="space-y-2">
                <p className="font-vazirBold">
                  <span className="font-persianNums">{exitDay}</span>{' '}
                  {exitMonth}
                </p>
                <p className="text-sm">{exitWeekday}</p>
              </div>
            </div>
            <div className="font-bold">
              <span className="font-persianNums">{trip.numbers}</span> نفر{' '}
              <span className="font-light">به مدت</span>{' '}
              <span className="font-persianNums">{trip.nights}</span> شب
            </div>
          </div>
          <div className="space-y-5 text-left">
            <p>{trip.room.host.fullname}</p>
            <p className="text-sm font-bold">
              <span className="font-persianNums">
                مبلغ: {trip.cost.toLocaleString()}
              </span>{' '}
              <span className="text-[12px]">تومان</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TripCard;
