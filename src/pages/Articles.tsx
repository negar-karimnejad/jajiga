import { Link } from 'react-router-dom';
import ArticlesFooter from '../components/articles/ArticlesFooter';
import ArticlesHeader from '../components/articles/ArticlesHeader';
import ArticlesHero from '../components/articles/ArticlesHero';
import MagKnowing from '../components/articles/MagKnowing';
import MagNews from '../components/articles/MagNews';
import MagPost from '../components/articles/MagPost';
import MagTravelers from '../components/articles/MagTravelers';
import { useArticles } from '../hooks/useArticles';
import { useCategories } from '../hooks/useCategories';

function Articles() {
  const { knowing, hosting, travelers, wherewhy, news } = useArticles();

  const { categories } = useCategories();

  console.log('jjj');

  return (
    <div className="bg-base-200 dark:bg-gray-900">
      <ArticlesHeader />
      <ArticlesHero />
      <div className="container mb-10">
        {categories?.map((category) => (
          <div key={category.id}>
            <div className="mb-5 mt-10 flex justify-between">
              <h3 className="font-vazirBold text-2xl dark:text-white">
                {category.title}
              </h3>
              <Link
                to="category/wherewhy"
                className="h-fit w-fit rounded-full bg-gray-300 px-3 py-1 text-sm transition-all hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-950 dark:hover:text-white"
              >
                بیشتر
              </Link>
            </div>
            <div className=" grid grid-cols-12 gap-5">
              {category.id === 1 &&
                wherewhy.map((article) => (
                  <MagPost key={article.id} article={article} />
                ))}
              {category.id === 2 &&
                hosting.map((article) => (
                  <MagNews key={article.id} article={article} />
                ))}
              {category.id === 4 &&
                knowing.map((article) => (
                  <MagKnowing key={article.id} article={article} />
                ))}
              {category.id === 3 &&
                travelers.map((article) => {
                  if (article.id % 2 === 0) {
                    return <MagTravelers key={article.id} article={article} />;
                  } else {
                    return <MagPost key={article.id} article={article} />;
                  }
                })}
              {category.id === 5 &&
                news.map((article) => (
                  <MagNews key={article.id} article={article} />
                ))}
            </div>
          </div>
        ))}
      </div>
      <ArticlesFooter />
    </div>
  );
}

export default Articles;
