import { Link, useParams } from 'react-router-dom';
import { useArticle } from '../../hooks/useArticle';
import Button from '../../components/ui/Button';
import { BiCheck } from 'react-icons/bi';

function AdminPArticleDetails() {
  const { id } = useParams();

  const articleTitle = id ? id.replaceAll('-', ' ') : 'ناموجود';

  const { article } = useArticle(articleTitle);

  return (
    <div>
      <h2 className="py-8 font-vazirBold text-2xl text-gray-600">
        جزئیات اقامتگاه
      </h2>
      <div className="grid grid-cols-12 gap-5 rounded-md bg-white p-5">
        <div className="col-span-4 rounded-md "></div>
        <div className="col-span-8">
          <div className="mt-1 flex items-center justify-between gap-2">
            <Link to={`/room/${article.code}`} className="text-xl">
              {article.title}
            </Link>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500">نرخ هر شب: </p>
              <p className="font-persianNums text-xl">
                {article.price.toLocaleString()}{' '}
                <span className="text-sm text-gray-500">تومان</span>
              </p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <Button style="font-persianNums text-[13px] bg-yellow-500 rounded-full py-1 hover:shadow-none ">
              کد: {article.code}
            </Button>
            <Button style="cursor-default font-persianNums text-[13px] bg-gray-200 rounded-full py-1 hover:shadow-none ">
              {article.reserved}+ رزرو موفق
            </Button>

            <span className="font-persianNums text-[12px] text-gray-500 dark:text-gray-300">
              {article.rating?.total}
            </span>
            <span className="font-persianNums text-[12px] text-gray-500 dark:text-gray-300">
              ({article.reviews} نظر)
            </span>
          </div>

          <div className="my-8 h-[1px] w-full bg-gray-100"></div>
          <div>
            <h4 className="mb-5 font-vazirBold text-lg">درباره اقامتگاه</h4>
            <strong className="text-gray-900 dark:text-gray-100">
              {article.title}
            </strong>
            <div
              className="mt-1 text-sm leading-7 text-gray-600 dark:text-gray-400 max-md:text-justify"
              dangerouslySetInnerHTML={{ __html: article.description }}
            ></div>
            <div className="my-8 h-[1px] w-full bg-gray-100"></div>
            <div>
              <p className="mb-3 text-lg">ویژگی های بارز</p>
              <ul className="mr-2">
                <li className="mb-1 flex items-center gap-2">
                  <BiCheck className="text-green-500" size={20} />
                  {article.share_house ? 'نیمه دربست' : 'دربست'}
                </li>
                <li className="mb-1 flex items-center gap-2">
                  <BiCheck className="text-green-500" size={20} />
                  {article.zone}{' '}
                  <span className="font-persianNums">
                    {article.foundation_meterage}
                  </span>{' '}
                  متری
                </li>
                <li className="mb-1 flex items-center gap-2">
                  <BiCheck className="text-green-500" size={20} />
                  ظرفیت تا{' '}
                  <span className="font-persianNums">
                    {article.max_capacity}
                  </span>{' '}
                  مهمان
                </li>
                <li className="mb-1 flex items-center gap-2">
                  <BiCheck className="text-green-500" size={20} />
                  دارای
                  <span className="font-persianNums">{article.bedroom}</span>
                  اتاق خواب
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-12 mt-10">
          <h4 className="box-title mb-5 text-lg">اطلاعات کلی</h4>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <span className="ml-10 text-gray-500">برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                  <td>
                    <span className="ml-10 text-gray-500">نام برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="ml-10 text-gray-500">برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                  <td>
                    <span className="ml-10 text-gray-500">نام برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="ml-10 text-gray-500">برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                  <td>
                    <span className="ml-10 text-gray-500">نام برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="ml-10 text-gray-500">برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                  <td>
                    <span className="ml-10 text-gray-500">نام برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="ml-10 text-gray-500">برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                  <td>
                    <span className="ml-10 text-gray-500">نام برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
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
