import { Link, useParams } from 'react-router-dom';
import { useArticle } from '../../hooks/useArticle';
import { useAuthor } from '../../hooks/useAuthor';
import convertToPersianDate from '../../utilities/convertToPersianDate';

function AdminPArticleDetails() {
  const { id } = useParams();

  const articleTitle = id ? id.replaceAll('-', ' ') : 'ناموجود';

  const { article } = useArticle(articleTitle);
  const { author } = useAuthor(article?.author_id ? article?.author_id : 0);

  if (!article) return null;

  return (
    <div>
      <h2 className="py-8 font-vazirBold text-2xl dark:text-white text-gray-600">
        جزئیات اقامتگاه
      </h2>
      <div className="rounded-md bg-white dark:bg-gray-800 p-5">
        <Link
          to={`/article/${article.title.replaceAll(' ', '-')}`}
          className="text-xl text-sky-600 hover:underline"
        >
          {article.title}
        </Link>
        {typeof article.cover === 'string' && (
          <img
            className="my-5 h-full w-full rounded-md object-cover"
            src={article.cover}
            alt={article.title}
          />
        )}
        <div
          className="mt-1 text-sm leading-7 text-gray-600 dark:text-gray-100 max-md:text-justify"
          dangerouslySetInnerHTML={{ __html: article.description }}
        ></div>
        <div className="my-8 h-[1px] w-full bg-gray-100 dark:bg-gray-700"></div>
        <div className="mt-10">
          <h4 className="box-title mb-5 text-lg dark:text-white">درباره مقاله</h4>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr className='max-lg:flex flex-col max-lg:border-0'>
                  <td className='max-lg:flex justify-between border-b dark:border-b-gray-700'>
                    <span className="ml-10 text-gray-500 dark:text-gray-300">نویسنده:</span>{' '}
                    <span className="text-black dark:text-white">{author?.fullname}</span>
                  </td>
                  <td className='max-lg:flex justify-between border-b dark:border-b-gray-700'>
                    <span className="ml-10 text-gray-500 dark:text-gray-300">دسته بندی:</span>{' '}
                    <span className="text-black dark:text-white">{article.category.title}</span>
                  </td>
                </tr>
                <tr className='max-lg:flex flex-col'>
                  <td className='max-lg:flex justify-between border-b dark:border-b-gray-700'>
                    <span className="ml-10 text-gray-500 dark:text-gray-300">تاریخ انتشار:</span>{' '}
                    <span className="font-persianNums text-black dark:text-white">
                      {convertToPersianDate(article?.created_at)}
                    </span>
                  </td>
                  <td className='max-lg:flex justify-between border-b dark:border-b-gray-700'>
                    <span className="ml-10 text-gray-500 dark:text-gray-300">
                      مدت زمان مطالعه:
                    </span>{' '}
                    <span className="font-persianNums text-black dark:text-white">
                      {article.readingMinutes} دقیقه
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPArticleDetails;
