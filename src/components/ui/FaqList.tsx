import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { faqDate } from '../../data/data';

interface FaqDateProps {
  id: number;
  question: string;
  answer: string;
}

function FaqList() {
  const [openAnswer, setOpenAnswer] = useState(0);
  return (
    <div className="-mt-5 rounded-t-2xl bg-white dark:bg-gray-800">
      <div className="container max-w-4xl py-4">
        {faqDate.map((item: FaqDateProps) => (
          <div
            key={item.id}
            className="relative my-4 rounded-md border border-gray-100 p-2 shadow-sm shadow-gray-300 dark:border dark:border-gray-700 dark:shadow-md dark:shadow-gray-950"
          >
            <button
              className="w-full"
              onClick={() =>
                setOpenAnswer((prev) => (prev === item.id ? 0 : item.id))
              }
            >
              <h3 className="text-right font-vazirMedium text-sm sm:text-base text-gray-600 dark:text-gray-300">
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
            </button>
            <p
              className={`overflow-hidden text-sm leading-6 text-gray-700 transition-all duration-500 dark:text-gray-400 ${openAnswer === item.id ? 'visible max-h-96 py-5' : 'invisible max-h-0'}`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqList;
