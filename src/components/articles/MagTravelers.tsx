import { Link } from 'react-router-dom';
import { useCategories } from '../../hooks/useCategories';
import { Article } from '../../redux/store/articles';
import MagAuthor from './MagAuthor';

function MagTravelers({ article }: { article: Article }) {
  const { category } = useCategories(article.category_id);

  return (
    <div className="card col-span-12 h-80 justify-between overflow-hidden bg-base-100  p-5 shadow-xl dark:bg-gray-800 sm:col-span-6 lg:col-span-4">
      <Link
        to="category/knowing"
        className="w-fit rounded-full bg-orange-600 px-2 py-1 text-[11px] text-white transition-all hover:bg-black hover:text-gray-50"
      >
        {category?.title}
      </Link>
      <h2 className="card-title">
        <Link
          to={`/${article.title}`}
          className="mt-2 transition-all hover:text-sky-600 dark:text-white"
        >
          {article.title}
        </Link>
      </h2>
      <p className="mt-3 text-gray-500">
        {article.description.slice(0, 200)}...
      </p>
      <div className="mt-8 flex items-center gap-3 text-[14px]">
        <MagAuthor id={article.author_id} />
      </div>
    </div>
  );
}

export default MagTravelers;
