import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButtons from '../ui/SwiperButtons';
import SectionHeading from './SectionHeading';

function Discount() {
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
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    loading="lazy"
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
                  <p className="font-persianNums">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-persianNums text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    loading="lazy"
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
                  <p className="font-persianNums">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-persianNums text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    loading="lazy"
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
                  <p className="font-persianNums">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-persianNums text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    loading="lazy"
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
                  <p className="font-persianNums">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-persianNums text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    loading="lazy"
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
                  <p className="font-persianNums">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-persianNums text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    loading="lazy"
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
                  <p className="font-persianNums">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-persianNums text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    loading="lazy"
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
                  <p className="font-persianNums">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-persianNums text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    loading="lazy"
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
                  <p className="font-persianNums">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-persianNums text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    loading="lazy"
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
                  <p className="font-persianNums">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-persianNums text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    loading="lazy"
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
                  <p className="font-persianNums">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-persianNums text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    loading="lazy"
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
                  <p className="font-persianNums">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-persianNums text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    loading="lazy"
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
                  <p className="font-persianNums">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-persianNums text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    loading="lazy"
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
                  <p className="font-persianNums">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-persianNums text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    loading="lazy"
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
                  <p className="font-persianNums">
                    از {(5000000).toLocaleString()} تومان
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
              </div>
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-persianNums text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>

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
