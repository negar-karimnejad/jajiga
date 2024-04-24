import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from './SectionHeading';

function Popular() {
  return (
    <div className="group relative z-30 mt-[485px] rounded-t-2xl bg-white dark:bg-gray-900 max-xl:mt-[405px]">
      <div className="container w-full">
        <SectionHeading>مقاصد پرطرفدار</SectionHeading>
        <div className="relative">
          <Swiper
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
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
              <Link to="" className="flex w-44 lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px]">
                    <span>اجاره ویلا در</span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak">1421 اقامتگاه</span>
                  </p>
                </div>
              </Link>
              <Link to="" className="flex w-44 lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px]">
                    <span>اجاره ویلا در</span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak">1421 اقامتگاه</span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-5">
              <Link to="" className="flex w-44 lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px]">
                    <span>اجاره ویلا در</span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak">1421 اقامتگاه</span>
                  </p>
                </div>
              </Link>
              <Link to="" className="flex w-44 lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px]">
                    <span>اجاره ویلا در</span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak">1421 اقامتگاه</span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-5">
              <Link to="" className="flex w-44 lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px]">
                    <span>اجاره ویلا در</span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak">1421 اقامتگاه</span>
                  </p>
                </div>
              </Link>
              <Link to="" className="flex w-44 lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px]">
                    <span>اجاره ویلا در</span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak">1421 اقامتگاه</span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-5">
              <Link to="" className="flex w-44 lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px]">
                    <span>اجاره ویلا در</span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak">1421 اقامتگاه</span>
                  </p>
                </div>
              </Link>
              <Link to="" className="flex w-44 lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px]">
                    <span>اجاره ویلا در</span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak">1421 اقامتگاه</span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-5">
              <Link to="" className="flex w-44 lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px]">
                    <span>اجاره ویلا در</span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak">1421 اقامتگاه</span>
                  </p>
                </div>
              </Link>
              <Link to="" className="flex w-44 lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px]">
                    <span>اجاره ویلا در</span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak">1421 اقامتگاه</span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-5">
              <Link to="" className="flex w-44 lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px]">
                    <span>اجاره ویلا در</span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak">1421 اقامتگاه</span>
                  </p>
                </div>
              </Link>
              <Link to="" className="flex w-44 lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px]">
                    <span>اجاره ویلا در</span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak">1421 اقامتگاه</span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-5">
              <Link to="" className="flex w-44 lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px]">
                    <span>اجاره ویلا در</span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak">1421 اقامتگاه</span>
                  </p>
                </div>
              </Link>
              <Link to="" className="flex w-44 lg:w-[300px]">
                <div className="flex-1">
                  <img
                    src="/images/popular/anzali.jpg"
                    className="rounded-xl lg:rounded-[30px]"
                    alt=""
                  />
                </div>
                <div className="mr-2 flex flex-1 items-center">
                  <p className="flex flex-col text-[12px]">
                    <span>اجاره ویلا در</span>
                    <span className="my-1 font-vazirBold text-base">رامسر</span>
                    <span className="font-BKoodak">1421 اقامتگاه</span>
                  </p>
                </div>
              </Link>
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

export default Popular;
