import { Link } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButtons from '../ui/SwiperButtons';
import SectionHeading from './SectionHeading';

function Popular() {
  return (
    <div className="group z-20 relative mt-[480px] rounded-t-2xl bg-white dark:bg-gray-900 max-xl:mt-[385px]">
      <div className="container w-full">
        <SectionHeading>مقاصد پرطرفدار</SectionHeading>
        <div className="relative">
          <Swiper
            navigation={{
              nextEl: '.popular-swiper-button-next',
              prevEl: '.popular-swiper-button-prev',
            }}
            spaceBetween={250}
            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 2.3,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3.3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide className="flex flex-col gap-5">
              <Link to="" className="flex w-44 overflow-hidden lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px] dark:text-white">
                    <span className="font-BKoodak text-gray-500">
                      اجاره ویلا در
                    </span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak text-gray-500">
                      1421 اقامتگاه
                    </span>
                  </p>
                </div>
              </Link>
              <Link to="" className="flex w-44 overflow-hidden lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px] dark:text-white">
                    <span className="font-BKoodak text-gray-500">
                      اجاره ویلا در
                    </span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak text-gray-500">
                      1421 اقامتگاه
                    </span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-5">
              <Link to="" className="flex w-44 overflow-hidden lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px] dark:text-white">
                    <span className="font-BKoodak text-gray-500">
                      اجاره ویلا در
                    </span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak text-gray-500">
                      1421 اقامتگاه
                    </span>
                  </p>
                </div>
              </Link>
              <Link to="" className="flex w-44 overflow-hidden lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px] dark:text-white">
                    <span className="font-BKoodak text-gray-500">
                      اجاره ویلا در
                    </span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak text-gray-500">
                      1421 اقامتگاه
                    </span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-5">
              <Link to="" className="flex w-44 overflow-hidden lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px] dark:text-white">
                    <span className="font-BKoodak text-gray-500">
                      اجاره ویلا در
                    </span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak text-gray-500">
                      1421 اقامتگاه
                    </span>
                  </p>
                </div>
              </Link>
              <Link to="" className="flex w-44 overflow-hidden lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px] dark:text-white">
                    <span className="font-BKoodak text-gray-500">
                      اجاره ویلا در
                    </span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak text-gray-500">
                      1421 اقامتگاه
                    </span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-5">
              <Link to="" className="flex w-44 overflow-hidden lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px] dark:text-white">
                    <span className="font-BKoodak text-gray-500">
                      اجاره ویلا در
                    </span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak text-gray-500">
                      1421 اقامتگاه
                    </span>
                  </p>
                </div>
              </Link>
              <Link to="" className="flex w-44 overflow-hidden lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px] dark:text-white">
                    <span className="font-BKoodak text-gray-500">
                      اجاره ویلا در
                    </span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak text-gray-500">
                      1421 اقامتگاه
                    </span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-5">
              <Link to="" className="flex w-44 overflow-hidden lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px] dark:text-white">
                    <span className="font-BKoodak text-gray-500">
                      اجاره ویلا در
                    </span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak text-gray-500">
                      1421 اقامتگاه
                    </span>
                  </p>
                </div>
              </Link>
              <Link to="" className="flex w-44 overflow-hidden lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px] dark:text-white">
                    <span className="font-BKoodak text-gray-500">
                      اجاره ویلا در
                    </span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak text-gray-500">
                      1421 اقامتگاه
                    </span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-5">
              <Link to="" className="flex w-44 overflow-hidden lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px] dark:text-white">
                    <span className="font-BKoodak text-gray-500">
                      اجاره ویلا در
                    </span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak text-gray-500">
                      1421 اقامتگاه
                    </span>
                  </p>
                </div>
              </Link>
              <Link to="" className="flex w-44 overflow-hidden lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px] dark:text-white">
                    <span className="font-BKoodak text-gray-500">
                      اجاره ویلا در
                    </span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak text-gray-500">
                      1421 اقامتگاه
                    </span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
          <SwiperButtons
            nextBtn="popular-swiper-button-next"
            prevBtn="popular-swiper-button-prev"
          />
        </div>
      </div>
    </div>
  );
}

export default Popular;
