import ArticlesFooter from '../components/articles/ArticlesFooter';
import ArticlesHeader from '../components/articles/ArticlesHeader';
import ArticlesHero from '../components/articles/ArticlesHero';
import MagPost from '../components/articles/MagPost';

function Articles() {
  return (
    <>
      <ArticlesHeader />
      <ArticlesHero />
      <div className="container my-20 grid grid-cols-12">
        <MagPost />
        <MagPost />
        <MagPost />
      </div>
      <ArticlesFooter />
    </>
  );
}

export default Articles;
