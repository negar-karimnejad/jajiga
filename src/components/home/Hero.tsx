import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Hero() {
  return (
    <div className="fixed left-0 right-0 top-0 mx-auto h-[500px] max-xl:h-[400px] ">
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
            loading="lazy"
            src="/images/hero/hero-1.jpg"
            className="h-[500px] w-screen object-cover max-xl:h-[400px]"
            alt="hero"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/hero/hero-2.jpg"
            className="h-[500px] w-screen object-cover max-xl:h-[400px]"
            alt="hero"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/hero/hero-3.jpg"
            className="h-[500px] w-screen object-cover max-xl:h-[400px]"
            alt="hero"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
