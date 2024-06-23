import { useEffect, useState } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { useArticles } from '../../hooks/useArticles';
import { useAuthor } from '../../hooks/useAuthor';
import { Article } from '../../redux/store/articles';
import Modal from '../ui/Modal';
import AdminPEditArticle from './AdminPEditArticle';

function AdminPArticle({ article }: { article: Article }) {
  const { author } = useAuthor(article.author_id ? article.author_id : 0);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  // const { removeArticle } = useArticles();

  const closeModal = () => setIsShowEditModal(false);

  // const removeHandler = () => {
  //   Swal.fire({
  //     title: 'آیا از حذف مقاله مطمئنید؟',
  //     toast: false,
  //     position: 'center',
  //     showConfirmButton: true,
  //     showCancelButton: true,
  //     icon: 'warning',
  //     customClass: { icon: 'm-auto mt-4' },
  //     confirmButtonText: 'بله',
  //     cancelButtonText: 'انصراف',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       removeArticle(article.id);
  //       Swal.fire({
  //         title: 'مقاله با موفقیت حذف شد',
  //         toast: false,
  //         position: 'center',
  //         icon: 'success',
  //         customClass: { icon: 'm-auto mt-4' },
  //       });
  //     }
  //   });
  // };
  useEffect(() => {
    // Disable body scroll when the modal is open
    if (isShowEditModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isShowEditModal]);
  
  return (
    <>
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="p-4">
          <div className="flex h-12 w-12">
            {typeof article.cover === 'string' && (
              <img
                src={article.cover}
                alt={article.title}
                className="rounded-lg object-cover object-center"
              />
            )}
          </div>
        </td>
        <td className="p-4">
          <p className="text-blue-gray-900 block whitespace-nowrap font-sans text-sm font-bold leading-normal antialiased dark:text-white">
            {article.title}
          </p>
        </td>

        <td className="p-4">
          <p className="text-blue-gray-900 block whitespace-nowrap font-sans text-sm font-normal leading-normal antialiased dark:text-white">
            {author ? author.fullname : 'ناشناس'}
          </p>
        </td>
        <td className="p-4">
          <p className="text-blue-gray-900 block whitespace-nowrap font-sans text-sm font-normal leading-normal antialiased dark:text-white">
            {article.category.title}
          </p>
        </td>
        <td className="p-4">
          <p className="text-blue-gray-900 block font-sans text-sm leading-normal antialiased dark:text-white">
            <span className="font-persianNums">{article.readingMinutes}</span>{' '}
            دقیقه
          </p>
        </td>

        <td className="p-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle m-1 dark:btn-neutral"
            >
              ...
            </div>
            <ul
              tabIndex={0}
              className="menu dark:bg-gray-900 dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li
                className="py-0.5 hover:text-violet-500 dark:text-white dark:hover:text-violet-500"
              >
                <Link
                  to={`/admin-p/articles/${article.title.replaceAll(' ', '-')}`}
                >
                  <FaEye />
                  مشاهده مقاله
                </Link>
              </li>
              <li
                onClick={() => setIsShowEditModal(true)}
                className="py-0.5 hover:text-violet-500 dark:text-white dark:hover:text-violet-500"
              >
                <a>
                  <BiEdit />
                  ویرایش مقاله
                </a>
              </li>
              <li
                // onClick={removeHandler}
                className="py-0.5 hover:text-violet-500 dark:text-white dark:hover:text-violet-500"
              >
                <a>
                  <BiTrash />
                  حذف مقاله
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <Modal closeModalHandler={closeModal} isOpen={isShowEditModal}>
        <AdminPEditArticle article={article} closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default AdminPArticle;
