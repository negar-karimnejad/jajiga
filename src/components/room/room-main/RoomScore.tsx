import { BsStar, BsStarFill } from 'react-icons/bs';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import useRoom from '../../../hooks/useRoom';

function RoomScore() {
  const { id } = useParams();
  const { room } = useRoom(Number(id));

  const scores = [
    { id: 1, title: 'صحت مطالب', score: room?.rating?.truth },
    { id: 2, title: 'شیوه برخورد میزبان', score: room?.rating?.attitude },
    { id: 3, title: 'پاکیزگی اقامتگاه', score: room?.rating?.clean },
    { id: 4, title: 'مکان اقامتگاه', score: room?.rating?.location },
    { id: 5, title: 'تحویل اقامتگاه', score: room?.rating?.Delivery },
    { id: 6, title: 'کیفیت نسبت به نرخ', score: room?.rating?.quality },
  ];
  if (!room) return null;
  return (
    <div className="mt-5" id="commentsRef">
      <h4 className="flex justify-between">
        <span className="font-vazirBold text-lg">
          امتیاز{' '}
          <small className="font-persianNums text-sm">
            ({room.reviews} مهمان)
          </small>
        </span>
        <div className="flex items-center gap-2">
          <Rating
            initialRating={room.rating?.total}
            fullSymbol={<BsStarFill />}
            emptySymbol={<BsStar />}
            readonly={true}
            className="text-yellow-400"
          />
          <span className="mb-0.5 font-persianNums text-base">
            {room.rating?.total}
          </span>
        </div>
      </h4>
      <ul className="mt-5 justify-between gap-10 text-sm max-md:space-y-2 md:flex">
        <div className="flex flex-1 flex-col gap-2">
          {scores.slice(0, 3).map((item) => (
            <li key={item.id} className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                {item.title}
              </span>
              <Rating
                initialRating={item.score}
                fullSymbol={<BsStarFill />}
                emptySymbol={<BsStar />}
                readonly={true}
                className="text-yellow-400"
              />
            </li>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          {scores.slice(3, 6).map((item) => (
            <li key={item.id} className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                {item.title}
              </span>
              <Rating
                initialRating={item.score}
                fullSymbol={<BsStarFill />}
                emptySymbol={<BsStar />}
                readonly={true}
                className="text-yellow-400"
              />
            </li>
          ))}
        </div>
      </ul>
      <div className="my-5 h-[1px] w-full bg-gray-200"></div>
    </div>
  );
}

export default RoomScore;
