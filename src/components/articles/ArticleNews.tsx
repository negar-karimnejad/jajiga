import { Link, useNavigate } from 'react-router-dom';
import { Article } from '../../redux/store/articles';
import ArticleAuthor from './ArticleAuthor';

function ArticleNews({ article }: { article: Article }) {
  const navigate = useNavigate();

  return (
    <div className="card card-side col-span-12 h-80 overflow-hidden bg-base-100 shadow-xl dark:bg-gray-800">
      <figure className="shrink-0 sm:w-1/2">
        <div
          className="relative h-full w-full cursor-pointer"
          onClick={() =>
            navigate(`/article/${article.title.replaceAll(' ', '-')}`)
          }
        >
          <div className="h-full w-full">
            <img
              loading="lazy"
              src={article.cover}
              alt={article.title}
              className="h-full w-screen object-cover"
            />
          </div>
          <div
            title={article.title}
            className="absolute right-0 top-0 h-full w-full bg-black/35 transition-all duration-500 hover:bg-black/70 sm:bg-black/10 sm:hover:bg-black/50"
          >
            <div className="flex h-full flex-col justify-between p-10 sm:hidden">
              <div title={article.title} className="">
                <Link
                  to={`/article/category/${article.category.en_title}`}
                  className={`w-fit rounded-full px-2 py-1 text-[11px] text-white transition-all hover:bg-amber-50 hover:text-gray-700 ${article.category.id === 2 ? 'bg-emerald-600' : 'bg-red-600'}`}
                >
                  {article.category.title}
                </Link>
                <Link to={`/article/${article.title.replaceAll(' ', '-')}`}>
                  <h2 className="card-title mt-5 text-white sm:w-1/2">
                    {article.title}
                  </h2>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-3 text-[14px]">
                <ArticleAuthor id={article.author_id} />
              </div>
            </div>
          </div>
        </div>
      </figure>
      <div className="card-body justify-between max-sm:hidden">
        <div title={article.title} className="">
          <Link
            to={`/article/category/${article.category.en_title}`}
            className={`w-fit rounded-full px-2 py-1 text-[11px] text-white transition-all hover:bg-black hover:text-gray-50 bg-${article.category.color}-600`}
            style={{ backgroundColor: article.category.color }}
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
          {article.description.slice(0, 120)}...
        </p>
        <div className="mt-8 flex items-center gap-3 text-[14px]">
          <ArticleAuthor id={article.author_id} />
        </div>
      </div>
    </div>
  );
}

export default ArticleNews;
