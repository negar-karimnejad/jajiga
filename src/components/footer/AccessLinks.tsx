import { Link } from 'react-router-dom';
import { AccessLinksArray } from '../../data/data';

function AccessLinks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-5 text-center font-vazirBold text-sm text-gray-700 dark:text-gray-100">
        لینک های دسترسی
      </p>
      <div className="flex justify-center gap-20 text-[12px] text-blue-600 dark:text-gray-400 md:justify-between md:gap-16">
        <div className="flex flex-col gap-y-2">
          {AccessLinksArray.slice(0, 4).map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="whitespace-nowrap font-vazirMedium tracking-wider transition-all hover:text-red-600"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-y-2">
          {AccessLinksArray.slice(4, 8).map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="whitespace-nowrap font-vazirMedium tracking-wider transition-all hover:text-red-600"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccessLinks;
