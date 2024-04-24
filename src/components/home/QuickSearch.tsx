import { BsShare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButtons from '../ui/SwiperButtons';
import SectionHeading from './SectionHeading';

function QuickSearch() {
  return (
    <div className="group relative z-30 bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeading>جستجوی سریع</SectionHeading>
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
                slidesPerView: 2.5,
              },
              680: {
                slidesPerView: 3.5,
              },
              1024: {
                slidesPerView: 4.5,
              },
              1280: {
                slidesPerView: 5.2,
              },
            }}
          >
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/about/about_img5.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex flex-col items-center justify-center px-4 pb-4 text-sm text-white">
                  <p>کلبه چوبی جنگلی</p>
                  <div className="mt-2 flex items-center gap-3">
                    <p>654 اقامتگاه</p>
                    <BsShare />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 top-40 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/about/about_img5.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex flex-col items-center justify-center px-4 pb-4 text-sm text-white">
                  <p>کلبه چوبی جنگلی</p>
                  <div className="mt-2 flex items-center gap-3">
                    <p>654 اقامتگاه</p>
                    <BsShare />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 top-40 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/about/about_img5.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex flex-col items-center justify-center px-4 pb-4 text-sm text-white">
                  <p>کلبه چوبی جنگلی</p>
                  <div className="mt-2 flex items-center gap-3">
                    <p>654 اقامتگاه</p>
                    <BsShare />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 top-40 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/about/about_img5.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex flex-col items-center justify-center px-4 pb-4 text-sm text-white">
                  <p>کلبه چوبی جنگلی</p>
                  <div className="mt-2 flex items-center gap-3">
                    <p>654 اقامتگاه</p>
                    <BsShare />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 top-40 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/about/about_img5.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex flex-col items-center justify-center px-4 pb-4 text-sm text-white">
                  <p>کلبه چوبی جنگلی</p>
                  <div className="mt-2 flex items-center gap-3">
                    <p>654 اقامتگاه</p>
                    <BsShare />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 top-40 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/about/about_img5.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex flex-col items-center justify-center px-4 pb-4 text-sm text-white">
                  <p>کلبه چوبی جنگلی</p>
                  <div className="mt-2 flex items-center gap-3">
                    <p>654 اقامتگاه</p>
                    <BsShare />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 top-40 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/about/about_img5.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex flex-col items-center justify-center px-4 pb-4 text-sm text-white">
                  <p>کلبه چوبی جنگلی</p>
                  <div className="mt-2 flex items-center gap-3">
                    <p>654 اقامتگاه</p>
                    <BsShare />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 top-40 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/about/about_img5.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex flex-col items-center justify-center px-4 pb-4 text-sm text-white">
                  <p>کلبه چوبی جنگلی</p>
                  <div className="mt-2 flex items-center gap-3">
                    <p>654 اقامتگاه</p>
                    <BsShare />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 top-40 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/about/about_img5.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex flex-col items-center justify-center px-4 pb-4 text-sm text-white">
                  <p>کلبه چوبی جنگلی</p>
                  <div className="mt-2 flex items-center gap-3">
                    <p>654 اقامتگاه</p>
                    <BsShare />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 top-40 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/about/about_img5.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex flex-col items-center justify-center px-4 pb-4 text-sm text-white">
                  <p>کلبه چوبی جنگلی</p>
                  <div className="mt-2 flex items-center gap-3">
                    <p>654 اقامتگاه</p>
                    <BsShare />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 top-40 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-3xl">
                <Link to="">
                  <img
                    src="/images/about/about_img5.jpg"
                    className="block w-full"
                    alt=""
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex flex-col items-center justify-center px-4 pb-4 text-sm text-white">
                  <p>کلبه چوبی جنگلی</p>
                  <div className="mt-2 flex items-center gap-3">
                    <p>654 اقامتگاه</p>
                    <BsShare />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 top-40 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </SwiperSlide>
          </Swiper>
          <SwiperButtons />
        </div>
      </div>
    </div>
  );
}

export default QuickSearch;
