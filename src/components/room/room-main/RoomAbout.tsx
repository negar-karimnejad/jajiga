import { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { HiOutlineHome } from 'react-icons/hi';
import { LiaDoorOpenSolid } from 'react-icons/lia';
import { LuBedDouble, LuBedSingle } from 'react-icons/lu';
import { PiInfoDuotone, PiUsersThree } from 'react-icons/pi';
import { TfiRulerPencil } from 'react-icons/tfi';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import { useHost } from '../../../hooks/useHost';
import useRoom from '../../../hooks/useRoom';
import Button from '../../ui/Button';

function RoomAbout() {
  const { id } = useParams();
  const { room } = useRoom(Number(id));
  const { host } = useHost(room?.host_id);
  const [isShowInfo, setIsShowInfo] = useState(false);

  if (!room) return null;

  return (
    <>
      <div className="-mt-5 flex items-center justify-between">
        <h4 className="font-vazirBold text-base dark:text-white">
          {room.title}
        </h4>
        <div className="h-16 w-16">
          <img src={host?.profile} className="rounded-full w-full h-full object-cover object-top" alt="" />
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2">
        <Button style="font-persianNums text-[13px] bg-yellow-500 rounded-full py-1 hover:shadow-none ">
          کد: {room.code}
        </Button>
        <Button style="cursor-default font-persianNums text-[13px] bg-gray-200 rounded-full py-1 hover:shadow-none ">
          {room.reserved}+ رزرو موفق
        </Button>
        <div className="flex gap-0.5">
          <Rating
            initialRating={room.rating?.total}
            fullSymbol={<BsStarFill />}
            emptySymbol={<BsStar />}
            readonly={true}
            className="text-yellow-400"
          />
        </div>
        <span className="font-persianNums text-[12px] text-gray-500 dark:text-gray-300">
          {room.rating?.total}
        </span>
        <span className="font-persianNums text-[12px] text-gray-500 dark:text-gray-300">
          ({room.reviews} نظر)
        </span>
      </div>

      <div className="mt-5 flex items-center justify-around bg-gray-100 p-5 dark:bg-gray-800 max-sm:px-0">
        <div className="flex flex-col items-center gap-2">
          <HiOutlineHome className="dark:text-gray-200" size={30} />
          <div className="font-persianNums text-[13px] dark:text-gray-200">
            {room.share_house ? (
              <p
                onMouseEnter={() => setIsShowInfo(true)}
                onMouseLeave={() => setIsShowInfo(false)}
                className="relative flex items-center gap-1 text-sm text-gray-700 dark:text-gray-100"
              >
                نیمه دربست
                <PiInfoDuotone
                  size={18}
                  className="text-blue-700 dark:text-blue-400"
                />
                <div
                  className={`absolute w-52 bottom-6 -right-5 rounded-lg bg-neutral-700 p-3 text-[13px] leading-6 text-white shadow-lg after:absolute after:-bottom-1 after:left-0 after:right-0 after:mx-auto after:h-2 after:w-2 after:rotate-45 after:bg-neutral-700 ${isShowInfo ? 'block' : 'hidden'}`}
                >
                  در این حالت یک واحد مستقل در اختیار میهمان قرار می گیرد ولی
                  مواردی همچون ورودی اقامتگاه و یا حیاط و محوطه با میزبان یا
                  میهمانان دیگر مشترک است.
                </div>
              </p>
            ) : (
              'دربست'
            )}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <LiaDoorOpenSolid className="dark:text-gray-200" size={30} />
          <span className="font-persianNums text-[13px] dark:text-gray-200">
            {room.bedroom} اتاق خواب
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <PiUsersThree className="dark:text-gray-200" size={30} />
          <span className="font-persianNums text-[13px] dark:text-gray-200">
            تا {room.max_capacity} مهمان
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TfiRulerPencil className="dark:text-gray-200" size={30} />
          <span className="font-persianNums text-[13px] dark:text-gray-200">
            {room.foundation_meterage} متر
          </span>
        </div>
      </div>
      <div className="mt-5">
        <h4 className="mb-5 font-vazirBold text-lg">درباره اقامتگاه</h4>
        <strong className="text-gray-900 dark:text-gray-100">
          {room.title}
        </strong>
        <div
          className="mt-1 text-sm leading-7 text-gray-600 dark:text-gray-400 max-md:text-justify"
          dangerouslySetInnerHTML={{ __html: room.description }}
        ></div>
        <div className="my-5 h-[1px] w-full bg-gray-200"></div>
      </div>
      <div className="mt-5">
        <h4 className="mb-3 font-vazirBold text-lg">فضای اقامتگاه</h4>
        <div className="grid-cols-3 max-md:flex max-md:gap-10 md:grid">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 text-sm">
              <h5 className="font-vazirBold">ظرفیت استاندارد:</h5>
              <p className="font-persianNums text-gray-600 dark:text-gray-400">
                {room.capacity} نفر
              </p>
            </div>
            <div className="flex gap-2 text-sm">
              <h5 className="font-vazirBold">متراژ زیربنا:</h5>
              <p className="font-persianNums text-gray-600 dark:text-gray-400">
                {room.foundation_meterage} متر
              </p>
            </div>
            <div className="flex gap-2 text-sm">
              <h5 className="font-vazirBold">نوع اقامتگاه:</h5>
              <p className="font-persianNums text-gray-600 dark:text-gray-400">
                {room.zone}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 text-sm">
              <h5 className="font-vazirBold">حداکثر ظرفیت:</h5>
              <p className="font-persianNums text-gray-600 dark:text-gray-400">
                {room.max_capacity} نفر
              </p>
            </div>
            <div className="flex gap-2 text-sm">
              <h5 className="font-vazirBold">متراژ محوطه:</h5>
              <p className="font-persianNums text-gray-600 dark:text-gray-400">
                {room.area_meterage} متر
              </p>
            </div>
            <div className="flex gap-2 text-sm">
              <h5 className="font-vazirBold">منطقه:</h5>
              <p className="font-persianNums text-gray-600 dark:text-gray-400">
                {room.residence_type}
              </p>
            </div>
          </div>
        </div>
        <div className="my-5 h-[1px] w-full bg-gray-200"></div>
      </div>
      <div className="mt-5">
        <div className="mb-5 flex items-center gap-2">
          <h4 className="font-vazirBold text-lg">فضای خواب</h4>
          <span className="rounded-full bg-gray-200 px-2 py-1 font-persianNums text-[12px] dark:text-gray-700">
            {room?.bedroom === 0 ? 'بدون' : room.bedroom} اتاق خواب
          </span>
        </div>
        <div className="flex items-center gap-2">
          {room.housing_space?.map((space, index) => (
            <div
              key={index}
              className="flex h-44 w-36 flex-col rounded-md border border-gray-100 p-5 text-sm shadow-md"
            >
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <LuBedDouble size={24} />
                <LuBedSingle size={24} />
              </div>
              <p className="mb-2 mt-5 font-persianNums text-base">
                {space.title}
              </p>
              {space.rooms.map((item, index) => (
                <p
                  key={index}
                  className="mb-0.5 font-persianNums text-gray-600 dark:text-gray-300"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-4 text-[13px] text-gray-600 dark:text-gray-300">
          مهمانان بیش از{' '}
          <span className="font-persianNums">
            {room.capacity && room.capacity + 3}
          </span>{' '}
          نفر سرویس خواب به همراه داشته باشند.
        </p>
        <div className="my-5 h-[1px] w-full bg-gray-200"></div>
      </div>
    </>
  );
}

export default RoomAbout;
