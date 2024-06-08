import AdminPArticle from '../../components/admin-p/AdminPArticle';
import SectionHeader from '../../components/admin-p/SectionHeader';
import { useArticles } from '../../hooks/useArticles';

function AdminPArticles() {
  const { articles } = useArticles();

  return (
    <>
      <SectionHeader to='/admin-p/new-article' btnTitle="افزودن مجله" title="مجلات" />
      <div className="z-10 flex min-h-screen w-full items-center justify-center bg-white">
        <div className="w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                  <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70"></p>
                </th>
                <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                  <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70">
                    نام
                  </p>
                </th>

                <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                  <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70">
                    نویسنده
                  </p>
                </th>
                <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                  <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70">
                    دسته بندی
                  </p>
                </th>
                <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                  <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70">
                    مدت مطالعه
                  </p>
                </th>

                <th className="border-blue-gray-100 bg-blue-gray-50/50 border-y p-4">
                  <p className="text-blue-gray-900 block font-sans text-sm leading-none antialiased opacity-70"></p>
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
      </div>
    </>
  );
}

export default AdminPArticles;
