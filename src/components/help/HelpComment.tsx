import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { RiFileUnknowLine } from 'react-icons/ri';
import Button from '../ui/Button';

interface HelpCommentProps {
  id: number;
  title: string;
  content: string;
}

function HelpComment(comment: HelpCommentProps) {
  const [activeComment, setActiveComment] = useState(0);
  console.log(comment);

  return (
    <div className="border-b py-5">
      <Button
        onClick={() =>
          setActiveComment((prev) => (prev === comment.id ? 0 : comment.id))
        }
        style="flex w-full py-0 hover:shadow-none px-0 text-white items-center justify-between"
      >
        <div className="flex items-center gap-2 text-gray-800 dark:text-white">
          <RiFileUnknowLine size={18} className='shrink-0' />
          <p className="text-right">{comment.title}</p>
        </div>

        <BiChevronDown
          size={24}
          className={`shrink-0 text-gray-800 transition-all duration-700 dark:text-white ${activeComment === comment.id ? 'rotate-180' : 'rotate-0'}`}
        />
      </Button>
      <article
        dangerouslySetInnerHTML={{ __html: comment.content }}
        className={`flex flex-col gap-5 overflow-hidden text-sm leading-6 text-gray-500 transition-all duration-500 dark:text-gray-400 ${activeComment === comment.id ? 'visible max-h-[100rem] min-h-fit py-8' : 'invisible max-h-0'}`}
      ></article>
    </div>
  );
}

export default HelpComment;
