import { BiEdit, BiTrash } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuthor } from '../../hooks/useAuthor';
import { Article } from '../../redux/store/articles';

function AdminPArticle({ article }: { article: Article }) {
  const { author } = useAuthor(article.author_id);

  return (
    <tr className="hover:bg-gray-100">
      <td className="border-blue-gray-50 border-b p-4">
        <img
          src={article.cover}
          alt={article.title}
          className="border-blue-gray-50 bg-blue-gray-50/50 relative inline-block h-12 w-12 rounded-lg border object-cover object-top"
        />
      </td>
      <td className="border-blue-gray-50 border-b p-4">
        <p className="text-blue-gray-900 block font-sans text-sm font-bold leading-normal antialiased">
          {article.title}
        </p>
      </td>

      <td className="border-blue-gray-50 border-b p-4">
        <p className="text-blue-gray-900 block font-sans text-sm font-normal leading-normal antialiased">
          {author ? author.fullname : 'ناشناس'}
        </p>
      </td>
      <td className="border-blue-gray-50 border-b p-4">
        <p className="text-blue-gray-900 block font-sans text-sm font-normal leading-normal antialiased">
          {article.category.title}
        </p>
      </td>
      <td className="border-blue-gray-50 border-b p-4">
        <p className="text-blue-gray-900 block font-sans text-sm leading-normal antialiased">
          <span className="font-persianNums">{article.readingMinutes}</span>{' '}
          دقیقه
        </p>
      </td>

      <td className="border-blue-gray-50 border-b p-4">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn-garticle btn btn-circle m-1"
          >
            ...
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li className="py-0.5 hover:text-violet-500">
              <a>
                <BiEdit />
                ویرایش مقاله
              </a>
            </li>
            <li className="py-0.5 hover:text-violet-500">
              <Link to={`/admin-p/articles/${article.title.replaceAll(" ","-")}`}>
                <FaEye />
                مشاهده مقاله
              </Link>
            </li>
            <li className="py-0.5 hover:text-violet-500">
              <a>
                <BiTrash />
                حذف مقاله
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
}

export default AdminPArticle;
