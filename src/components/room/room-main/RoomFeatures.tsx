import { useState } from 'react';
import { FaSwimmingPool } from 'react-icons/fa';
import { GiBarbecue, GiHomeGarage, GiVacuumCleaner } from 'react-icons/gi';
import { LiaCouchSolid, LiaTemperatureHighSolid } from 'react-icons/lia';
import { MdElectricalServices, MdOutlineKitchen } from 'react-icons/md';
import {
  PiInfoDuotone,
  PiShower,
  PiTelevision,
  PiToilet,
} from 'react-icons/pi';
import { TbToolsKitchen2, TbUserShield } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import useRoom from '../../../hooks/useRoom';

function RoomFeatures() {
  const [isShowInfo, setIsShowInfo] = useState(false);
  const { id } = useParams();
  const { room } = useRoom(Number(id));

  if (!room) return;
  return (
    <div className="mt-5">
      <h4 className="mb-3 font-vazirBold text-lg">امکانات</h4>
      <div className="flex gap-32">
        <div className="flex flex-col gap-3">
          {room.features?.map((feature, index) => (
            <p
              key={index}
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-100"
            >
              <FaSwimmingPool size={20} />
              {feature}
            </p>
          ))}
          <p
            onMouseEnter={() => setIsShowInfo(true)}
            onMouseLeave={() => setIsShowInfo(false)}
            className="relative flex items-center gap-2 text-sm text-gray-700 dark:text-gray-100"
          >
            <GiHomeGarage size={20} /> پارکینگ
            <PiInfoDuotone
              size={18}
              className="text-blue-700 dark:text-blue-400"
            />
            <div
              className={`absolute bottom-6 right-2.5 whitespace-nowrap rounded-lg bg-neutral-700 p-2 text-[13px] leading-6 text-white shadow-lg after:absolute after:-bottom-1 after:left-0 after:right-0 after:mx-auto after:h-2 after:w-2 after:rotate-45 after:bg-neutral-700 ${isShowInfo ? 'block' : 'hidden'}`}
            >
              روباز برای 2 خودرو در حیاط
            </div>
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-100">
            <PiShower size={20} /> حمام
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-100">
            <LiaTemperatureHighSolid size={20} /> سیستم گرمایشی
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-100">
            <MdElectricalServices size={20} /> برق و روشنایی
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-100">
            <GiBarbecue size={20} /> کباب پز
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-100">
            <PiTelevision size={20} /> تلویزیون
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-100">
            <PiToilet size={20} />
            توالت فرنگی
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-100">
            <MdOutlineKitchen size={20} /> یخچال
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-100">
            <GiVacuumCleaner size={20} />
            جاروبرقی
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-100">
            <LiaCouchSolid size={20} /> مبلمان
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-100">
            <TbUserShield size={20} /> سرایدار
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-100">
            <TbToolsKitchen2 size={20} /> وسایل آشپزخانه
          </p>
        </div>
      </div>
      <div className="my-5 h-[1px] w-full bg-gray-200"></div>
    </div>
  );
}

export default RoomFeatures;
