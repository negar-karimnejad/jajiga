import ArticlesFooter from '../components/articles/ArticlesFooter';
import ArticlesHeader from '../components/articles/ArticlesHeader';
import ArticlesHero from '../components/articles/ArticlesHero';
import MagPost from '../components/articles/MagPost';
import { useArticles } from '../hooks/useArticles';

function Articles() {
  const { articles } = useArticles();

  return (
    <>
      <ArticlesHeader />
      <ArticlesHero />
      <div className="container my-20 grid-cols-12 grid gap-5">
        {articles.map((article) => (
          <MagPost key={article.id} article={article} />
        ))}
      </div>
      <ArticlesFooter />
    </>
  );
}

export default Articles;
