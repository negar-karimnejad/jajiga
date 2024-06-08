import { CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { Article } from '../../redux/store/articles';
import convertToPersianDate from '../../utilities/convertToPersianDate';
import ArticleAuthor from './ArticleAuthor';

function ArticlePost({ article }: { article: Article }) {
  return (
    <div className="card col-span-12 overflow-hidden bg-base-100 shadow-xl dark:bg-gray-800 sm:col-span-6 lg:col-span-4">
      <figure className="relative h-40">
        <div className="h-full w-full">
          <Link
            to={`/article/${article.title.replaceAll(' ', '-')}`}
            className="h-full w-full"
          >
            <img
              loading="lazy"
              src={article.cover}
              alt={article.title}
              className="h-full w-full object-cover brightness-90 transition-all duration-500 hover:brightness-75"
            />
          </Link>
          <div title={article.title} className="absolute right-5 top-5">
            <Link
              to={`/article/category/${article.category.en_title}`}
              className={`w-fit rounded-full px-2 py-1 text-[11px] text-white transition-all hover:bg-amber-50 hover:text-gray-700 bg-${article.category.color}-600`}
              style={{ backgroundColor: article.category.color }}
            >
              {article.category.title}
            </Link>
          </div>
        </div>
      </figure>
      <div className="card-body justify-between">
        <h2 className="card-title">
          <Link
            to={`/article/${article.title.replaceAll(' ', '-')}`}
            className="transition-all hover:text-sky-600 dark:text-white"
          >
            {article.title}
          </Link>
        </h2>
        <div className="mt-8 flex items-center gap-3 text-[13px]">
          <ArticleAuthor id={article.author_id} />
          <div className="flex items-center gap-1">
            <CiCalendarDate
              size={17}
              className="text-gray-600 dark:text-gray-300"
            />
            <p className="whitespace-nowrap pt-1.5 font-persianNums text-[11px] tracking-wider text-gray-400">
              {convertToPersianDate(article.created_at)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePost;
