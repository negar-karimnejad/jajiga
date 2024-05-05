import { BsStar, BsStarFill } from 'react-icons/bs';

function RoomScore() {
  return (
    <div className="mt-5" id="commentsRef">
      <h4 className="flex justify-between">
        <span className="font-vazirBold text-lg">
          امتیاز <small className="font-persianNums text-sm">(14 مهمان)</small>
        </span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            <BsStar className="text-yellow-400" />
            <BsStarFill className="text-yellow-400" />
            <BsStarFill className="text-yellow-400" />
            <BsStarFill className="text-yellow-400" />
            <BsStarFill className="text-yellow-400" />
          </div>
          <span className="font-persianNums">4.7</span>
        </div>
      </h4>
      <ul className="mt-5 justify-between gap-10 text-sm max-md:space-y-2 md:flex">
        <div className="flex flex-1 flex-col gap-2">
          <li className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">صحت مطالب</span>
            <div className="flex gap-0.5">
              <BsStar className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
            </div>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              شیوه برخورد میزبان
            </span>
            <div className="flex gap-0.5">
              <BsStar className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
            </div>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              پاکیزگی اقامتگاه
            </span>
            <div className="flex gap-0.5">
              <BsStar className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
            </div>
          </li>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <li className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              مکان اقامتگاه
            </span>
            <div className="flex gap-0.5">
              <BsStar className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
            </div>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              تحویل اقامتگاه
            </span>
            <div className="flex gap-0.5">
              <BsStar className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
            </div>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              کیفیت نسبت به نرخ
            </span>
            <div className="flex gap-0.5">
              <BsStar className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
              <BsStarFill className="text-yellow-400" size={12} />
            </div>
          </li>
        </div>
      </ul>
      <div className="my-5 h-[1px] w-full bg-gray-200"></div>
    </div>
  );
}

export default RoomScore;
