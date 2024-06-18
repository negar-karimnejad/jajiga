import { useEffect, useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useRooms from '../../hooks/useRooms';
import { Room } from '../../redux/store/room';
import SectionHeading from '../home/SectionHeading';
import RoomInfoCard from '../room/RoomInfoCard';
import SwiperButtons from '../ui/SwiperButtons';
import RoomCardSkeleton from './skeleton/RoomCardSkeleton';

interface SliderSectionProps {
  title: string;
  text?: string;
  category?: string;
  nextBtn: string;
  prevBtn: string;
  list?: Room[];
}

function SliderSection({
  title,
  list,
  category,
  text,
  nextBtn,
  prevBtn,
}: SliderSectionProps) {
  const { rooms, loading } = useRooms();
  const [selectedRooms, setSelectedRooms] = useState<Room[]>([]);

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let shuffledRooms: Room[] = [];
    if (list?.length) {
      shuffledRooms = list;
    } else {
      if (category) {
        shuffledRooms = rooms.filter((room) =>
          room.category.includes(category),
        );
      } else {
        shuffledRooms = rooms;
      }
    }

    setSelectedRooms(shuffledRooms);
  }, [category, list, rooms]);

  return (
    <div className="group relative bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeading>
          {title}
          <p className="mt-1 font-vazirBold text-sm text-gray-600 dark:text-gray-400">
            {text}
          </p>
        </SectionHeading>

        <div className="relative ">
          <Swiper
            navigation={{
              nextEl: `.${nextBtn}`,
              prevEl: `.${prevBtn}`,
            }}
            modules={[Navigation]}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
              },
              680: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3.3,
              },
            }}
            className="h-[20rem] cursor-default"
          >
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <RoomCardSkeleton />
                  </SwiperSlide>
                ))
              : selectedRooms.map((room) => (
                  <SwiperSlide key={room.id} onClick={scrollUp}>
                    <Link to={`/room/${room.code}`} className="relative h-52">
                      <div className="relative overflow-hidden rounded-3xl">
                        <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
                        <img
                          loading="lazy"
                          src={room.images?.at(0)}
                          className="block h-52 w-full rounded-3xl object-cover"
                          alt={room.title}
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex h-full flex-col items-start justify-between px-4 pb-4 text-sm text-white">
                        <RoomInfoCard
                          premium={room.category.includes('premium')}
                          fastbooking={room.category.includes('fastbooking')}
                        />
                        <p className="font-persianNums">
                          از {room.price?.toLocaleString()} تومان
                        </p>
                      </div>
                    </Link>
                    <Link
                      to={`/room/${room.code}`}
                      className="text-sm dark:text-white"
                    >
                      <p className="mb-1 mt-3 overflow-hidden text-ellipsis whitespace-nowrap font-vazirBold">
                        {room.title}
                      </p>
                      <p className="mt-2 flex gap-2 whitespace-nowrap text-[13px] text-gray-700 dark:text-gray-50">
                        <span className="font-persianNums">
                          {room.bedroom === 0
                            ? 'بدون اتاق خواب'
                            : `${room.bedroom} خوابه`}{' '}
                          . {room.foundation_meterage} متر . تا{' '}
                          {room.max_capacity} مهمان
                        </span>
                        <span className="flex gap-1 font-persianNums">
                          <BsStarFill className="mt-0.5 text-yellow-500" />
                          {room?.rating?.total}
                          <span className="max-sm:hidden font-persianNums">
                            ({room.reviews} نظر)
                          </span>
                        </span>
                      </p>
                    </Link>
                  </SwiperSlide>
                ))}
          </Swiper>
          <SwiperButtons nextBtn={nextBtn} prevBtn={prevBtn} />
        </div>
      </div>
    </div>
  );
}

export default SliderSection;
