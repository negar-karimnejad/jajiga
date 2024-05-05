import { useParams } from 'react-router-dom';
import ArticlesFooter from '../components/articles/ArticlesFooter';
import ArticlesHeader from '../components/articles/ArticlesHeader';
import MagPost from '../components/articles/MagPost';
import Loader from '../components/ui/Loader';
import { useArticles } from '../hooks/useArticles';
import { useCategories } from '../hooks/useCategories';

function CategoryArticle() {
  const { id } = useParams();
  const { categories } = useCategories();
  const { loading, articles } = useArticles();

  const categoryID = categories.find(
    (category) => category.en_title === id,
  )?.id;
  const filteredArticles = articles.filter(
    (article) => article.category_id === categoryID,
  );

  return (
    <div className="bg-base-200 dark:bg-gray-900">
      <ArticlesHeader id={id} />
      <div className="container">
        {loading ? (
          <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-white">
            <Loader />
          </div>
        ) : (
          <div className="my-10">
            <div className="grid grid-cols-12 gap-5">
              {filteredArticles.map((article) => (
                <MagPost key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}
      </div>
      <ArticlesFooter />
    </div>
  );
}

export default CategoryArticle;
