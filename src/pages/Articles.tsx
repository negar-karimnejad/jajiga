import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArticlesFooter from '../components/articles/ArticlesFooter';
import ArticlesHeader from '../components/articles/ArticlesHeader';
import ArticlesHero from '../components/articles/ArticlesHero';
import ArticlesMain from '../components/articles/ArticlesMain';
import ArticlePost from '../components/articles/ArticlePost';
import Button from '../components/ui/Button';
import { Article } from '../redux/store/articles';

const Articles = memo(function Articles() {
  const navigate = useNavigate();
  const location = useLocation();

  const searchResult = (location.state?.results as Article[]) || [];
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get('s') || '';

  return (
    <div className="bg-base-200 dark:bg-gray-900">
      <ArticlesHeader />
      {searchParams.size > 0 ? (
        <div className="bg-base-200 dark:bg-gray-900">
          <div className="container">
            <div className="my-10">
              <div className="mb-5 flex justify-between">
                <h3 className="font-vazirBold text-2xl dark:text-white">
                  نتایج جستجو برای...
                  {search}
                </h3>
                <Button
                  onClick={() => navigate('/article')}
                  style="group py-0 px-0 flex items-center gap-1 hover:shadow-none"
                >
                  <span className="text-blue-600">بازگشت</span>
                  <p className="text-lg text-blue-600 transition-all duration-700 group-hover:-translate-x-2">
                    &larr;
                  </p>
                </Button>
              </div>
              <div className="grid grid-cols-12 gap-5">
                {searchResult.length > 0 ? (
                  searchResult.map((article) => (
                    <ArticlePost key={article.id} article={article} />
                  ))
                ) : (
                  <p className="col-span-12 p-5">
                    نتیجه‌ای یافت نشد. لطفا عبارت کلیدی دیگری را امتحان کنید.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <ArticlesHero />
          <ArticlesMain />
        </>
      )}
      <ArticlesFooter />
    </div>
  );
});

export default Articles;
