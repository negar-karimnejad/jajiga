import { useState } from 'react';
import { BsShare } from 'react-icons/bs';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import ShareModal from './ShareModal';

function RoomHeader() {
  const [hoveredImage, setHoveredImage] = useState<null | number>(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeModalHandler = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const isLike = true;
  return (
    <>
      <div className="container my-5 flex h-80 cursor-pointer gap-2 transition-all">
        <div className="w-full flex-1">
          <img
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            className={`h-full w-full rounded-lg object-cover ${
              hoveredImage !== null && hoveredImage !== 0
                ? 'grayscale'
                : 'grayscale-0'
            }`}
            src="/images/room/1.png"
            alt=""
          />
        </div>
        <div className="flex w-full flex-1 gap-2">
          <div className="flex w-full flex-col gap-1">
            <img
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              className={`h-1/2 rounded-lg object-cover ${
                hoveredImage !== null && hoveredImage !== 1
                  ? 'grayscale'
                  : 'grayscale-0'
              }`}
              src="/images/room/2.png"
              alt=""
            />
            <img
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              className={`h-1/2 rounded-lg object-cover ${
                hoveredImage !== null && hoveredImage !== 2
                  ? 'grayscale'
                  : 'grayscale-0'
              }`}
              src="/images/room/3.png"
              alt=""
            />
          </div>
          <div className="relative flex w-full flex-col gap-1">
            <img
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              className={`h-1/2 rounded-lg object-cover ${
                hoveredImage !== null && hoveredImage !== 3
                  ? 'grayscale'
                  : 'grayscale-0'
              }`}
              src="/images/room/4.png"
              alt=""
            />
            <img
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              className={`h-1/2 rounded-lg object-cover ${
                hoveredImage !== null && hoveredImage !== 4
                  ? 'grayscale'
                  : 'grayscale-0'
              }`}
              src="/images/room/5.png"
              alt=""
            />
            <div className="absolute left-2 top-2 z-30 flex gap-2">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-white/90">
                {isLike ? (
                  <>
                    <GoHeartFill className="my-2 text-red-600" size={18} />
                    {/* <div className="absolute -bottom-9 left-1/2 w-fit -translate-x-1/2 transform whitespace-nowrap rounded-md bg-white/90 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:bg-white/85">
                    حذف از علاقه مندی ها
                  </div>
                  <div className="absolute -bottom-9 left-1/2 w-fit -translate-x-1/2 transform whitespace-nowrap rounded-md bg-white/90 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:bg-white/85">
                    به علاقه مندی ها اضافه شد
                  </div> */}
                  </>
                ) : (
                  <>
                    <GoHeart size={18} className="my-2" />
                    {/* <div className="absolute -bottom-9 left-1/2 w-fit -translate-x-1/2 transform whitespace-nowrap rounded-md bg-white/90 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:bg-white/85">
                    افزودن به علاقه مندی ها
                  </div>
                  <div className="absolute -bottom-9 left-1/2 w-fit -translate-x-1/2 transform whitespace-nowrap rounded-md bg-white/90 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:bg-white/85">
                    از علاقه مندی ها حذف شد
                  </div> */}
                  </>
                )}
              </div>
              <div
                onClick={() => setIsOpen(true)}
                className="relative flex h-8 w-8 items-center justify-center rounded-md bg-white/90"
              >
                <BsShare size={18} />
                {/* <div className="absolute -bottom-9 left-1/2 w-fit -translate-x-1/4 transform whitespace-nowrap rounded-md bg-white/90 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-3 after:h-3 after:w-3 after:rotate-45 after:bg-white/85">
                اشتراک گذاری
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShareModal isOpen={isOpen} closeModalHandler={closeModalHandler} />
    </>
  );
}

export default RoomHeader;
