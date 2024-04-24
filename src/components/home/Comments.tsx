import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from './SectionHeading';

function Comments() {
  return (
    <div className="group relative z-30 my-10 rounded-t-2xl bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeading>نظرات کاربران</SectionHeading>

        <div className="relative">
          <Swiper
            effect="zoom"
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              680: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="comments-swiper cursor-default"
          >
            <SwiperSlide>
              <div className="relative my-14 rounded-3xl border-t-2 border-t-yellow-400 px-4 pb-5 pt-16 text-center shadow-lg">
                <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-yellow-500 bg-white p-0.5">
                  <img
                    src="/images/comment.jpg"
                    alt=""
                    className="rounded-full"
                  />
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="relative">
                    آیسان
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        position: 'absolute',
                        left: '100%',
                        top: '0',
                        transform: 'translateX(0.5rem)',
                        backgroundColor: 'rgb(240, 200, 7)',
                        borderRadius: '74% 26% 40% 60% / 64% 26% 74% 36%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg
                        className="h-4 w-4"
                        version="1.1"
                        id="Layer_1"
                        x={0}
                        y={0}
                        viewBox="0 0 20 17.3"
                        xmlSpace="preserve"
                      >
                        <path d="M0,12.5c0,2.6,2.1,4.8,4.8,4.8c2.6,0,4.8-2.1,4.8-4.8S7.4,7.8,4.8,7.8C4.2,7.8,3.7,7.9,3.2,8C4.3,1.9,9.1-2.1,4.6,1.2 C-0.3,4.8,0,12.4,0,12.5C0,12.5,0,12.5,0,12.5z M10.5,12.5c0,2.6,2.1,4.8,4.8,4.8s4.8-2.1,4.8-4.8s-2.1-4.8-4.8-4.8 c-0.5,0-1.1,0.1-1.5,0.3c1.1-6.1,5.9-10.1,1.4-6.8C10.2,4.8,10.5,12.4,10.5,12.5C10.5,12.5,10.5,12.5,10.5,12.5L10.5,12.5z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-1 text-[11px] text-gray-400">
                  مهمان جاجیگا از مرداد 99
                </p>
                <p className="mt-3 text-right text-[12px]">
                  من امسال یک مسافرت یک هفته‌ای شمال رفتم و ۴ اقامتگاه تو شهرهای
                  مختلف از سایت شما گرفتم که من و همه همراهانم خیلی راضی بودیم.
                  از این به بعد سفر به همه جای ایران فقط با جاجیگا :)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative my-14 rounded-3xl border-t-2 border-t-yellow-400 px-4 pb-5 pt-16 text-center shadow-lg">
                <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-yellow-500 bg-white p-0.5">
                  <img
                    src="/images/comment.jpg"
                    alt=""
                    className="rounded-full"
                  />
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="relative">
                    آیسان
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        position: 'absolute',
                        left: '100%',
                        top: '0',
                        transform: 'translateX(0.5rem)',
                        backgroundColor: 'rgb(240, 200, 7)',
                        borderRadius: '74% 26% 40% 60% / 64% 26% 74% 36%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg
                        className="h-4 w-4"
                        version="1.1"
                        id="Layer_1"
                        x={0}
                        y={0}
                        viewBox="0 0 20 17.3"
                        xmlSpace="preserve"
                      >
                        <path d="M0,12.5c0,2.6,2.1,4.8,4.8,4.8c2.6,0,4.8-2.1,4.8-4.8S7.4,7.8,4.8,7.8C4.2,7.8,3.7,7.9,3.2,8C4.3,1.9,9.1-2.1,4.6,1.2 C-0.3,4.8,0,12.4,0,12.5C0,12.5,0,12.5,0,12.5z M10.5,12.5c0,2.6,2.1,4.8,4.8,4.8s4.8-2.1,4.8-4.8s-2.1-4.8-4.8-4.8 c-0.5,0-1.1,0.1-1.5,0.3c1.1-6.1,5.9-10.1,1.4-6.8C10.2,4.8,10.5,12.4,10.5,12.5C10.5,12.5,10.5,12.5,10.5,12.5L10.5,12.5z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-1 text-[11px] text-gray-400">
                  مهمان جاجیگا از مرداد 99
                </p>
                <p className="mt-3 text-right text-[12px]">
                  من امسال یک مسافرت یک هفته‌ای شمال رفتم و ۴ اقامتگاه تو شهرهای
                  مختلف از سایت شما گرفتم که من و همه همراهانم خیلی راضی بودیم.
                  از این به بعد سفر به همه جای ایران فقط با جاجیگا :)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative my-14 rounded-3xl border-t-2 border-t-yellow-400 px-4 pb-5 pt-16 text-center shadow-lg">
                <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-yellow-500 bg-white p-0.5">
                  <img
                    src="/images/comment.jpg"
                    alt=""
                    className="rounded-full"
                  />
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="relative">
                    آیسان
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        position: 'absolute',
                        left: '100%',
                        top: '0',
                        transform: 'translateX(0.5rem)',
                        backgroundColor: 'rgb(240, 200, 7)',
                        borderRadius: '74% 26% 40% 60% / 64% 26% 74% 36%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg
                        className="h-4 w-4"
                        version="1.1"
                        id="Layer_1"
                        x={0}
                        y={0}
                        viewBox="0 0 20 17.3"
                        xmlSpace="preserve"
                      >
                        <path d="M0,12.5c0,2.6,2.1,4.8,4.8,4.8c2.6,0,4.8-2.1,4.8-4.8S7.4,7.8,4.8,7.8C4.2,7.8,3.7,7.9,3.2,8C4.3,1.9,9.1-2.1,4.6,1.2 C-0.3,4.8,0,12.4,0,12.5C0,12.5,0,12.5,0,12.5z M10.5,12.5c0,2.6,2.1,4.8,4.8,4.8s4.8-2.1,4.8-4.8s-2.1-4.8-4.8-4.8 c-0.5,0-1.1,0.1-1.5,0.3c1.1-6.1,5.9-10.1,1.4-6.8C10.2,4.8,10.5,12.4,10.5,12.5C10.5,12.5,10.5,12.5,10.5,12.5L10.5,12.5z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-1 text-[11px] text-gray-400">
                  مهمان جاجیگا از مرداد 99
                </p>
                <p className="mt-3 text-right text-[12px]">
                  من امسال یک مسافرت یک هفته‌ای شمال رفتم و ۴ اقامتگاه تو شهرهای
                  مختلف از سایت شما گرفتم که من و همه همراهانم خیلی راضی بودیم.
                  از این به بعد سفر به همه جای ایران فقط با جاجیگا :)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative my-14 rounded-3xl border-t-2 border-t-yellow-400 px-4 pb-5 pt-16 text-center shadow-lg">
                <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-yellow-500 bg-white p-0.5">
                  <img
                    src="/images/comment.jpg"
                    alt=""
                    className="rounded-full"
                  />
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="relative">
                    آیسان
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        position: 'absolute',
                        left: '100%',
                        top: '0',
                        transform: 'translateX(0.5rem)',
                        backgroundColor: 'rgb(240, 200, 7)',
                        borderRadius: '74% 26% 40% 60% / 64% 26% 74% 36%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg
                        className="h-4 w-4"
                        version="1.1"
                        id="Layer_1"
                        x={0}
                        y={0}
                        viewBox="0 0 20 17.3"
                        xmlSpace="preserve"
                      >
                        <path d="M0,12.5c0,2.6,2.1,4.8,4.8,4.8c2.6,0,4.8-2.1,4.8-4.8S7.4,7.8,4.8,7.8C4.2,7.8,3.7,7.9,3.2,8C4.3,1.9,9.1-2.1,4.6,1.2 C-0.3,4.8,0,12.4,0,12.5C0,12.5,0,12.5,0,12.5z M10.5,12.5c0,2.6,2.1,4.8,4.8,4.8s4.8-2.1,4.8-4.8s-2.1-4.8-4.8-4.8 c-0.5,0-1.1,0.1-1.5,0.3c1.1-6.1,5.9-10.1,1.4-6.8C10.2,4.8,10.5,12.4,10.5,12.5C10.5,12.5,10.5,12.5,10.5,12.5L10.5,12.5z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-1 text-[11px] text-gray-400">
                  مهمان جاجیگا از مرداد 99
                </p>
                <p className="mt-3 text-right text-[12px]">
                  من امسال یک مسافرت یک هفته‌ای شمال رفتم و ۴ اقامتگاه تو شهرهای
                  مختلف از سایت شما گرفتم که من و همه همراهانم خیلی راضی بودیم.
                  از این به بعد سفر به همه جای ایران فقط با جاجیگا :)
                </p>
              </div>
            </SwiperSlide>

            <div className="hidden"></div>
            <div className="hidden"></div>
            <div className="swiper-pagination"></div>
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

export default Comments;
