import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButtons from '../ui/SwiperButtons';
import SectionHeading from './SectionHeading';

function Junub() {
  return (
    <div className="group relative z-30 rounded-t-2xl bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeading>
          اجاره سوئیت و اقامتگاه در جنوب
          <p className="mt-1 font-vazirBold text-sm text-gray-600 dark:text-gray-400">
            اقامتگاه های کیش، قشم، بوشهر، بندرعباس و چابهار{' '}
          </p>
        </SectionHeading>

        <div className="relative">
          <Swiper
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
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
            className="cursor-default"
          >
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/quick-search/1.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex h-full flex-col items-start justify-between px-4 pb-4 text-sm text-white">
                  <div className="mt-2 flex flex-col items-center gap-2">
                    <p className="w-20 rounded-full bg-white px-1 py-0.5 font-vazirBold text-[11px] text-black">
                      ✨ ممتــــــــاز
                    </p>
                    <p className="w-20 rounded-full bg-yellow-400 px-1 py-0.5 font-vazirBold text-[11px] text-black">
                      <span>⚡</span> رزرو فوری
                    </p>
                  </div>
                  <p className="font-BKoodak">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm dark:text-white">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-BKoodak text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/quick-search/1.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex h-full flex-col items-start justify-between px-4 pb-4 text-sm text-white">
                  <div className="mt-2 flex flex-col items-center gap-2">
                    <p className="w-20 rounded-full bg-white px-1 py-0.5 font-vazirBold text-[11px] text-black">
                      ✨ ممتــــــــاز
                    </p>
                    <p className="w-20 rounded-full bg-yellow-400 px-1 py-0.5 font-vazirBold text-[11px] text-black">
                      <span>⚡</span> رزرو فوری
                    </p>
                  </div>
                  <p className="font-BKoodak">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm dark:text-white">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-BKoodak text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/quick-search/1.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex h-full flex-col items-start justify-between px-4 pb-4 text-sm text-white">
                  <div className="mt-2 flex flex-col items-center gap-2">
                    <p className="w-20 rounded-full bg-white px-1 py-0.5 font-vazirBold text-[11px] text-black">
                      ✨ ممتــــــــاز
                    </p>
                    <p className="w-20 rounded-full bg-yellow-400 px-1 py-0.5 font-vazirBold text-[11px] text-black">
                      <span>⚡</span> رزرو فوری
                    </p>
                  </div>
                  <p className="font-BKoodak">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm dark:text-white">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-BKoodak text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/quick-search/1.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex h-full flex-col items-start justify-between px-4 pb-4 text-sm text-white">
                  <div className="mt-2 flex flex-col items-center gap-2">
                    <p className="w-20 rounded-full bg-white px-1 py-0.5 font-vazirBold text-[11px] text-black">
                      ✨ ممتــــــــاز
                    </p>
                    <p className="w-20 rounded-full bg-yellow-400 px-1 py-0.5 font-vazirBold text-[11px] text-black">
                      <span>⚡</span> رزرو فوری
                    </p>
                  </div>
                  <p className="font-BKoodak">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm dark:text-white">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-BKoodak text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/quick-search/1.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex h-full flex-col items-start justify-between px-4 pb-4 text-sm text-white">
                  <div className="mt-2 flex flex-col items-center gap-2">
                    <p className="w-20 rounded-full bg-white px-1 py-0.5 font-vazirBold text-[11px] text-black">
                      ✨ ممتــــــــاز
                    </p>
                    <p className="w-20 rounded-full bg-yellow-400 px-1 py-0.5 font-vazirBold text-[11px] text-black">
                      <span>⚡</span> رزرو فوری
                    </p>
                  </div>
                  <p className="font-BKoodak">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm dark:text-white">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-BKoodak text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <SwiperButtons />
        </div>
      </div>
    </div>
  );
}

export default Junub;
