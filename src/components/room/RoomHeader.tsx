import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useRoom from '../../hooks/useRoom';
import LikeAndShareButtons from './LikeAndShareButtons';
import FullSizeImage from './FullSizeImage';

function RoomHeader() {
  const [hoveredImage, setHoveredImage] = useState<null | number>(null);
  const [isOpen, setIsOpen] = useState(-1);

  const closeModal = () => {
    setIsOpen(-1);
  };

  const { id } = useParams();
  const { room } = useRoom(Number(id));

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  if (!room) return null;
  return (
    <>
      <div className="container my-5 flex h-80 cursor-pointer gap-2 transition-all max-md:hidden">
        <div className="w-full flex-1">
          <img
            onClick={() => setIsOpen(0)}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            className={`h-full w-full rounded-lg object-cover ${
              hoveredImage !== null && hoveredImage !== 0
                ? 'grayscale'
                : 'grayscale-0'
            }`}
            src={room.images.at(0)}
            alt=""
          />
        </div>
        <div className="flex w-full flex-1 gap-2">
          <div className="flex w-full flex-col gap-1">
            <img
              onClick={() => setIsOpen(1)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              className={`h-1/2 rounded-lg object-cover ${
                hoveredImage !== null && hoveredImage !== 1
                  ? 'grayscale'
                  : 'grayscale-0'
              }`}
              src={room.images.at(1)}
              alt=""
            />
            <img
              onClick={() => setIsOpen(2)}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              className={`h-1/2 rounded-lg object-cover ${
                hoveredImage !== null && hoveredImage !== 2
                  ? 'grayscale'
                  : 'grayscale-0'
              }`}
              src={room.images.at(2)}
              alt=""
            />
          </div>
          <div className="relative flex w-full flex-col gap-1">
            <img
              onClick={() => setIsOpen(3)}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              className={`h-1/2 rounded-lg object-cover ${
                hoveredImage !== null && hoveredImage !== 3
                  ? 'grayscale'
                  : 'grayscale-0'
              }`}
              src={room.images.at(3)}
              alt=""
            />
            <img
              onClick={() => setIsOpen(4)}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              className={`h-1/2 rounded-lg object-cover ${
                hoveredImage !== null && hoveredImage !== 4
                  ? 'grayscale'
                  : 'grayscale-0'
              }`}
              src={room.images.at(4)}
              alt=""
            />
            <div className="absolute left-2 top-2 z-40">
              <LikeAndShareButtons id={Number(id)} />
            </div>
          </div>
        </div>
      </div>

      <div className="group container my-5 flex h-[450px] cursor-pointer gap-2 transition-all md:hidden">
        <Swiper
          className="room-header-swiper"
          spaceBetween={0}
          modules={[Navigation, Pagination]}
          centeredSlides={true}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          navigation={{
            nextEl: '.roomheader-swiper-button-next',
            prevEl: '.roomheader-swiper-button-prev',
          }}
        >
          {room.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                loading="lazy"
                src={image}
                className="h-full w-full object-cover"
                alt=""
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
        <div className="roomheader-swiper-button-prev invisible absolute bottom-0 right-10 top-0 z-40 m-auto flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-gray-100/90 shadow-md shadow-black/40 transition-all hover:scale-105 hover:bg-gray-100 group-hover:visible">
          <FaChevronRight
            size={14}
            className="hover:text-gary-950 invisible text-gray-800 transition-all group-hover:visible"
          />
        </div>
        <div className="roomheader-swiper-button-next invisible absolute bottom-0 left-10 top-0 z-40 m-auto flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-gray-100/90 shadow-md shadow-black/40 transition-all hover:scale-105 hover:bg-gray-100 group-hover:visible">
          <FaChevronLeft
            size={14}
            className="hover:text-gary-950 invisible text-gray-800 transition-all group-hover:visible"
          />
        </div>
      </div>

      {/* Big Size Images Modal */}
      <div className="max-md:hidden">
        <FullSizeImage room={room} isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

export default RoomHeader;
