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
      <div className="overflow-x-auto overflow-y-hidden bg-white dark:bg-gray-800">
      <table className="table">
          <thead>
            <tr>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100"></p>
              </th>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100">
                  نام
                </p>
              </th>

              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100">
                  نویسنده
                </p>
              </th>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100">
                  دسته بندی
                </p>
              </th>
              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100">
                  مدت مطالعه
                </p>
              </th>

              <th className="bg-blue-gray-50/50 p-4">
                <p className="block font-sans text-sm leading-none text-gray-700 antialiased opacity-70 dark:text-gray-100"></p>
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
