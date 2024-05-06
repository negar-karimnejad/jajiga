import { Link } from 'react-router-dom';
import { useArticles } from '../../hooks/useArticles';
import MagKnowing from './MagKnowing';
import MagNews from './MagNews';
import MagPost from './MagPost';
import MagTravelers from './MagTravelers';

function ArticlesMain() {
  const { hosting, knowing, travelers, wherewhy, news } = useArticles();
  // 4
  return (
    <div className="container mb-10">
      <div className="mb-5 mt-10 flex justify-between">
        <h3 className="font-vazirBold text-2xl dark:text-white">سفر به کجا؟</h3>
        <Link
          to="category/wherewhy"
          className="h-fit w-fit rounded-full bg-gray-300 px-3 py-1 text-sm transition-all hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-950 dark:hover:text-white"
        >
          بیشتر
        </Link>
      </div>
      <div className=" grid grid-cols-12 gap-5">
        {wherewhy.map((article) => (
          <MagPost key={article.id} article={article} />
        ))}
        {hosting.map((article) => (
          <MagNews key={article.id} article={article} />
        ))}
        {knowing.map((article) => (
          <MagKnowing key={article.id} article={article} />
        ))}
        {travelers.map((article) => {
          if (article.id % 2 === 0) {
            return <MagTravelers key={article.id} article={article} />;
          } else {
            return <MagPost key={article.id} article={article} />;
          }
        })}
        {news.map((article) => (
          <MagNews key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default ArticlesMain;
