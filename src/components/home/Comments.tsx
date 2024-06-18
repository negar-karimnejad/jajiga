import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { homepageComments } from '../../data/data';
import SwiperButtons from '../ui/SwiperButtons';
import SectionHeading from './SectionHeading';

function Comments() {
  return (
    <div className="group relative bg-white py-10 dark:bg-gray-900">
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
              nextEl: '.comments-swiper-button-next',
              prevEl: '.comments-swiper-button-prev',
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={25}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
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
            {homepageComments.map((comment) => (
              <SwiperSlide key={comment.id}>
                <div className="relative my-14 rounded-3xl border-t-2 border-t-yellow-400 px-4 pb-5 pt-16 text-center shadow-lg dark:shadow-gray-950">
                  <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-yellow-500 bg-white p-0.5 dark:bg-gray-900">
                    <img
                      loading="lazy"
                      src={comment.profile}
                      alt={comment.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <div className="relative">
                      <span className="dark:text-white">{comment.name}</span>

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
                  <p className="mt-1 font-persianNums text-[11px] text-gray-500">
                    مهمان جاجیگا از {comment.date}
                  </p>
                  <p className="mt-3 text-right text-[12px] dark:text-gray-300">
                    {comment.comment}
                  </p>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination"></div>
          </Swiper>
          <SwiperButtons
            nextBtn="comments-swiper-button-next"
            prevBtn="comments-swiper-button-prev"
          />
        </div>
      </div>
    </div>
  );
}

export default Comments;
