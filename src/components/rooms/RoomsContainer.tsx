import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Room } from '../../redux/store/room';
import LikeAndShareButtons from '../room/LikeAndShareButtons';
import RoomInfosLink from '../room/room-main/RoomInfosLink';
import RoomInfoCard from '../room/RoomInfoCard';

function RoomsContainer({ room, isHost }: { room: Room; isHost: boolean }) {
  return (
    <div className="relative">
      <Link to={`/room/${room.code}`} className="group">
        <div className="relative rounded-xl">
          <div className="pointer-events-none absolute inset-0 top-20 rounded-xl bg-gradient-to-t from-black/75 to-transparent"></div>
          <div className="relative rounded-xl">
            <div className="cursor-pointer transition-all ">
              <Swiper
                className="rooms-swiper !z-0"
                spaceBetween={0}
                modules={[Navigation, Pagination]}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                }}
                navigation={{
                  nextEl: `.rooms-swiper${room.id}-button-next`,
                  prevEl: `.rooms-swiper${room.id}-button-prev`,
                }}
              >
                {room.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      loading="lazy"
                      src={image}
                      className="h-48 w-full rounded-xl object-cover"
                      alt={room.title}
                    />
                  </SwiperSlide>
                ))}
                <div className="swiper-pagination"></div>
              </Swiper>
              <div
                className={`rooms-swiper${room.id}-button-prev invisible absolute bottom-0 right-0 top-0 z-20 m-auto flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-gray-100/90 shadow-md shadow-black/40 transition-all hover:scale-105 hover:bg-gray-100 group-hover:visible group-hover:right-2`}
              >
                <FaChevronRight
                  size={14}
                  className="hover:text-gary-950 invisible text-gray-800 transition-all group-hover:visible"
                />
              </div>
              <div
                className={`rooms-swiper${room.id}-button-next invisible absolute bottom-0 left-0 top-0 z-20 m-auto flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-gray-100/90 shadow-md shadow-black/40 transition-all hover:scale-105 hover:bg-gray-100 group-hover:visible group-hover:left-2`}
              >
                <FaChevronLeft
                  size={14}
                  className="hover:text-gary-950 invisible text-gray-800 transition-all group-hover:visible"
                />
              </div>
            </div>
            {!isHost && (
              <div className="absolute -bottom-7 left-2 z-10">
                <img
                  alt={room.host.fullname}
                  src={room.host.profile}
                  className="h-14 w-14 rounded-full border-2 border-white object-cover object-top"
                />
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 mx-auto flex h-full flex-col items-start justify-between px-4 pb-4 text-sm text-white">
          <RoomInfoCard
            premium={room.category.includes('premium')}
            fastbooking={room.category.includes('fastbooking')}
          />
        </div>
      </Link>
      <RoomInfosLink titleWidth="70%" room={room} />
      <div className="absolute left-2 top-2 ">
        <LikeAndShareButtons id={room.code} />
      </div>
    </div>
  );
}

export default RoomsContainer;
