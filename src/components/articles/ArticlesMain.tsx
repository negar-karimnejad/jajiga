import { useArticles } from '../../hooks/useArticles';
import ArticleHeading from './ArticleHeading';
import ArticleKnowing from './ArticleKnowing';
import ArticleNews from './ArticleNews';
import ArticlePost from './ArticlePost';
import ArticleTravelers from './ArticleTravelers';

// LoadingSkeleton Component
const LoadingSkeleton = ({ type }: { type: string }) => {
  const skeletonClass =
    type === 'heading'
      ? 'bg-gray-300 h-8 w-1/4 rounded mt-10'
      : 'bg-gray-300 h-64 w-full rounded-3xl my-2';
  return <div className={`animate-pulse ${skeletonClass}`}></div>;
};

function ArticlesMain() {
  const { hosting, knowing, travelers, wherewhy, news, loading } =
    useArticles();

  return (
    <div className="container mb-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          {loading ? (
            <LoadingSkeleton type="heading" />
          ) : (
            <ArticleHeading title="سفر به کجا و چرا؟" />
          )}
        </div>
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="col-span-4">
                <LoadingSkeleton type="post" />
              </div>
            ))
          : wherewhy.map((article) => (
              <ArticlePost key={article.id} article={article} />
            ))}
        <div className="col-span-12">
          {loading ? (
            <LoadingSkeleton type="heading" />
          ) : (
            <ArticleHeading title="میزبانی در جاجیگا" />
          )}
        </div>
        {loading
          ? Array.from({ length: 1 }).map((_, index) => (
              <div key={index} className="col-span-12">
                <LoadingSkeleton type="post" />
              </div>
            ))
          : hosting.map((article) => (
              <ArticleNews key={article.id} article={article} />
            ))}
        <div className="col-span-12">
          {loading ? (
            <LoadingSkeleton type="heading" />
          ) : (
            <ArticleHeading title="دانستنی‌ها" />
          )}
        </div>
        {loading
          ? Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="col-span-6">
                <LoadingSkeleton type="post" />
              </div>
            ))
          : knowing.map((article) => (
              <ArticleKnowing key={article.id} article={article} />
            ))}
        <div className="col-span-12">
          {loading ? (
            <LoadingSkeleton type="heading" />
          ) : (
            <ArticleHeading title="بچه‌های سفری" />
          )}
        </div>
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="col-span-4">
                <LoadingSkeleton type="post" />
              </div>
            ))
          : travelers.map((article) => {
              if (article.id === 6) {
                return <ArticleTravelers key={article.id} article={article} />;
              } else {
                return <ArticlePost key={article.id} article={article} />;
              }
            })}
        <div className="col-span-12">
          {loading ? (
            <LoadingSkeleton type="heading" />
          ) : (
            <ArticleHeading title="جاجیگا راپُرت" />
          )}
        </div>
        {loading
          ? Array.from({ length: 1 }).map((_, index) => (
              <div key={index} className="col-span-12">
                <LoadingSkeleton type="post" />
              </div>
            ))
          : news.map((article) => (
              <ArticleNews key={article.id} article={article} />
            ))}
      </div>
    </div>
  );
}

export default ArticlesMain;
