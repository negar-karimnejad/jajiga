import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useRooms from '../../hooks/useRooms';
import SwiperButtons from '../ui/SwiperButtons';
import SectionHeading from './SectionHeading';

function Discount() {
  const { rooms } = useRooms();

  const selectedRooms = rooms.slice().sort((a, b) => a.price - b.price);

  return (
    <div className="group relative z-30 mt-10 overflow-hidden rounded-t-2xl bg-[#cc0001] pb-12 text-white dark:bg-red-700">
      <div
        className="t-0 absolute left-0 h-full w-full
       bg-[url(/images/patterns/pattern.png)] opacity-60"
      ></div>
      <div className="container">
        <SectionHeading>تخفیف های سفر انگیز</SectionHeading>

        <div className="relative">
          <Swiper
            navigation={{
              nextEl: '.discount-swiper-button-next',
              prevEl: '.discount-swiper-button-prev',
            }}
            modules={[Navigation]}
            spaceBetween={20}
            // loop={true}
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
          >
            {selectedRooms.map((room) => (
              <SwiperSlide key={room.id}>
                <Link to={`/room/${room.code}`} className="relative">
                  <div className="relative overflow-hidden rounded-3xl">
                    <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>

                    <img
                      loading="lazy"
                      src={room.images.at(0)}
                      className="block h-52 w-full rounded-3xl object-cover"
                      alt=""
                    />
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
                    <p className="font-persianNums">
                      از {room.price.toLocaleString()} تومان
                    </p>
                  </div>
                </Link>
                <Link
                  to={`/room/${room.code}`}
                  className="text-sm dark:text-white"
                >
                  <p className="mb-1 mt-3 font-vazirBold">{room.title}</p>
                  <p className="mt-2 flex gap-2 text-[13px] text-gray-50">
                    <span className="font-persianNums">
                      {room.bedroom === 0
                        ? 'بدون اتاق خواب'
                        : `${room.bedroom} خوابه`}{' '}
                      . {room.foundation_meterage} متر . تا {room.max_capacity}{' '}
                      مهمان
                    </span>
                    <span className="flex gap-1 font-persianNums">
                      <BsStarFill className="text-yellow-500" />
                      {room.rating.total}
                    </span>
                    <span className="font-persianNums">
                      ({room.reviews} نظر)
                    </span>
                  </p>
                </Link>
              </SwiperSlide>
            ))}
            <div className="hidden"></div>
            <div className="hidden"></div>
          </Swiper>
          <SwiperButtons
            nextBtn="discount-swiper-button-next"
            prevBtn="discount-swiper-button-prev"
          />
        </div>
      </div>
    </div>
  );
}

export default Discount;
