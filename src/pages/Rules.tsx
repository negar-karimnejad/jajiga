import { rulesData } from '../data/data';

function Rules() {
  return (
    <div className="relative dark:bg-gray-800">
      <div className="w-full bg-yellow-400 py-10">
        <div className="container h-full w-full bg-[url(/images/patterns/pattern.png)]">
          <h2 className="font-vazirBold text-xl text-gray-700">
            قوانین و مقررات استفاده از سایت جاجیگا
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            توصیه می‌شود متن زیر را جهت اطلاع از حقوق و تعهدات قانونی خود مطالعه
            نمایید.
          </p>
          <p className="mt-4 text-[11px] text-gray-500">
            تاریخ آخرین به‌روزرسانی: <span className="font-BKoodak">28</span>{' '}
            خرداد <span className="font-BKoodak">1402</span>
          </p>
        </div>
      </div>
      <div className="-mt-5 rounded-t-2xl bg-white dark:bg-gray-900">
        <article className="container py-8">
          {rulesData.map((rule) => (
            <div key={rule.id}>
              {rule.title === 'حریم خصوصی کاربران' ? (
                <>
                  <hr className="my-4" />
                  <h1 className="py-5 text-3xl text-gray-700 dark:text-white">
                    {rule.title}
                  </h1>
                </>
              ) : (
                <h2 className="py-5 font-vazirMedium text-xl text-gray-700 dark:text-white">
                  {rule.title}
                </h2>
              )}
              {rule.subtitle.map((item, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item }}
                  className="py-3 text-sm leading-7 text-gray-500 dark:text-gray-400"
                ></p>
              ))}
            </div>
          ))}
          <h3 className="dark:text-gray-200">پایان</h3>
        </article>
      </div>
    </div>
  );
}

export default Rules;
