import { memo } from 'react';
import ArticlesFooter from '../components/articles/ArticlesFooter';
import ArticlesHeader from '../components/articles/ArticlesHeader';
import ArticlesHero from '../components/articles/ArticlesHero';
import ArticlesMain from '../components/articles/ArticlesMain';

const Articles = memo(function Articles() {
  return (
    <div className="bg-base-200 dark:bg-gray-900">
      <ArticlesHeader />
      <ArticlesHero />
      <ArticlesMain />
      <ArticlesFooter />
    </div>
  );
});

export default Articles;
