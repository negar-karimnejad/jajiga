import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Room } from '../../../redux/store/room';
import Button from '../../ui/Button';

interface RoomInfosLinkProps {
  room: Room;
  titleWidth: string;
}
function RoomInfosLink({ room, titleWidth }: RoomInfosLinkProps) {
  return (
    <Link to={`/room/${room?.code}`} className="text-sm dark:text-white">
      <p
        className="mb-1 mt-3 overflow-hidden text-ellipsis whitespace-nowrap font-vazirBold"
        style={{ width: titleWidth }}
        title={room?.title}
      >
        {room?.title}
      </p>
      <p className="mt-2 flex gap-2 text-[13px] text-gray-500 dark:text-gray-300">
        <span className="font-persianNums">
          {room?.bedroom}خوابه . {room?.foundation_meterage} متر . تا{' '}
          {room?.max_capacity} مهمان
        </span>
        <span className="flex gap-1 font-persianNums">
          <BsStarFill className="text-yellow-500" />
          {room?.rating?.total}
        </span>
        <span className="font-persianNums">({room?.reviews} نظر)</span>
      </p>
      <p className="mt-1 flex items-center gap-1 text-sm">
        هر شب از
        <span className="mr-1 font-persianNums">
          {room?.price?.toLocaleString()}
        </span>
        تومان
        <Button style="cursor-default font-persianNums text-[13px] bg-gray-200 rounded-full py-1 hover:shadow-none ">
          {room?.reserved}+ رزرو موفق
        </Button>
      </p>
    </Link>
  );
}

export default RoomInfosLink;
