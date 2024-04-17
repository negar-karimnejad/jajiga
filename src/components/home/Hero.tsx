import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

function Hero() {
  return (
    <div className="relative">
      <Swiper
        preventInteractionOnTransition={true}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: true,
        }}
        loop={true}
        allowTouchMove={false}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img
            src="/images/hero/hero-1.jpg"
            className="h-[500px] w-screen object-cover max-xl:h-[400px]"
            alt="hero"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/hero/hero-2.jpg"
            className="h-[500px] w-screen object-cover max-xl:h-[400px]"
            alt="hero"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/hero/hero-3.jpg"
            className="h-[500px] w-screen object-cover max-xl:h-[400px]"
            alt="hero"
          />
        </SwiperSlide>
      </Swiper>
      <form className="absolute bottom-0 left-0 right-0 top-0 z-40 m-auto h-full w-full">
        <label htmlFor="اجاره ویلا در شمال و سراسر ایران زیبا"></label>
        <input type="text" />
      </form>
    </div>
  );
}

export default Hero;
