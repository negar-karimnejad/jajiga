import { BsStarFill } from 'react-icons/bs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from './SectionHeading';

function Premium() {
  return (
    <div className="group relative z-30 rounded-t-2xl bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeading>
          اقامتگاه های ممتاز
          <p className="mt-1 font-vazirBold text-sm text-gray-600">
            گلچینی از اقامتگاه های باکیفیت با میزبانهای مهمان نواز
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
              <div className="mt-2 text-sm">
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
              <div className="mt-2 text-sm">
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
              <div className="mt-2 text-sm">
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
              <div className="mt-2 text-sm">
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
              <div className="mt-2 text-sm">
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
              <div className="mt-2 text-sm">
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
              <div className="mt-2 text-sm">
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
              <div className="mt-2 text-sm">
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
              <div className="mt-2 text-sm">
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
              <div className="mt-2 text-sm">
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
              <div className="mt-2 text-sm">
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
              <div className="mt-2 text-sm">
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
              <div className="mt-2 text-sm">
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
              <div className="mt-2 text-sm">
                <p className="mb-1 font-vazirBold">
                  اجاره ویلا ساحلی دوبلکس در انزلی - سنگاچین
                </p>
                <p className="flex gap-1 font-BKoodak text-[13px]">
                  3خوابه .200 متر . تا 20 مهمان
                  <BsStarFill className="text-yellow-500" /> 4.7 (179 نظر)
                </p>
              </div>
            </SwiperSlide>

            <div className="hidden"></div>
            <div className="hidden"></div>
          </Swiper>
          <div className="swiper-button-next invisible absolute -right-20 bottom-0 top-0 z-40 m-auto flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-100 transition-all group-hover:visible group-hover:-right-16 max-xl:hidden">
            <FaChevronRight
              size={23}
              className="invisible text-gray-400 transition-all hover:text-red-600 group-hover:visible"
            />
          </div>
          <div className="swiper-button-prev invisible absolute -left-20 bottom-0 top-0 z-40 m-auto flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-100 transition-all group-hover:visible group-hover:-left-16 max-xl:hidden">
            <FaChevronLeft
              size={23}
              className="invisible text-gray-400 transition-all hover:text-red-600 group-hover:visible"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premium;
