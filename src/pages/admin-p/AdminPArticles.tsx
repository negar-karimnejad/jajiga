import AdminPArticle from '../../components/admin-p/AdminPArticle';
import SectionHeader from '../../components/admin-p/SectionHeader';
import { useArticles } from '../../hooks/useArticles';

function AdminPArticles() {
  const { articles } = useArticles();

  return (
    <>
      <SectionHeader
        to="/admin-p/new-article"
        btnTitle="افزودن مقاله"
        title="مقالات"
      />
      <div className="flex w-full items-center justify-center bg-white dark:bg-gray-800">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="border-blue-gray-100 dark:border-gray-600 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70 dark:text-gray-50"></p>
              </th>
              <th className="border-blue-gray-100 dark:border-gray-600 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70 dark:text-gray-50">
                  نام
                </p>
              </th>

              <th className="border-blue-gray-100 dark:border-gray-600 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70 dark:text-gray-50">
                  نویسنده
                </p>
              </th>
              <th className="border-blue-gray-100 dark:border-gray-600 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70 dark:text-gray-50">
                  دسته بندی
                </p>
              </th>
              <th className="border-blue-gray-100 dark:border-gray-600 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70 dark:text-gray-50">
                  مدت مطالعه
                </p>
              </th>

              <th className="border-blue-gray-100 dark:border-gray-600 bg-blue-gray-50/50 border-y p-4">
                <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70 dark:text-gray-50"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <AdminPArticle article={article} key={article.id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPArticles;
