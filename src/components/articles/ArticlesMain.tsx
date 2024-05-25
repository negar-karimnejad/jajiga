import { useArticles } from '../../hooks/useArticles';
import ArticleHeading from './ArticleHeading';
import MagKnowing from './MagKnowing';
import MagNews from './MagNews';
import MagPost from './MagPost';
import MagTravelers from './MagTravelers';

function ArticlesMain() {
  const { hosting, knowing, travelers, wherewhy, news } = useArticles();
  
  return (
    <div className="container mb-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <ArticleHeading title="سفر به کجا و چرا؟" />
        </div>
        {wherewhy.map((article) => (
          <MagPost key={article.id} article={article} />
        ))}
        <div className="col-span-12">
          <ArticleHeading title="میزبانی در جاجیگا" />
        </div>
        {hosting.map((article) => (
          <MagNews key={article.id} article={article} />
        ))}
        <div className="col-span-12">
          <ArticleHeading title="دانستنی‌ها" />
        </div>
        {knowing.map((article) => (
          <MagKnowing key={article.id} article={article} />
        ))}
        <div className="col-span-12">
          <ArticleHeading title="بچه‌های سفری" />
        </div>
        {travelers.map((article) => {
          if (article.id % 2 === 0) {
            return <MagTravelers key={article.id} article={article} />;
          } else {
            return <MagPost key={article.id} article={article} />;
          }
        })}
        <div className="col-span-12">
          <ArticleHeading title="جاجیگا راپُرت" />
        </div>
        {news.map((article) => (
          <MagNews key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default ArticlesMain;
