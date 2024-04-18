import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Popular() {
  return (
    <div className="relative z-50 mt-6">
      <div className="rounded-t-2xl bg-white">
        <div className="container">
          <h3>مقاصد پرطرفدار</h3>
          <Swiper
            preventInteractionOnTransition={true}
            spaceBetween={0}
            centeredSlides={true}
            // autoplay={{
            //   delay: 20000,
            //   disableOnInteraction: true,
            // }}
            loop={true}
            allowTouchMove={false}
            modules={[Autoplay]}
          >
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Popular;
