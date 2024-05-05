import { useState } from 'react';
import LikeAndShareButtons from './LikeAndShareButtons';

function RoomHeader() {
  const [hoveredImage, setHoveredImage] = useState<null | number>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };
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
            <div className="absolute left-2 top-2 z-30">
              <LikeAndShareButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomHeader;
