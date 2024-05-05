import { useParams } from 'react-router-dom';
import ArticleMenuList from '../components/articles/ArticleMenuList';
import ArticlesFooter from '../components/articles/ArticlesFooter';
import ArticlesHeader from '../components/articles/ArticlesHeader';
import { useArticles } from '../hooks/useArticles';

function Article() {
  const { id } = useParams();
  const title = id ? id.replaceAll('-', ' ') : '';

  const { article } = useArticles(title);

  return (
    <div className="bg-base-200 dark:bg-gray-900">
      <ArticlesHeader id={id} />
      <img
        src={article?.cover}
        alt=""
        className="h-72 w-full object-cover sm:h-80 md:h-96 lg:h-[500px]"
      />
      <div className="container">
        <div className="my-10">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-4">
              <ArticleMenuList />
            </div>
            <div className="col-span-6 bg-red-500">2</div>
            <div className="col-span-2 bg-blue-500">3</div>
          </div>
        </div>
      </div>
      <ArticlesFooter />
    </div>
  );
}

export default Article;
