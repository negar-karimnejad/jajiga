import { useState } from 'react';
import { BiHome } from 'react-icons/bi';
import { BsShare, BsStarFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import LikeAndShareButtons from '../components/room/LikeAndShareButtons';
import ShareModal from '../components/room/ShareModal';
import Button from '../components/ui/Button';
import { QuickSearchArray } from '../data/data';
import useRooms from '../hooks/useRooms';

const CostumizeDiv = (item: {
  id: number;
  title: string;
  cover: string;
  to: string;
}) => {
  const { title, to } = item;

  return (
    <Link
      to={to}
      className="flex w-52 justify-between rounded-full bg-white py-0.5 pl-0.5 pr-3 text-[13px]"
    >
      <div className="">اجاره {title}</div>
      <div className="flex justify-center gap-1 rounded-full bg-neutral-900 px-2 py-0.5 text-gray-100">
        <BiHome size={15} />
        <span className="font-persianNums text-[12px]">9632</span>
      </div>
    </Link>
  );
};

function Rooms() {
  const [isOpen, setIsOpen] = useState(false);

  const { id } = useParams();
  const { rooms } = useRooms();
  const sRooms = rooms.filter((room) => {
    if (id) {
      return room.category?.includes(id);
    }
  });

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="mx-auto w-full border-b bg-white py-2 dark:border-0 dark:bg-gray-800 lg:gap-x-10">
        <div className="container flex items-center justify-between gap-x-3">
          <WhiteBgNavbar />
        </div>
      </div>
      <div className="h-16 bg-gray-200">1</div>
      <div className="-mt-5 grid grid-cols-12 rounded-t-2xl bg-gray-50 dark:bg-gray-800">
        <div className=" col-span-8">
          <header className="container my-10 flex h-40 overflow-hidden rounded-xl shadow-lg">
            <div className="w-full">
              <img
                src="/images/swiss-cottage.webp"
                className="h-full object-cover"
                alt=""
              />
            </div>
            <div className="-mr-5 w-[500px] rounded-xl bg-white p-5">
              <div className="mb-5 flex items-center justify-between">
                <h1
                  className="font-vazirBold text-base"
                  title="اجاره کلبه سوئیسی"
                >
                  اجاره کلبه سوئیسی
                </h1>
                <button
                  type="button"
                  className="ml-8"
                  onClick={() => setIsOpen(true)}
                >
                  <BsShare size={15} />
                </button>
              </div>
              <p className="text-sm text-gray-600">
                کلبه سوئیسی (مثلثی)؛ اقامتی دلچسب حاصل از تلفیق معماری مدرن و
                امروزی با آرامش دلنشین چوب.
              </p>
            </div>
          </header>
          <main className="container grid grid-cols-1 gap-5 pb-20 sm:grid-cols-2 md:grid-cols-3">
            {sRooms?.map((room) => (
              <div key={room.id} className="">
                <Link to={`/room/${room.code}`} className="relative">
                  <div className="relative rounded-xl">
                    <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
                    <img
                      loading="lazy"
                      src={room?.images?.at(0)}
                      className="block h-52 w-80 rounded-xl"
                      alt=""
                    />
                    <div className="absolute left-2 top-2">
                      <LikeAndShareButtons />
                    </div>
                    <div className="absolute -bottom-7 left-2">
                      <img
                        alt={room.host.fullname}
                        src={room.host.profile}
                        className="h-14 w-14 rounded-full border-2 border-white object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex h-full flex-col items-start justify-between px-4 pb-4 text-sm text-white">
                    <div className="mt-2 flex flex-col items-center gap-2">
                      <p className="w-20 rounded-full bg-white px-1 py-0.5 font-vazirBold text-[11px] text-black">
                        ✨ ممتــــــــاز
                      </p>
                      <p className="w-20 rounded-full bg-yellow-400 px-1 py-0.5 font-vazirBold text-[11px] text-black">
                        <span>⚡</span> رزرو فوری
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  to={`/room/${room.code}`}
                  className="text-sm dark:text-white"
                >
                  <p className="mb-1 mt-3 w-[70%] overflow-hidden text-ellipsis whitespace-nowrap font-vazirBold">
                    {room.title}
                  </p>
                  <p className="mt-2 flex gap-2 text-[13px] text-gray-500 dark:text-gray-300">
                    <span className="font-persianNums">
                      {room.bedroom}خوابه . {room.foundation_meterage} متر . تا{' '}
                      {room.max_capacity} مهمان
                    </span>
                    <span className="flex gap-1 font-persianNums">
                      <BsStarFill className="text-yellow-500" />
                      {room.rating?.total}
                    </span>
                    <span className="font-persianNums">
                      ({room.reviews} نظر)
                    </span>
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-sm">
                    هر شب از
                    <span className="mr-1 font-persianNums">
                      {room.price?.toLocaleString()}
                    </span>
                    تومان
                    <Button style="cursor-default font-persianNums text-[13px] bg-gray-200 rounded-full py-1 hover:shadow-none ">
                      {room.reserved}+ رزرو موفق
                    </Button>
                  </p>
                </Link>
              </div>
            ))}
          </main>
          <footer className="rounded-t-xl bg-neutral-900 p-5">
            <h4 className="font-vazirMedium text-base text-white">
              جستجوهای مرتبط
            </h4>
            <div className="overflow-auto py-4">
              <div className="flex w-[42rem] flex-wrap gap-2">
                {QuickSearchArray.map((item) => (
                  <CostumizeDiv {...item} key={item.id} />
                ))}
              </div>
            </div>
          </footer>
        </div>
        <div className="col-span-4 bg-rose-500">k</div>
      </div>
      <ShareModal isOpen={isOpen} closeModalHandler={closeModalHandler} />
    </>
  );
}

export default Rooms;
