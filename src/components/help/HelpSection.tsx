import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import HelpMenu from './HelpMenu';
import HelpMenuItem from './HelpMenuItem';

function HelpSection({ modal }: { modal?: boolean }) {
  const [isActive, setIsActive] = useState(0);

  const resetActive = () => {
    setIsActive(0);
  };
  
  const changeActive = (id: number) => {
    setIsActive(id);
  };

  return (
    <>
      <div className="-mt-5 min-h-screen rounded-t-2xl bg-white dark:bg-gray-900">
        <div
          className={`container grid-cols-12 py-16 max-sm:space-y-10 ${modal ? 'flex flex-col' : 'grid'}`}
        >
          <div className="col-span-4 max-sm:col-span-12 max-sm:border-b max-sm:pb-10">
            <div className="flex w-5/6 items-center gap-2 overflow-hidden rounded-full border-2 px-5 py-2 dark:border-gray-500 dark:bg-white">
              <BiSearch size={20} className="text-gray-500" />
              <input
                type="text"
                placeholder="دنبال چی می گردی؟"
                className="outline-0 dark:bg-white"
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
