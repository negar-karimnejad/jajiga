import { useEffect, useState } from 'react';
import { BsShare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useRooms from '../../hooks/useRooms';

function QuickSearchCard({
  openModalHandler,
  item,
}: {
  openModalHandler: () => void;
  item: {
    id: number;
    title: string;
    cover: string;
    to: string;
  };
}) {
  const { rooms } = useRooms();
  const [category, setCategory] = useState('');
  const [roomsLength, setRoomsLength] = useState(0);

  useEffect(() => {
    setCategory(item.to);

    if (category) {
      setRoomsLength(
        rooms.filter((room) => room.category.includes(category)).length,
      );
    }
  }, [category, item.to, rooms]);

  return (
    <>
      <div className="relative overflow-hidden rounded-xl">
        <Link to={`/s/${item.to}`}>
          <img
            loading="lazy"
            src={item.cover}
            className="block h-72 w-full object-cover"
            alt={item.title}
          />
        </Link>
        <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex flex-col items-center justify-center px-4 pb-4 text-sm text-white">
          <p>{item.title}</p>
          <div className="mt-2 flex items-center gap-3">
            <p>{roomsLength} اقامتگاه</p>
            <div onClick={openModalHandler}>
              <BsShare />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 top-40 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </>
  );
}

export default QuickSearchCard;
