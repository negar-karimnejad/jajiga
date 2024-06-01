import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Button from './Button';

interface FaqDateProps {
  id: number;
  question: string;
  answer: string;
}

function FaqList({ list }: { list: FaqDateProps[] }) {
  const [openAnswer, setOpenAnswer] = useState(0);
  return (
    <div className="-mt-5 rounded-t-2xl bg-transparent">
      <div className="container max-w-4xl py-4">
        {list.map((item: FaqDateProps) => (
          <div
            key={item.id}
            className="relative my-4 rounded-md border border-gray-100 bg-white p-2 shadow-sm shadow-gray-300 dark:border dark:border-gray-700 dark:bg-gray-800 dark:shadow-md dark:shadow-gray-950"
          >
            <Button
              style="w-full px-0 py-0 hover:shadow-none"
              onClick={() =>
                setOpenAnswer((prev) => (prev === item.id ? 0 : item.id))
              }
            >
              <h3
                className="text-right font-vazirMedium text-sm text-gray-600 dark:text-gray-50 sm:text-base"
              >
                {item.question}
              </h3>
              {openAnswer === item.id ? (
                <IoIosArrowUp
                  size={17}
                  className="absolute left-2 top-3 dark:text-gray-200"
                />
              ) : (
                <IoIosArrowDown
                  size={17}
                  className="absolute left-2 top-3 dark:text-gray-200"
                />
              )}
            </Button>
            <p
              dangerouslySetInnerHTML={{ __html: item.answer }}
              className={`overflow-hidden text-sm text-right leading-6 text-gray-700 transition-all duration-500 dark:text-gray-400 ${openAnswer === item.id ? 'visible max-h-[100rem] min-h-fit py-5' : 'invisible max-h-0'}`}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqList;
