import { useParams } from 'react-router-dom';
import ArticlesFooter from '../components/articles/ArticlesFooter';
import ArticlesHeader from '../components/articles/ArticlesHeader';
import MagPost from '../components/articles/MagPost';
import { useArticles } from '../hooks/useArticles';
import { useAuthors } from '../hooks/useAuthors';

function Author() {
  const { id } = useParams();
  const { authors } = useAuthors();
  const { articles } = useArticles();

  const author = authors.find(
    (author) => author.fullname === id?.replaceAll('-', ' '),
  );
  const filteredArticles = articles.filter(
    (article) => article.author_id === author?.id,
  );

  return (
    <div className="bg-base-200 dark:bg-gray-900">
      <ArticlesHeader id={id} />
      <div className="container">
        <div className="my-10">
          <h3 className="mb-5 font-vazirBold text-2xl dark:text-white">
            نوشته‌های {author?.fullname}
          </h3>
          <div className="grid grid-cols-12 gap-5">
            {filteredArticles.map((article) => (
              <MagPost key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
      <ArticlesFooter />
    </div>
  );
}

export default Author;
