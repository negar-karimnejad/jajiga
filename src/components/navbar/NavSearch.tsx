import { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import useSearch from '../../hooks/useSearch';
import SearchModal from '../ui/SearchModal';
import SearchResultModal from '../ui/SearchResultModal';

function NavSearch() {
  const { searchResult, searchHandler, searchValue } = useSearch();
  const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);

  const closeHandler = () => {
    setIsOpenSearchModal(false);
  };

  const resetForm = () => {
    searchHandler('');
  };

  useEffect(() => {
    // Disable body scroll when the modal is open
    if (isOpenSearchModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpenSearchModal]);

  useEffect(() => {
    searchHandler(searchValue);
  }, [searchHandler, searchValue]);

  
  return (
    <>
      <form className="relative max-w-7xl flex-1 max-sm:w-44">
        <label className="relative flex w-full rounded-full border p-2 dark:border-gray-500 ">
          <input
            onClick={() => setIsOpenSearchModal(true)}
            value={searchValue}
            onChange={(e) => searchHandler(e.target.value)}
            type="text"
            className="grow bg-transparent outline-none dark:text-gray-100"
            placeholder="میخوای کجا بری؟"
          />
          <IoIosSearch
            size={25}
            className="absolute left-2 dark:text-gray-200"
          />
        </label>
        {searchResult.length > 0 && searchValue && (
          <div className="absolute left-0 right-0 z-40 mx-auto mt-2 w-96">
            <div className="rounded-lg border bg-white px-2 py-4 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <SearchResultModal
                resetForm={resetForm}
                searchResult={searchResult}
              />
            </div>
          </div>
        )}
        {searchResult.length > 0 && searchValue && (
          <div className="absolute left-0 right-0 z-40 mx-auto mt-2 w-full md:hidden">
            <SearchResultModal
              resetForm={resetForm}
              searchResult={searchResult}
            />
          </div>
        )}
      </form>
      <div onClick={closeHandler}>
        {isOpenSearchModal && <SearchModal closeHandler={closeHandler} isOpen={isOpenSearchModal} />}
      </div>
    </>
  );
}

export default NavSearch;
