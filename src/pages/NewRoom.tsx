import { useState } from 'react';
import { LuCheck } from 'react-icons/lu';
import { MdOutlineAddHome } from 'react-icons/md';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';

function NewRoom() {
  const [showTruth, setShowTruth] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  return (
    <div className="relative dark:bg-gray-800">
      <div className="h-24 w-full bg-yellow-400">
        <div className="h-full w-full bg-[url(/images/patterns/pattern.png)]">
          <Breadcrumb pageLink="ثبت اقامتگاه" />
        </div>
      </div>
      <div className="-mt-5 h-screen rounded-t-2xl bg-white dark:bg-gray-800">
        <div className="container flex items-center justify-center gap-5 py-16 text-center">
          <div className="mt-10 flex gap-x-5 gap-y-14 max-md:flex-col">
            <div className="relative flex-1 rounded-3xl border-t-2 border-t-yellow-400 px-4 pb-5 pt-16 text-center shadow-lg dark:shadow-gray-950">
              <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-yellow-500 bg-yellow-400 p-0.5 dark:bg-gray-900 dark:text-white">
                <LuCheck size={35} />
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="relative">
                  <h3 className="pb-2 font-vazirBold text-lg text-gray-700 dark:text-white">
                    صحت اطلاعات
                  </h3>
                  <p className="text-center text-sm leading-7 dark:text-white">
                    مطمئن شوید که نمایه اقامتگاه خود را منطبق با واقعیت تنظیم می
                    کنید. به هیچ عنوان امکاناتی که در منزل فراهم نیست را ثبت
                    نکنید و یا از عکسهای غیر واقعی استفاده نکنید. همچنین در
                    صورتی که عیب, نقص یا مشکلی در اقامتگاه
                    <span>{!showTruth && '...'}</span>{' '}
                    <span
                      onClick={() => setShowTruth(true)}
                      className={`${showTruth ? 'hidden' : ''} cursor-pointer text-blue-600`}
                    >
                      بیشتر
                    </span>
                    {showTruth &&
                      `وجود دارد, در توضیحات
                      اقامتگاه ذکر کنید و تصاویر آن را اضافه کنید. مطابق ضمانت
                      تحویل اقامتگاه جاجیگا، درصورت اثبات عدم مطابقت اقامتگاه
                      تحویل شده, رزرو لغو گردیده و کل وجه دریافتی به میهمان
                      بازگردانده خواهد شد.`}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex-1 rounded-3xl border-t-2 border-t-yellow-400 px-4 pb-5 pt-16 text-center shadow-lg dark:shadow-gray-950">
              <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-yellow-500 bg-yellow-400 p-0.5 dark:bg-gray-900 dark:text-white">
                <MdOutlineAddHome size={35} />
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="relative">
                  <h3 className="pb-2 font-vazirBold text-lg text-gray-700 dark:text-white">
                    لغو مراحل ثبت
                  </h3>
                  <p className="text-center text-sm leading-7 dark:text-white">
                    در صورتی که قادر به اتمام مراحل ثبت اقامتگاه نباشید, می
                    توانید با کلیک بر گزینه "لغو و خروج" در بالای صفحه, مراحل
                    ثبت را نیمه کاره بگذارید. اطلاعات وارد شده تا همان مرحله
                    ذخیره می شود و می توانید در فرصت بعدی مراحل ثبت
                    <span>{!showCancel && '...'}</span>{' '}
                    <span
                      onClick={() => setShowCancel(true)}
                      className={`${showCancel ? 'hidden' : ''} cursor-pointer text-blue-600`}
                    >
                      بیشتر
                    </span>
                    {showCancel &&
                      ` اقامتگاه را
                      به پایان برسانید. پس با خیال راحت, ثبت اقامتگاه خود را شروع
                      کنید.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-20 md:w-1/2">
          <Button style="mx-auto h-full w-full rounded-full bg-yellow-400 text-gray-800 hover:bg-yellow-500">
            ثبت اقامتگاه
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewRoom;
