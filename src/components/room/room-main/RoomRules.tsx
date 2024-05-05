import { CiClock1 } from 'react-icons/ci';

function RoomRules() {
  return (
    <>
      <div className="mt-5">
        <h4 className="mb-3 font-vazirBold text-lg" title="مقررات لغو رزرو">
          مقررات لغو رزرو
        </h4>
        <div>
          <p className="leading-6 text-gray-600 dark:text-gray-400">
            <strong className="dark:text-gray-200">سیاست متعادل: </strong>در
            صورتی که رزرو، بیش از 3 روز کامل از تاریخ ورود لغو گردد؛ 90 درصد
            مبلغ صورتحساب به میهمان عودت می‌شود. در غیر اینصورت اجاره شب اول
            بعلاوه 10 درصد شب‌های باقیمانده کسر می‌شود.
            <span>توضیحات بیشتر</span>
          </p>
        </div>
        <div className="my-5 h-[1px] w-full bg-gray-200"></div>
      </div>

      <div className="mt-5" id="mapRef">
        <div>
          <h4 className="mb-3 font-vazirBold text-lg">مقررات اقامتگاه</h4>
          <div className="mb-5 flex gap-4 ">
            <div className="w-36 rounded-lg border border-gray-100 p-2 text-center">
              <p className="flex items-center gap-2">
                <CiClock1 /> ساعت ورود از
              </p>
              <p className="font-vazirBold">2 ظهر تا نامحدود</p>
            </div>
            <div className="w-36 rounded-lg border border-gray-100 p-2 text-center">
              <p className="flex items-center gap-2">
                <CiClock1 /> ساعت خروج تا
              </p>
              <p className="font-vazirBold">12 ظهر</p>
            </div>
          </div>
          <ul className="flex list-disc flex-col gap-2 pr-5 text-sm text-gray-600 dark:text-gray-400">
            <li>برگزاری مهمانی و پخش موزیک ممنوع است.</li>
            <li>همراه داشتن حیوان خانگی ممنوع است.</li>
            <li>
              استعمال دخانیات (سیگار، قلیان و ...) در داخل اقامتگاه ممنوع است.
            </li>
            <li>
              <span className="font-vazirBold">مدارک مورد نیاز: </span>
              کارت ملی هوشمند یا شناسنامه
            </li>
          </ul>
        </div>
        <div className="my-5 h-[1px] w-full bg-gray-200"></div>
      </div>
    </>
  );
}

export default RoomRules;
