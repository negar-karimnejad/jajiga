import moment from 'jalali-moment';
import { GoChevronLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { Trip } from '../../redux/store/trips';
import Button from '../ui/Button';

interface TripCardProps {
  trip: Trip;
  deleteHandler: (id: number) => void;
}

function TripCard({ trip, deleteHandler }: TripCardProps) {
  if (!trip) return null;

  const enterDate = moment.unix(Number(trip.enter) / 1000).locale('fa');
  const ExitDate = moment.unix(Number(trip.exit) / 1000).locale('fa');

  const enterWeekday = enterDate.format('dddd');
  const enterDay = enterDate.format('jD');
  const enterMonth = enterDate.format('jMMMM');

  const ExitWeekday = ExitDate.format('dddd');
  const ExitDay = ExitDate.format('jD');
  const ExitMonth = ExitDate.format('jMMMM');

  return (
    <div className="relative rounded-xl shadow-md dark:shadow-gray-950">
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
              alt={trip?.room?.host?.fullname}
              src={trip?.room?.host?.profile}
              className="h-14 w-14 rounded-full border-2 border-white object-cover object-top"
            />
          </div>
        </div>

        <div className="mb-5 mt-2 flex items-end justify-between px-2 text-gray-600 dark:text-white">
          <div className="space-y-5 text-sm">
            <div className="flex">
              <div className="space-y-2">
                <p className="font-vazirBold">
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
                  <span className="font-persianNums">{ExitDay}</span>{' '}
                  {ExitMonth}
                </p>
                <p className="text-sm">{ExitWeekday}</p>
              </div>
            </div>
            <div>
              <span className="font-persianNums">{trip.numbers}</span> نفر{' '}
              <span className="font-light">به مدت</span>{' '}
              <span className="font-persianNums">{trip.nights}</span> شب
            </div>
          </div>
          <div className="space-y-5 text-left">
            <p>{trip?.room?.host?.fullname}</p>
            <p className="text-sm ">
              <span className="font-persianNums">
                مبلغ: {trip.cost.toLocaleString()}
              </span>{' '}
              <span className="text-[12px]">تومان</span>
            </p>
          </div>
        </div>
      </Link>
      <div className="mb-3 mt-8 text-center">
        <Button
          onClick={() => deleteHandler(trip.id)}
          style="bg-red-500 text-white w-11/12 rounded-md hover:bg-red-600"
        >
          حذف رزرو
        </Button>
      </div>
    </div>
  );
}

export default TripCard;
