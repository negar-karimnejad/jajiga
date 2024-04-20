import { Link } from 'react-router-dom';

const AccessLinksArray = [
  {
    id: 1,
    title: 'چگونه مهمان شوم',
    to: '/guest',
  },
  {
    id: 2,
    title: 'قوانین و مقررات',
    to: '/rules',
  },
  {
    id: 3,
    title: 'پــشــتــیــبــانــی',
    to: '/support',
  },
  {
    id: 4,
    title: 'فرصت های شغلی',
    to: '/jobs',
  },
  {
    id: 5,
    title: 'چگونه میزبان شوم',
    to: '/host',
  },

  {
    id: 6,
    title: 'مقــررات لـــغـو رزرو',
    to: '/cancellation',
  },
  {
    id: 7,
    title: 'ثــبـــت شـــکــــایـــت',
    to: '/guarantee',
  },
  {
    id: 8,
    title: 'راهـنــــمــای ســایــت',
    to: '/help',
  },
];

function AccessLinks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-5 text-center font-vazirBold text-sm text-gray-700">
        لینک های دسترسی
      </p>
      <div className="flex justify-center gap-20 text-[12px] text-blue-600 md:justify-between md:gap-16">
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
