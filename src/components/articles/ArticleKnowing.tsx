import { Link, useNavigate } from 'react-router-dom';
import { Article } from '../../redux/store/articles';
import ArticleAuthor from './ArticleAuthor';

function ArticleKnowing({ article }: { article: Article }) {
  const navigate = useNavigate();

  return (
    <div className="card card-side col-span-12 h-80 overflow-hidden bg-base-100 shadow-xl dark:bg-gray-800 lg:col-span-6">
      <figure className="shrink-0 sm:w-1/2">
        <div
          className="relative h-full w-full cursor-pointer"
          onClick={() =>
            navigate(`/article/${article.title.replaceAll(' ', '-')}`)
          }
        >
          {typeof article.cover === 'string' && (
            <img
              loading="lazy"
              src={article.cover}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          )}
          <div
            title={article.title}
            className="absolute right-0 top-0 h-full w-full bg-black/35 transition-all duration-500 hover:bg-black/70 sm:bg-black/10 sm:hover:bg-black/50"
          >
            <div className="flex h-full flex-col justify-between p-10 sm:hidden">
              <div title={article.title} className="">
                <Link
                  to="/article/category/knowing"
                  className="w-fit rounded-full bg-purple-600 px-2 py-1 text-[11px] text-white transition-all hover:bg-amber-50 hover:text-gray-700"
                >
                  {article.category.title}
                </Link>
                <Link to={`/article/${article.title.replaceAll(' ', '-')}`}>
                  <h2 className="card-title mt-5 w-1/2 text-white">
                    {article.title}
                  </h2>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-3 text-[14px]">
                <ArticleAuthor id={article.author_id ? article.author_id : 0} />
              </div>
            </div>
          </div>
        </div>
      </figure>
      <div className="card-body justify-between max-sm:hidden">
        <div title={article.title}>
          <Link
            to="/article/category/knowing"
            className="w-fit rounded-full bg-purple-600 px-2 py-1 text-[11px] text-white transition-all hover:bg-black hover:text-gray-50"
          >
            {article.category.title}
          </Link>
        </div>
        <h2 className="card-title">
          <Link
            to={`/article/${article.title.replaceAll(' ', '-')}`}
            className="mt-2 transition-all hover:text-sky-600 dark:text-white"
          >
            {article.title}
          </Link>
        </h2>
        <p className="mt-3 text-gray-500">
          {article.description.slice(0, 80)}...
        </p>
        <div className="mt-8 flex items-center gap-3 text-[14px]">
          <ArticleAuthor id={article.author_id ? article.author_id : 0} />
        </div>
      </div>
    </div>
  );
}

export default ArticleKnowing;
