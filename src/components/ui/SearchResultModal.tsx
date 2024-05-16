import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Room } from '../../redux/store/room';

interface SearchResultModalProps {
  searchResult: Room[];
}

function SearchResultModal({ searchResult }: SearchResultModalProps) {
  return (
      <div className="rounded-lg border bg-white px-2 py-5 shadow-lg">
        {searchResult.map((room, index) => (
          <>
            <Link
              to={`/s/${room.category[0]}`}
              key={room.id}
              className="flex items-center justify-between py-2.5 text-sm text-gray-700"
            >
              <p className="flex items-center gap-1">
                <IoLocationOutline size={16} />
                {room.category[2]}
              </p>
              <p className=" text-gray-500">{room.category[1]}</p>
            </Link>
            {searchResult.length > index + 1 && (
              <div className="h-0.5 w-full border-b"></div>
            )}
          </>
        ))}
      </div>
  );
}

export default SearchResultModal;
