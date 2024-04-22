import { Link, useNavigate } from 'react-router-dom';
import { useAuthor } from '../../hooks/useAuthor';
import { useCategory } from '../../hooks/useCategory';
import { Article } from '../../redux/store/articles';
import MagAuthor from './MagAuthor';

function MagNews({ article }: { article: Article }) {
  const navigate = useNavigate();
  const { author } = useAuthor(article.author_id);
  const { category } = useCategory(article.category_id);

  return (
    <div className="card card-side col-span-12 h-80 overflow-hidden bg-base-100 shadow-xl">
      <figure className="shrink-0 sm:w-1/2">
        <div
          className="relative h-full w-full cursor-pointer"
          onClick={() => navigate(`/${article.title}`)}
        >
          <img
            src={article.cover}
            alt={article.title}
            className="h-full w-full object-cover"
          />
          <div
            title={article.title}
            className="absolute right-0 top-0 h-full w-full bg-black/35 transition-all duration-500 hover:bg-black/70 sm:bg-black/10 sm:hover:bg-black/50"
          >
            <div className="flex h-full flex-col justify-between p-10 sm:hidden">
              <div title={article.title} className="">
                <Link
                  to="category/knowing"
                  className={`w-fit rounded-full px-2 py-1 text-[11px] text-white transition-all hover:bg-amber-50 hover:text-gray-700 ${category?.id === 4 ? 'bg-emerald-600' : 'bg-red-600'}`}
                >
                  {category?.title}
                </Link>
                <Link to={`/${article.title}`}>
                  <h2 className="card-title mt-5 w-1/2 text-white">
                    {article.title}
                  </h2>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-3 text-[14px]">
                <MagAuthor author={author} />
              </div>
            </div>
          </div>
        </div>
      </figure>
      <div className="card-body justify-between max-sm:hidden">
        <div title={article.title} className="">
          <Link
            to="category/knowing"
            className="w-fit rounded-full bg-red-600 px-2 py-1 text-[11px] text-white transition-all hover:bg-black hover:text-gray-50"
          >
            {category?.title}
          </Link>
        </div>
        <h2 className="card-title">
          <Link
            to={`/${article.title}`}
            className="mt-2 transition-all hover:text-sky-600"
          >
            {article.title}
          </Link>
        </h2>
        <p className="mt-3 text-gray-500">
          {article.description.slice(0, 120)}...
        </p>
        <div className="mt-8 flex items-center gap-3 text-[14px]">
          <MagAuthor author={author} />
        </div>
      </div>
    </div>
  );
}

export default MagNews;