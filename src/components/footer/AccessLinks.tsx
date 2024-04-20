import { Link } from 'react-router-dom';

function AccessLinks() {
  return (
    <div>
      <p className="mb-5 text-center font-vazirBold text-sm text-gray-700">
        لینک های دسترسی
      </p>
      <div className="flex justify-center gap-20 text-[12px] text-blue-600 md:justify-between md:gap-16">
        <div className="flex flex-col gap-y-2">
          <Link
            to=""
            className="whitespace-nowrap font-vazirMedium tracking-wider"
          >
            چگونه مهمان شوم
          </Link>
          <Link
            to=""
            className="whitespace-nowrap font-vazirMedium tracking-wider"
          >
            قوانین و مقررات
          </Link>
          <Link
            to=""
            className="whitespace-nowrap font-vazirMedium tracking-wider"
          >
            پــشــتــیــبــانــی
          </Link>
          <Link
            to=""
            className="whitespace-nowrap font-vazirMedium tracking-wider"
          >
            فرصت های شغلی
          </Link>
        </div>
        <div className="flex flex-col gap-y-2">
          <Link
            to=""
            className="whitespace-nowrap font-vazirMedium tracking-wider"
          >
            چگونه میزبان شوم
          </Link>

          <Link
            to=""
            className="whitespace-nowrap font-vazirMedium tracking-wider"
          >
            مقــررات لـــغـو رزرو
          </Link>

          <Link
            to=""
            className="whitespace-nowrap font-vazirMedium tracking-wider"
          >
            ثــبـــت شـــکــــایـــت
          </Link>

          <Link
            to=""
            className="whitespace-nowrap font-vazirMedium tracking-wider"
          >
            راهـنــــمــای ســایــت
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccessLinks;
