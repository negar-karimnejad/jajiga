import { Link } from 'react-router-dom';
import { useArticles } from '../../hooks/useArticles';

function ArticleMenuList() {
  const { hosting, knowing, travelers, news, wherewhy } = useArticles();

  return (
    <div
      className="bg-white p-4 shadow-lg dark:bg-gray-800"
      style={{ direction: 'rtl' }}
    >
      <h3 className="font-vazirBold text-lg">دسته ها</h3>
      <ul className="my-3">
        <li className="group border-b py-2">
          <Link
            to="/mag/category/wherewhy"
            className="flex items-center justify-between"
          >
            <p className="font-vazirBold text-sm text-gray-600 transition-all duration-500 group-hover:-translate-x-2 group-hover:text-sky-600 dark:text-white">
              سفر به کجا؟
            </p>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-600 p-0.5 font-persianNums text-[13px] text-white">
              {wherewhy.length}
            </div>
          </Link>
        </li>
        <li className="group border-b py-2">
          <Link
            to="/mag/category/news"
            className="flex items-center justify-between"
          >
            <p className="font-vazirBold text-sm text-gray-600 transition-all duration-500 group-hover:-translate-x-2 group-hover:text-red-600 dark:text-white">
              جاجیگا راپُرت
            </p>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 p-0.5 font-persianNums text-[13px] text-white">
              {news.length}
            </div>
          </Link>
        </li>
        <li className="group border-b py-2">
          <Link
            to="/mag/category/travelers"
            className="flex items-center justify-between"
          >
            <p className="font-vazirBold text-sm text-gray-600 transition-all duration-500 group-hover:-translate-x-2 group-hover:text-orange-600 dark:text-white">
              بچه های سفری
            </p>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-600 p-0.5 font-persianNums text-[13px] text-white">
              {travelers.length}
            </div>
          </Link>
        </li>
        <li className="group border-b py-2">
          <Link
            to="/mag/category/knowing"
            className="flex items-center justify-between"
          >
            <p className="font-vazirBold text-sm text-gray-600 transition-all duration-500 group-hover:-translate-x-2 group-hover:text-purple-600 dark:text-white">
              دانستنی ها
            </p>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-600 p-0.5 font-persianNums text-[13px] text-white">
              {knowing?.length}
            </div>
          </Link>
        </li>
        <li className="group py-2">
          <Link
            to="/mag/category/hosting"
            className="flex items-center justify-between"
          >
            <p className="font-vazirBold text-sm text-gray-600 transition-all duration-500 group-hover:-translate-x-2 group-hover:text-emerald-600 dark:text-white">
              میزبانی در جاجیگا
            </p>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 p-0.5 font-persianNums text-[13px] text-white">
              {hosting?.length}
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ArticleMenuList;
