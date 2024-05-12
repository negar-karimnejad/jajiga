import { CiClock1 } from 'react-icons/ci';
import { useParams } from 'react-router-dom';
import useRoom from '../../../hooks/useRoom';

function RoomRules() {
  const { id } = useParams();
  const { room } = useRoom(Number(id));

  if (!room) return null;
  return (
    <>
      <div className="mt-5">
        <h4 className="mb-3 font-vazirBold text-lg" title="مقررات لغو رزرو">
          مقررات لغو رزرو
        </h4>
        <div>
          <div
            className="leading-6 text-gray-600 dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: room.cancellation_policy }}
          ></div>
        </div>
        <div className="my-5 h-[1px] w-full bg-gray-200"></div>
      </div>

      <div className="mt-5" id="mapRef">
        <div>
          <h4 className="mb-3 font-vazirBold text-lg">مقررات اقامتگاه</h4>
          <div className="mb-5 flex gap-4 ">
            <div className="w-36 rounded-lg border border-gray-100 p-2 text-center">
              <p className="flex items-center gap-2">
                <CiClock1 /> ساعت ورود از
              </p>
              <p className="font-vazirBold">
                {room.entrance_hour} ظهر تا نامحدود
              </p>
            </div>
            <div className="w-36 rounded-lg border border-gray-100 p-2 text-center">
              <p className="flex items-center gap-2">
                <CiClock1 /> ساعت خروج تا
              </p>
              <p className="font-vazirBold">{room.leaving_hour} ظهر</p>
            </div>
          </div>
          <ul className="flex list-disc flex-col gap-2 pr-5 text-sm text-gray-600 dark:text-gray-400">
            <li>برگزاری مهمانی و پخش موزیک ممنوع است.</li>
            <li>همراه داشتن حیوان خانگی ممنوع است.</li>
            <li>
              استعمال دخانیات (سیگار، قلیان و ...) در داخل اقامتگاه ممنوع است.
            </li>
            <li>
              <span className="font-vazirBold">مدارک مورد نیاز: </span>
              کارت ملی هوشمند یا شناسنامه
            </li>
            {room.residence_policy &&
              room.residence_policy.map((policy, index) => (
                <li className='leading-7' key={index}>{policy}</li>
              ))}
          </ul>
        </div>
        <div className="my-5 h-[1px] w-full bg-gray-200"></div>
      </div>
    </>
  );
}

export default RoomRules;
