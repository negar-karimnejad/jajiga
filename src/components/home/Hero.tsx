import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Hero() {
  return (
    <div className="relative h-[500px] max-xl:h-[400px]">
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
      <div className="absolute left-0 right-0 top-40 z-40 mx-auto h-fit w-full text-white ">
        <form className="flex flex-col items-center justify-center gap-4">
          <label htmlFor="" className="text-lg">
            اجاره ویلا در شمال و سراسر ایران زیبا
          </label>
          <div className="input input-bordered flex w-2/3 items-center gap-2 rounded-full pl-1">
            <input type="text" className="grow" placeholder="میخوای کجا بری؟" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-8 w-8 rounded-full bg-yellow-400 p-1 text-gray-800"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </form>
        <div className="mt-10 text-center">
          <p className="text-xl tracking-widest">جاجیـــگا</p>
          <p className="mt-3 text-sm">(: مثل خونه خودته</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
