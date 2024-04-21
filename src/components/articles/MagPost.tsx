import { CiCalendarDate } from 'react-icons/ci';

function MagPost() {
  return (
    <div className="relative col-span-4 w-[350px] bg-white shadow-md shadow-gray-300">
      <img src="1.jpg" alt="" className="h-40" />
      <div className="absolute left-0 top-0 h-40 w-full bg-black/10 transition-all duration-500 hover:bg-black/50"></div>
      <div className="px-3 py-5">
        <h3 className="font-vazirBold text-lg hover:text-sky-600 transition-all">
          روستای سراوان گیلان و تجربه آرامشی از جنس طبیعت
        </h3>
        <div className="mt-10 flex items-center gap-3 text-[12px]">
          <img
            src="1.jpg"
            alt=""
            className="h-7 w-7 rounded-full object-cover"
          />
          <p className="text-gray-500">معصومه ذاکراکبری</p>
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
