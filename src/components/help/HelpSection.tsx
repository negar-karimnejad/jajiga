import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { helpComments } from '../../data/data';
import HelpComment from './HelpComment';
import HelpMenu from './HelpMenu';
import HelpMenuItem from './HelpMenuItem';
interface helpCommentsProps {
  id: number;
  title: string;
  content: string;
}
function HelpSection({ modal }: { modal?: boolean }) {
  const [isActive, setIsActive] = useState(0);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<helpCommentsProps[] | null>(
    null,
  );

  const resetActive = () => {
    setIsActive(0);
  };

  const changeActive = (id: number) => {
    setIsActive(id);
  };

  useEffect(() => {
    setSearchResult(helpComments.filter((item) => item.title.includes(search)));
  }, [search]);

  return (
    <>
      <div className="-mt-5 min-h-screen rounded-t-2xl bg-white dark:bg-gray-900">
        <div
          className={`container grid-cols-12 py-16 max-sm:space-y-10 ${modal ? 'flex flex-col' : 'grid'}`}
        >
          <div
            className={`max-sm:border-b max-sm:pb-10 z-0 ${search ? 'col-span-12' : 'col-span-4 max-sm:col-span-12'}`}
          >
            <div
              className={`relative flex w-full items-center gap-2 border-2 px-5 py-2 dark:border-gray-500 dark:bg-white md:w-5/6 ${search ? 'rounded-t-3xl' : ' rounded-full'}`}
            >
              {searchResult && search && (
                <div className="absolute right-0 top-10 h-fit w-full rounded-b-3xl border-2 bg-white px-5 py-2 shadow-lg dark:border-gray-500 dark:bg-white">
                  {searchResult?.map((item) => (
                    <HelpComment key={item.id} {...item} />
                  ))}
                </div>
              )}
              <BiSearch size={20} className="text-gray-500" />
              <input
                type="text"
                placeholder="دنبال چی می گردی؟"
                className="outline-0 dark:bg-white"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <h3 className="mb-3 mt-6 text-lg dark:text-white">فهرست راهنما</h3>
            <ul className="flex flex-col gap-3 dark:text-gray-100">
              <HelpMenuItem
                changeActive={changeActive}
                isActive={isActive}
                id={1}
              >
                چطور شروع کنم؟
              </HelpMenuItem>
              <HelpMenuItem
                changeActive={changeActive}
                isActive={isActive}
                id={2}
              >
                نظرات
              </HelpMenuItem>
              <HelpMenuItem
                changeActive={changeActive}
                isActive={isActive}
                id={3}
              >
                ارتباط با ما
              </HelpMenuItem>
            </ul>
          </div>

          <HelpMenu
            modal={modal}
            isActive={isActive}
            resetActive={resetActive}
          />
        </div>
      </div>
    </>
  );
}

export default HelpSection;
