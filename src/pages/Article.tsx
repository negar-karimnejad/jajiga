import { BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
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
            <div className="col-span-2 ">
              <div className="flex w-fit flex-col gap-3 border bg-white p-5 shadow-md shadow-gray-300">
                <div>
                  <Link
                    target="_blank"
                    to="https://t.me/jajiga"
                    className="flex h-8 w-8 items-center justify-center rounded-sm bg-sky-500 text-white transition-all hover:opacity-50 "
                  >
                    <FaTelegramPlane size={15} />
                  </Link>
                </div>
                <div>
                  <Link
                    target="_blank"
                    className="flex h-8 w-8 items-center justify-center rounded-sm bg-green-500 text-white transition-all hover:opacity-50 "
                    to="https://api.whatsapp.com/send?text=https%3A%2F%2Fwww.jajiga.com%2Fr%2F1d3e%2Fwr"
                  >
                    <BsWhatsapp size={15} />
                  </Link>
                </div>
                <div>
                  <Link
                    target="_blank"
                    to="https://twitter.com/i/flow/login?redirect_after_login=%2FJajiga_Iran"
                    className="flex h-8 w-8 items-center justify-center rounded-sm bg-blue-500 text-white transition-all hover:opacity-50 "
                  >
                    <FaTwitter size={15} />
                  </Link>
                </div>
                <div>
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/company/jajiga/"
                    className="flex h-8 w-8 items-center justify-center rounded-sm bg-blue-700 text-white transition-all hover:opacity-50 "
                  >
                    <FaLinkedinIn size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArticlesFooter />
    </div>
  );
}

export default Article;
