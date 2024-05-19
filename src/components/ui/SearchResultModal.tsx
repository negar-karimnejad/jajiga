import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Room } from '../../redux/store/room';

interface SearchResultModalProps {
  searchResult: Room[];
}

function SearchResultModal({ searchResult }: SearchResultModalProps) {
  return (
    <>
      <h3 className="mt-2 mb-4 text-center font-vazirMedium border-b w-fit mx-auto">لیست شهرها</h3>
      <div className="h-fit max-h-[30rem] overflow-y-auto">
        {searchResult.map((room, index) => (
          <>
            <Link
              to={`/s/${room.category[0]}`}
              key={room.id}
              className="flex items-center justify-between py-2.5 text-sm text-gray-700 dark:text-white"
            >
              <p className="flex items-center gap-1">
                <IoLocationOutline size={16} />
                {room.category[2]}
              </p>
              <p className=" text-gray-500 dark:text-white">
                {room.category[1]}
              </p>
            </Link>
            {searchResult.length > index + 1 && (
              <div className="h-0.5 w-full border-b dark:border-gray-700"></div>
            )}
          </>
        ))}
      </div>
    </>
  );
}

export default SearchResultModal;
