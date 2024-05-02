import { useState } from 'react';
import { GoQuestion, GoShieldCheck } from 'react-icons/go';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import Button from '../ui/Button';

function RoomSidebar() {
  const [isShowInfo, setIsShowInfo] = useState(false);

  return (
    <div className="md:sticky top-20 h-fit md:col-span-4">
      <div className="overflow-hidden rounded-xl shadow-lg dark:border dark:border-gray-700 dark:bg-gray-800">
        <header className="flex justify-between bg-neutral-700 p-4 text-white">
          <span className="font-vazirMedium text-base">نرخ هر شب از:</span>
          <span className="font-persianNums text-base">
            {(2800000).toLocaleString()} تومان
          </span>
        </header>
        <div className="my-6 px-4">
          <form className="flex flex-col gap-5">
            <label htmlFor="" className="dark:text-white">
              تاریخ سفر
              <div className="relative mt-1 flex overflow-hidden rounded-xl border px-4 py-3">
                <input
                  type="text"
                  className="bg-transparent outline-none"
                  placeholder="تاریخ ورود"
                />
                <div className="absolute left-0 right-0 mx-auto h-6 w-0.5 bg-gray-200"></div>
                <input
                  type="text"
                  className="bg-transparent outline-none"
                  placeholder="تاریخ خروج"
                />
              </div>
            </label>
            <label htmlFor="" className="flex flex-col dark:text-white">
              تعداد نفرات
              <select
                name=""
                id=""
                className="mt-1 rounded-xl border bg-transparent px-4 py-2 text-gray-400 outline-none"
              >
                <option value="" className="text-gray-500">
                  تعداد نفرات را مشخص کنید
                </option>
                <option value="1" className="font-persianNums text-gray-700">
                  1 نفر
                </option>
                <option value="2" className="font-persianNums text-gray-700">
                  2 نفر
                </option>
                <option value="3" className="font-persianNums text-gray-700">
                  3 نفر
                </option>
                <option value="4" className="font-persianNums text-gray-700">
                  4 نفر
                </option>
                <option value="5" className="font-persianNums text-gray-700">
                  5 نفر
                </option>
                <option value="6" className="font-persianNums text-gray-700">
                  6 نفر
                </option>
              </select>
              <p className="mt-1 text-[12px] text-gray-500 dark:text-gray-200">
                تا 1 کودک زیر 5 سال در صورتحساب لحاظ نمی گردد.
              </p>
            </label>
            <Button style="font-vazirMedium relative bg-yellow-400 hover:bg-yellow-500 rounded-full w-full my-5">
              ثبت درخواست رزرو{' '}
              <span className="font-vazirMedium text-[12px]">(رایگان)</span>
            </Button>
          </form>
          <p className="mb-4 flex items-center justify-center gap-2 text-center text-[13px] text-gray-600 dark:text-gray-100">
            <HiOutlineChatBubbleLeftRight size={18} />
            با امکان چت آنلاین با میزبان
            <div
              className="relative"
              onMouseEnter={() => setIsShowInfo(true)}
              onMouseLeave={() => setIsShowInfo(false)}
            >
              <HiOutlineInformationCircle size={18} className="text-sky-400" />
              <div
                className={`absolute -left-2 -top-20 whitespace-nowrap rounded-lg bg-neutral-700 px-5 py-3 text-sm leading-6 text-white shadow-lg after:absolute after:-bottom-1 after:left-3 after:h-2 after:w-2 after:rotate-45 after:bg-neutral-700 ${isShowInfo ? 'block' : 'hidden'}`}
              >
                برای چت با میزبان ابتدا درخواست رزرو
                <br /> (رایگان) خود را ثبت نمایید.
              </div>
            </div>
          </p>
          <div className="flex flex-col gap-3 lg:flex-row">
            <Button style="dark:text-gray-50 dark:border-gray-300 flex items-center gap-2 bg-transparent rounded-xl border-2 border-gray-100 hover:border-gray-200 hover:shadow-none w-full">
              <GoShieldCheck />
              ضمانت تحویل
            </Button>
            <Button style="dark:text-gray-50 dark:border-gray-300 flex items-center gap-2 bg-transparent rounded-xl border-2 border-gray-100 hover:border-gray-200 hover:shadow-none w-full">
              <GoQuestion />
              راهنمای رزرو
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomSidebar;
