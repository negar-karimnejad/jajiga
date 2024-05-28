import { GoChevronLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Application from '../components/home/Application';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import Breadcrumb from '../components/ui/Breadcrumb';
import useRooms from '../hooks/useRooms';
import { useAuth } from '../hooks/useAuth';

function Trips() {
  const { rooms } = useRooms();
  const { users } = useAuth();
  console.log(users);

  return (
    <>
      <Application style="h-12" />
      <div className="mx-auto w-full border-b bg-white py-2 dark:border-0 dark:bg-gray-800 lg:gap-x-10">
        <div className="container flex items-center justify-between gap-x-3">
          <WhiteBgNavbar />
        </div>
      </div>
      <div className="relative">
        <div className="h-24 w-full bg-yellow-400">
          <div className="h-full w-full bg-[url(/images/patterns/pattern.png)]">
            <Breadcrumb pageLink="سفرها" />
          </div>
        </div>
        <div className="container mt-5 grid grid-cols-1 gap-8 pb-20 sm:grid-cols-2 lg:grid-cols-3">
          {rooms?.map((room) => (
            <div key={room.id} className="relative rounded-xl shadow-md">
              <Link to={`/room/${room.code}`} className="group">
                <div className="relative">
                  <div className="absolute inset-0 bottom-0 left-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="cursor-pointer transition-all">
                    <img
                      loading="lazy"
                      src={room.images[0]}
                      className="h-48 w-full rounded-xl object-cover"
                      alt={room.title}
                    />
                  </div>
                  <div className="absolute bottom-2 right-2 z-10 w-[80%] overflow-hidden text-ellipsis whitespace-nowrap font-vazirBold text-white">
                    <p>{room.title}</p>
                  </div>
                  <div className="absolute -bottom-7 left-2 z-10">
                    <img
                      alt={room.host.fullname}
                      src={room.host.profile}
                      className="h-14 w-14 rounded-full border-2 border-white object-cover object-top"
                    />
                  </div>
                </div>

                <div className="mb-5 mt-2 flex items-end justify-between px-2 text-gray-600">
                  <div className="space-y-5 text-sm">
                    <div className="flex">
                      <div className="space-y-2">
                        <p className="font-vazirBold ">
                          <span className="font-persianNums">8</span> خرداد
                        </p>
                        <p className="text-sm">سه شنبه</p>
                      </div>
                      <div>
                        <GoChevronLeft size={52} />
                      </div>
                      <div className="space-y-2">
                        <p className="font-vazirBold">
                          <span className="font-persianNums">10</span> خرداد
                        </p>
                        <p className="text-sm">پنجشنبه</p>
                      </div>
                    </div>
                    <div className="font-bold">
                      <span className="font-persianNums">2</span> نفر{' '}
                      <span className="font-light">به مدت</span>{' '}
                      <span className="font-persianNums">2</span> شب
                    </div>
                  </div>
                  <div className="space-y-5 text-left">
                    <p>{room.host.fullname}</p>
                    <p className="text-sm font-bold">
                      <span className="font-persianNums">
                        مبلغ: {(5500000).toLocaleString()}
                      </span>{' '}
                      <span className="text-[12px]">تومان</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Trips;
