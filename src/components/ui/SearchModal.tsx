import { ChangeEvent, useEffect, useRef, useState } from 'react';
import useSearch from '../../hooks/useSearch';
import SearchResultModal from './SearchResultModal';

function SearchModal({ isOpen }: { isOpen: boolean }) {
  const [search, setSearch] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { searchResult, setSearch: setSearchQuery } = useSearch();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  console.log(searchResult);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setSearchQuery(search);
  }, [setSearchQuery, search]);
  return (
    <div
      className={`md:hidden fixed right-0 top-0 z-50 h-screen w-full bg-black/60 transition-all duration-500 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-0 top-0 w-full rounded-lg bg-white p-5 dark:bg-gray-800 shadow transition-all duration-500 dark:text-white  ${isOpen ? '' : ''}`}
      >
        <div className="flex w-full flex-col items-center">
          <div className="input input-bordered flex w-full items-center gap-2 rounded-full pl-1 bg-white dark:bg-gray-600">
            <input
              ref={inputRef}
              type="text"
              className="w-full grow text-gray-700 dark:text-white"
              placeholder="میخوای کجا بری؟"
              value={search}
              onChange={changeHandler}
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-8 w-8 rounded-full bg-yellow-400 p-1 text-gray-800 transition-all hover:bg-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {searchResult.length > 0 && (
            <div className="mt-2 h-fit w-full">
              <div>
                <SearchResultModal searchResult={searchResult} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
