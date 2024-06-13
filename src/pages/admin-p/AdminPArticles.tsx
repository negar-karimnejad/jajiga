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
              <th className="bg-blue-gray-50/50 p-4">
                <p className="text-gray-700 dark:text-gray-100 block font-sans text-sm leading-none antialiased opacity-70"></p>
              </th>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="text-gray-700 dark:text-gray-100 block font-sans text-sm leading-none antialiased opacity-70">
                  نام
                </p>
              </th>

              <th className="bg-blue-gray-50/50 p-4">
                <p className="text-gray-700 dark:text-gray-100 block font-sans text-sm leading-none antialiased opacity-70">
                  نویسنده
                </p>
              </th>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="text-gray-700 dark:text-gray-100 block font-sans text-sm leading-none antialiased opacity-70">
                  دسته بندی
                </p>
              </th>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="text-gray-700 dark:text-gray-100 block font-sans text-sm leading-none antialiased opacity-70">
                  مدت مطالعه
                </p>
              </th>

              <th className="bg-blue-gray-50/50 p-4">
                <p className="text-gray-700 dark:text-gray-100 block font-sans text-sm leading-none antialiased opacity-70"></p>
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
