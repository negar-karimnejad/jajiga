import { Link } from 'react-router-dom';
import ArticlesFooter from '../components/articles/ArticlesFooter';
import ArticlesHeader from '../components/articles/ArticlesHeader';
import ArticlesHero from '../components/articles/ArticlesHero';
import MagPost from '../components/articles/MagPost';
import { useArticles } from '../hooks/useArticles';
import { useCategories } from '../hooks/useCategories';

function Articles() {
  const { knowing, hosting, travelers, wherewhy } = useArticles();
  const { categories } = useCategories();

  return (
    <div className="bg-gray-50">
      <ArticlesHeader />
      <ArticlesHero />
      <div className="container mb-10">
        {categories.map((category) => (
          <>
            <div key={category.id} className="mb-5 mt-10 flex justify-between">
              <h3 className="font-vazirBold text-2xl">{category.title}</h3>
              <Link
                to="category/wherewhy"
                className="h-fit w-fit rounded-full bg-gray-100 px-3 py-1 text-sm"
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
                knowing.map((article) => (
                  <MagPost key={article.id} article={article} />
                ))}
              {category.id === 3 &&
                travelers.map((article) => (
                  <MagPost key={article.id} article={article} />
                ))}
              {category.id === 4 &&
                hosting.map((article) => (
                  <MagPost key={article.id} article={article} />
                ))}
            </div>
          </>
        ))}
      </div>
      <ArticlesFooter />
    </div>
  );
}

export default Articles;
