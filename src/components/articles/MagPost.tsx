import { CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { Article } from '../../redux/store/articles';

function MagPost({ article }: { article: Article }) {
  return (
    <div className="relative lg:col-span-4 flex-shrink w-[350px] bg-white shadow-md shadow-gray-300 max-sm:col-span-12 sm:col-span-6">
      <Link to={`/${article.title}`}>
        <img src="1.jpg" alt="" className="h-40" />
        <div className="absolute left-0 top-0 h-40 w-full bg-black/10 transition-all duration-500 hover:bg-black/50"></div>
      </Link>
      <div className="px-3 py-5">
        <Link
          to={`/${article.title}`}
          className="font-vazirBold text-lg transition-all hover:text-sky-600"
        >
          روستای سراوان گیلان و تجربه آرامشی از جنس طبیعت
        </Link>
        <div className="mt-10 flex items-center gap-3 text-[12px]">
          <img
            src="1.jpg"
            alt=""
            className="h-7 w-7 rounded-full object-cover"
          />
          <Link
            to={`/author/${article.author_id}`}
            className="text-gray-500 transition-all hover:text-gray-900"
          >
            معصومه ذاکراکبری
          </Link>
          <div className="flex items-center gap-1">
            <CiCalendarDate size={17} className="text-gray-600" />
            <p className="text-gray-500">۱ اردیبهشت ۱۴۰۳</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagPost;
