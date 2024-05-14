import { Link } from 'react-router-dom';
import { QuickSearchLinks } from '../../data/data';

function QuickSearch() {
  return (
    <div>
      <p className="text-center font-vazirBold text-sm text-gray-700 dark:text-gray-100 md:hidden">
        جستجوی سریع
      </p>
      <div className="overflow-auto py-4">
        <div className="flex w-[760px] flex-wrap gap-2">
          {QuickSearchLinks.map((link, index) => (
            <Link
              key={index}
              className="w-36 rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow dark:bg-white/10"
              to={link.to}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickSearch;
