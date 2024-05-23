import { useEffect, useState } from 'react';
import { Room } from '../redux/store/room';
import useRooms from './useRooms';

function useSearch() {
  const [searchResult, setSearchResult] = useState<Room[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const { rooms, loading } = useRooms();

  useEffect(() => {
    let filteredRooms: Room[] = [];
    if (searchValue) {
      filteredRooms = rooms.filter((room) =>
        room.category.some((category) => category.includes(searchValue)),
      );
      // filteredRooms = rooms.filter((room) => room.title.includes(searchValue));
    }
    setSearchResult(filteredRooms);
  }, [rooms, searchValue]);

  const searchHandler = (search: string) => {
    setSearchValue(search);
  };

  return { searchResult, searchHandler, searchValue, loading };
}

export default useSearch;
