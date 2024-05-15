import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Room } from '../../redux/store/room';
import Button from '../ui/Button';

function FullSizeImage({
  room,
  isOpen,
  closeModal,
}: {
  room: Room;
  isOpen: boolean;
  closeModal: () => void;
}) {
  const [thumbsSwiper] = useState(null);
  

  return (
    <div
      className={`fixed right-0 top-0 z-50 flex h-full w-full cursor-default flex-col items-center overflow-y-auto bg-neutral-800/95 backdrop-blur-sm transition-all duration-500 max-sm:px-5 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex h-full w-screen justify-center  pt-10 transition-all ${isOpen ? 'scale-100' : 'scale-0'}`}
      >
        <Button
          style="absolute w-5 h-5 top-2 left-8 font-vazirMedium text-5xl text-white"
          onClick={closeModal}
        >
          &times;
        </Button>
        <div className="container my-5 h-[450px] cursor-pointer gap-2 transition-all">
          <Swiper
            spaceBetween={250}
            speed={800}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs, Navigation]}
            centeredSlides={true}
            navigation={{
              nextEl: '.fullSizeImage-swiper-button-next',
              prevEl: '.fullSizeImage-swiper-button-prev',
            }}
          >
            {room.images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center !overflow-visible"
              >
                <img
                  loading="lazy"
                  src={image}
                  className="h-[27rem] w-[700px] rounded-xl object-cover"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            spaceBetween={0}
            slidesPerView={8}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="fullSizeImageSwiper mt-3 rounded-md bg-neutral-900/90 p-2"
          >
            {room.images.map((image, index) => (
              <SwiperSlide key={index} className="">
                <img
                  loading="lazy"
                  src={image}
                  className="h-20 w-24 rounded-md border-2 border-black object-cover object-top"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="fullSizeImage-swiper-button-prev absolute bottom-0 right-5 top-0 z-40 m-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-950/90 shadow-md shadow-black/40 transition-all">
            <FaChevronRight
              size={22}
              className="hover:text-gary-950 text-neutral-300 hover:text-white"
            />
          </div>
          <div className="fullSizeImage-swiper-button-next absolute bottom-0 left-5 top-0 z-40 m-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-950/90 shadow-md shadow-black/40 transition-all">
            <FaChevronLeft
              size={22}
              className="hover:text-gary-950 text-neutral-300 hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullSizeImage;
