import { Link } from 'react-router-dom';

interface ArticleHeadingProps {
  title: string;
}

function ArticleHeading({ title }: ArticleHeadingProps) {
  return (
    <div className="mb-5 mt-10 flex justify-between">
      <h3 className="font-vazirBold text-2xl dark:text-white">{title}</h3>
      <Link
        to="category/wherewhy"
        className="h-fit w-fit rounded-full bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300 transition-all dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        بیشتر
      </Link>
    </div>
  );
}

export default ArticleHeading;
