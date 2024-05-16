import { ChangeEvent, useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import useSearch from '../../hooks/useSearch';
import SearchResultModal from '../ui/SearchResultModal';

function NavSearch() {
  const [search, setSearch] = useState<string>('');
  const { searchResult, setSearch: setSearchQuery } = useSearch();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setSearchQuery(search);
  }, [setSearchQuery, search]);

  return (
    <form className="max-w-7xl flex-1 max-sm:w-48">
      <label className="relative flex w-full rounded-full border p-2 dark:border-gray-500 ">
        <input
          value={search}
          onChange={changeHandler}
          type="text"
          className="grow bg-transparent outline-none dark:text-gray-100"
          placeholder="میخوای کجا بری؟"
        />
        <IoIosSearch size={25} className="absolute left-2 dark:text-gray-200" />
      </label>
      {searchResult.length > 0 && (
        <div className="absolute left-0 right-0 z-40 mx-auto mt-2 w-full">
          <SearchResultModal searchResult={searchResult} />
        </div>
      )}
    </form>
  );
}

export default NavSearch;
