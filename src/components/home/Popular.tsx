import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Popular() {
  return (
    <div className="relative z-30 mt-[485px] h-[96rem] rounded-t-2xl bg-white max-xl:mt-[385px]">
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
  );
}

export default Popular;
