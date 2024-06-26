import { useParams } from 'react-router-dom';
import ArticlesFooter from '../components/articles/ArticlesFooter';
import ArticlesHeader from '../components/articles/ArticlesHeader';
import { useArticles } from '../hooks/useArticles';
import ArticlePost from '../components/articles/ArticlePost';

function CategoryArticle() {
  const { id } = useParams();
  const { articles } = useArticles();

  const filteredArticles = articles.filter(
    (article) => article.category.en_title === id,
  );

  return (
    <div className="bg-base-200 dark:bg-gray-900">
      <ArticlesHeader id={id} />
      <div className="container">
        <div className="my-10">
          <div className="grid grid-cols-12 gap-5">
            {filteredArticles.map((article) => (
              <ArticlePost key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
      <ArticlesFooter />
    </div>
  );
}

export default CategoryArticle;
