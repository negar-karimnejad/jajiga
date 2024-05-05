import { BsStar, BsStarFill } from 'react-icons/bs';
import { HiOutlineHome } from 'react-icons/hi';
import { LiaDoorOpenSolid } from 'react-icons/lia';
import { LuBedDouble, LuBedSingle } from 'react-icons/lu';
import { PiUsersThree } from 'react-icons/pi';
import { TfiRulerPencil } from 'react-icons/tfi';
import Button from '../../ui/Button';

function RoomAbout() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h4 className="font-vazirBold text-base dark:text-white">
          اجاره ویلا استخردار در ساوجبلاغ - کوشک زر
        </h4>
        <div className="h-16 w-16">
          <img src="/images/comment.jpg" className="rounded-full" alt="" />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-2">
        <Button style="font-persianNums text-[13px] bg-yellow-500 rounded-full py-1 hover:shadow-none ">
          کد: 123456
        </Button>
        <Button style="cursor-default font-persianNums text-[13px] bg-gray-200 rounded-full py-1 hover:shadow-none ">
          10+ رزرو موفق
        </Button>
        <div className="flex gap-0.5">
          <BsStar className="text-yellow-400" size={12} />
          <BsStarFill className="text-yellow-400" size={12} />
          <BsStarFill className="text-yellow-400" size={12} />
          <BsStarFill className="text-yellow-400" size={12} />
          <BsStarFill className="text-yellow-400" size={12} />
        </div>
        <span className="font-persianNums text-[12px] text-gray-500 dark:text-gray-300">
          4.7
        </span>
        <span className="font-persianNums text-[12px] text-gray-500 dark:text-gray-300">
          (10 نظر)
        </span>
      </div>

      <div className="mt-5 flex items-center justify-around bg-gray-100 p-5 dark:bg-gray-800 max-sm:px-0">
        <div className="flex flex-col items-center gap-2">
          <HiOutlineHome className="dark:text-gray-200" size={30} />
          <span className="font-persianNums text-[13px] dark:text-gray-200">
            دربست
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <LiaDoorOpenSolid className="dark:text-gray-200" size={30} />
          <span className="font-persianNums text-[13px] dark:text-gray-200">
            2 اتاق خواب
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <PiUsersThree className="dark:text-gray-200" size={30} />
          <span className="font-persianNums text-[13px] dark:text-gray-200">
            تا 6 مهمان
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TfiRulerPencil className="dark:text-gray-200" size={30} />
          <span className="font-persianNums text-[13px] dark:text-gray-200">
            220 متر
          </span>
        </div>
      </div>
      <div className="mt-5">
        <h4 className="font-vazirBold text-lg">درباره اقامتگاه</h4>
        <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 max-md:text-justify">
          <strong className="text-gray-900">
            اجاره ویلا استخردار در ساوجبلاغ - کوشک زر
          </strong>
          <br />
          این ویلا دو خوابه با استخر سرپوشیده آبگرم، روف گاردن، میز و صندلی
          تاشو، آتشدان، فضای دورهمی و حیاطی دلباز در روستای کوشک زر با فاصله
          حدود <span className="font-persianNums">20</span> کیلومتری از کردان و{' '}
          <span className="font-persianNums">35</span> کیلومتری از کرج در محیطی
          شهرکی واقع شده است.
          <br />
          طراحی اقامتگاه به گونه ایست که جکوزی، استخر در طبقه منفی یک و پذیرایی،
          آشپزخانه، دو اتاق خواب، حمام و سرویس ایرانی با فرنگی در طبقه همکف با
          دسترسی حدود <span className="font-persianNums">11</span> پله و روف
          گاردن در طبقه بالا با دسترسی حدود{' '}
          <span className="font-persianNums">13</span> پله تعبیه شده است.
          <br />
          اطراف محوطه اقامتگاه با دیوار محصور و مجهز به دوربین مداربسته می باشد.
          <br />
          برای تهیه مایحتاج روزانه فاصله اقامتگاه تا سوپرمارکت و نانوایی حدود یک
          کیلومتر است.
          <br />
          لازم به ذکر است که آب لوله کشی اقامتگاه از طریق چاه تامین می گردد لذا
          به مهمانان گرامی توصیه می شود که آب معدنی به همراه داشته باشند.
          <br />
          کیفیت پوشش شبکه تلفن همراه برای دو اپراتور همراه اول و ایرانسل در
          مکالمه خوب و دسترسی به اینترنت به صورت{' '}
          <span className="font-persianNums">4</span>g می باشد.
          <br />
          حدود <span className="font-persianNums">500</span> متر از مسیر منتهی
          به اقامتگاه به صورت جاده خاکی می باشد.
          <br />
          <strong className="text-gray-900">
            خانه ای در نزدیکی این اقامتگاه درحال ساخت و ساز است.
          </strong>
          <br />
          <strong className="text-gray-900">
            استخر روباز موجود در محوطه در حال حاضر غیر فعال می باشد.
          </strong>
        </p>
        <div className="my-5 h-[1px] w-full bg-gray-200"></div>
      </div>
      <div className="mt-5">
        <h4 className="mb-3 font-vazirBold text-lg">فضای اقامتگاه</h4>
        <div className="grid-cols-3 max-md:flex max-md:gap-10 md:grid">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 text-sm">
              <h5 className="font-vazirBold">ظرفیت استاندارد:</h5>
              <p className="font-persianNums text-gray-600 dark:text-gray-400">
                4 نفر
              </p>
            </div>
            <div className="flex gap-2 text-sm">
              <h5 className="font-vazirBold">متراژ زیربنا:</h5>
              <p className="font-persianNums text-gray-600 dark:text-gray-400">
                120 متر
              </p>
            </div>
            <div className="flex gap-2 text-sm">
              <h5 className="font-vazirBold">نوع اقامتگاه:</h5>
              <p className="font-persianNums text-gray-600 dark:text-gray-400">
                ویلایی
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 text-sm">
              <h5 className="font-vazirBold">حداکثر ظرفیت:</h5>
              <p className="font-persianNums text-gray-600 dark:text-gray-400">
                10 نفر
              </p>
            </div>
            <div className="flex gap-2 text-sm">
              <h5 className="font-vazirBold">متراژ محوطه:</h5>
              <p className="font-persianNums text-gray-600 dark:text-gray-400">
                800 متر
              </p>
            </div>
            <div className="flex gap-2 text-sm">
              <h5 className="font-vazirBold">منطقه:</h5>
              <p className="font-persianNums text-gray-600 dark:text-gray-400">
                شهری
              </p>
            </div>
          </div>
        </div>
        <div className="my-5 h-[1px] w-full bg-gray-200"></div>
      </div>
      <div className="mt-5">
        <div className="mb-5 flex items-center gap-2">
          <h4 className="font-vazirBold text-lg">فضای خواب</h4>
          <span className="rounded-full bg-gray-200 px-2 py-1 font-persianNums text-[12px] dark:text-gray-700">
            2 اتاق خواب
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-36 w-36 flex-col gap-2 rounded-md border border-gray-100 p-5 text-sm shadow-md">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <LuBedDouble size={24} />
              <LuBedSingle size={24} />
            </div>
            <p className="font-persianNums font-bold">اتاق 1</p>
            <p className="font-persianNums text-gray-600 dark:text-gray-300">
              1 تخت دونفره
            </p>
            <p className="font-persianNums text-gray-600 dark:text-gray-300">
              4 دست رختخواب
            </p>
          </div>
          <div className="flex h-36 w-36 flex-col gap-2 rounded-md border border-gray-100 p-5 text-sm shadow-md">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <LuBedDouble size={24} />
            </div>
            <p className="font-persianNums font-bold">اتاق 2</p>
            <p className="font-persianNums text-gray-600 dark:text-gray-300">
              1 تخت دونفره
            </p>
          </div>
        </div>
        <p className="mt-4 text-[13px] text-gray-600 dark:text-gray-300">
          مهمانان بیش از ۸ نفر سرویس خواب به همراه داشته باشند.
        </p>
        <div className="my-5 h-[1px] w-full bg-gray-200"></div>
      </div>
    </>
  );
}

export default RoomAbout;
