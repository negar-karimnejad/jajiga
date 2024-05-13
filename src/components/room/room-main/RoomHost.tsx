import { Link } from 'react-router-dom';
import { useHost } from '../../../hooks/useHost';
import { Room } from '../../../redux/store/room';
import convertToPersianDate from '../../../utilities/convertToPersianDate';
import RoomHostSkeleton from '../../ui/skeleton/RoomHostSkeleton';

function RoomHost({ room }: { room: Room }) {
  const { host, loading } = useHost(room?.host_id);

  if (!host) return null;
  if (loading) return <RoomHostSkeleton />;
  const {
    id,
    fullname,
    profile,
    registery_date,
    reservation_confirmation,
    response_time,
  } = host;

  return (
    <div>
      <h4 className="mb-5 font-vazirBold text-lg">میزبان</h4>
      <div className="mr-2">
        <div className="flex justify-between">
          <div>
            <h4 className="mb-2 font-vazirBold">{fullname}</h4>
            <p className="mb-4 font-persianNums text-sm text-gray-400">
              عضو جاجیگا از {convertToPersianDate(registery_date)}
            </p>
          </div>
          <img
            alt={fullname}
            src={profile}
            className="h-16 w-16 rounded-full object-cover object-top"
          />
        </div>
        <p className="mb-3 font-persianNums text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-gray-800 dark:text-gray-100">
            سرعت پاسخ‌گویی:{' '}
          </strong>
          کمتر از {response_time} دقیقه
        </p>
        <p className="mb-3 font-persianNums text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-gray-800 dark:text-gray-100">
            میزان تأیید رزرو:{' '}
          </strong>
          {reservation_confirmation} درصد
        </p>
      </div>
      <div className="mt-3 w-full rounded-full bg-gray-100 py-3 text-center text-sm text-gray-600 transition-all hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">
        <Link to={`/user/${id}`} className="font-vazirBold">
          مشاهده حساب کاربری میزبان »
        </Link>
      </div>
    </div>
  );
}

export default RoomHost;
