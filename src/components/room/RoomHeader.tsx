import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useRoom from '../../hooks/useRoom';
import LikeAndShareButtons from './LikeAndShareButtons';

function RoomHeader() {
  const [hoveredImage, setHoveredImage] = useState<null | number>(null);
  const { id } = useParams();
  const { room } = useRoom(Number(id));

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  if (!room) return;
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
            src={room.images.at(0)}
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
              src={room.images.at(1)}
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
              src={room.images.at(2)}
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
              src={room.images.at(3)}
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
              src={room.images.at(4)}
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
