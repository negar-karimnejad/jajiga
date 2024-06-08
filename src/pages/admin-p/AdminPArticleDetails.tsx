import { Link, useParams } from 'react-router-dom';
import { useArticle } from '../../hooks/useArticle';
import convertToPersianDate from '../../utilities/convertToPersianDate';
import { useAuthor } from '../../hooks/useAuthor';

function AdminPArticleDetails() {
  const { id } = useParams();

  const articleTitle = id ? id.replaceAll('-', ' ') : 'ناموجود';

  const { article } = useArticle(articleTitle);
  const { author } = useAuthor(article ? article.author_id : 0);

  if (!article) return null;

  return (
    <div>
      <h2 className="py-8 font-vazirBold text-2xl text-gray-600">
        جزئیات اقامتگاه
      </h2>
      <div className="rounded-md bg-white p-5">
        <Link
          to={`/article/${article.title.replaceAll(' ', '-')}`}
          className="text-xl text-sky-600 hover:underline"
        >
          {article.title}
        </Link>
        <img
          className="my-5 h-full rounded-md object-cover w-full"
          src={article.cover}
          alt=""
        />
        <div
          className="mt-1 text-sm leading-7 text-gray-600 dark:text-gray-400 max-md:text-justify"
          dangerouslySetInnerHTML={{ __html: article.description }}
        ></div>
        <div className="my-8 h-[1px] w-full bg-gray-100"></div>
        <div className="mt-10">
          <h4 className="box-title mb-5 text-lg">درباره مقاله</h4>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <span className="ml-10 text-gray-500">نویسنده:</span>{' '}
                    <span className="text-black">{author?.fullname}</span>
                  </td>
                  <td>
                    <span className="ml-10 text-gray-500">دسته بندی:</span>{' '}
                    <span className="text-black">{article.category.title}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="ml-10 text-gray-500">تاریخ انتشار:</span>{' '}
                    <span className="font-persianNums text-black">
                      {convertToPersianDate(article?.created_at)}
                    </span>
                  </td>
                  <td>
                    <span className="ml-10 text-gray-500">
                      مدت زمان مطالعه:
                    </span>{' '}
                    <span className="font-persianNums text-black">
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
