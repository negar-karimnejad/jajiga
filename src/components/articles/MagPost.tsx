import { CiCalendarDate } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthor } from '../../hooks/useAuthor';
import { useCategory } from '../../hooks/useCategory';
import { Article } from '../../redux/store/articles';
import convertToPersianDate from '../../utilities/convertToPersianDate';
import MagAuthor from './MagAuthor';

function MagPost({ article }: { article: Article }) {
  const navigate = useNavigate();

  const { author } = useAuthor(article.author_id);
  const { category } = useCategory(article.category_id);

  return (
    <div className="card col-span-12 dark:bg-gray-800 overflow-hidden bg-base-100 shadow-xl sm:col-span-6 lg:col-span-4">
      <figure className="relative h-40">
        <div
          className="h-full w-full cursor-pointer"
          onClick={() => navigate(`/${article.title}`)}
        >
          <img
            src={article.cover}
            alt={article.title}
            className="h-full w-full object-cover"
          />
          <div
            title={article.title}
            className="absolute left-0 top-0 h-full w-full bg-black/10 transition-all duration-500 hover:bg-black/50"
          >
            <div title={article.title} className="absolute right-5 top-5">
              <Link
                to="category/wherewhy"
                className={`w-fit rounded-full px-2 py-1 text-[11px] text-white transition-all hover:bg-amber-50 hover:text-gray-700 ${category?.id === 1 ? 'bg-sky-600' : 'bg-orange-600'}`}
              >
                {category?.title}
              </Link>
            </div>
          </div>
        </div>
      </figure>
      <div className="card-body justify-between">
        <h2 className="card-title">
          <Link
            to={`/${article.title}`}
            className="transition-all dark:text-white hover:text-sky-600"
          >
            {article.title}
          </Link>
        </h2>
        <div className="mt-8 flex items-center gap-3 text-[14px]">
          <MagAuthor author={author} />
          <div className="flex items-center gap-1">
            <CiCalendarDate size={17} className="text-gray-600" />
            <p className="whitespace-nowrap font-BKoodak text-gray-400">
              {convertToPersianDate(article.created_at)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagPost;
