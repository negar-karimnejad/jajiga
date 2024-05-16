import { useEffect, useState } from 'react';
import { Room } from '../redux/store/room';
import useRooms from './useRooms';

function useSearch() {
  const [searchResult, setSearchResult] = useState<Room[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const { rooms } = useRooms();

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

  const setSearch = (search: string) => {
    setSearchValue(search);
  };

  return { searchResult, setSearch };
}

export default useSearch;
