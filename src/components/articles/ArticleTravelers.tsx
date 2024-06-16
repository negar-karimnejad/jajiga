import { Link } from 'react-router-dom';
import { Article } from '../../redux/store/articles';
import ArticleAuthor from './ArticleAuthor';

function ArticleTravelers({ article }: { article: Article }) {
  return (
    <div className="card col-span-12 h-80 justify-between overflow-hidden bg-base-100  p-5 shadow-xl dark:bg-gray-800 sm:col-span-6 lg:col-span-4">
      <Link
        to="category/travelers"
        className="w-fit rounded-full bg-orange-600 px-2 py-1 text-[11px] text-white transition-all hover:bg-black hover:text-gray-50"
      >
        {article.category.title}
      </Link>
      <h2 className="card-title">
        <Link
          to={`/article/${article.title.replaceAll(' ', '-')}`}
          className="mt-2 transition-all hover:text-sky-600 dark:text-white"
        >
          {article.title}
        </Link>
      </h2>
      <p className="mt-3 text-gray-500">
        {article.description.slice(0, 200)}...
      </p>
      <div className="mt-8 flex items-center gap-3 text-[14px]">
        <ArticleAuthor id={article.author_id ? article.author_id : 0} />
      </div>
    </div>
  );
}

export default ArticleTravelers;
