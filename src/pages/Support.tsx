import { useState } from 'react';
import { BiEnvelope } from 'react-icons/bi';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import Breadcrumb from '../components/ui/Breadcrumb';
import FaqList from '../components/ui/FaqList';
import { faqDate } from '../data/data';
import HelpSection from '../components/HelpSection';

function Support() {
  const [isOpen, setIsOpen] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleButtonClick = () => {
    setShowTooltip(true);

    setTimeout(() => {
      setShowTooltip(false);
    }, 1000);
  };

  const closeHandler = () => {
    setIsOpen(0);
  };
  return (
    <>
      <div className="sticky top-0 z-10 bg-white py-2 shadow-md dark:bg-gray-900">
        <div className="container flex items-center justify-between gap-x-3">
          <WhiteBgNavbar />
        </div>
      </div>
      <div>
        <div className="h-24 w-full bg-yellow-400">
          <div className="h-full w-full bg-[url(/images/patterns/pattern.png)]">
            <Breadcrumb pageLink="پشتیبانی" />
          </div>
        </div>
        <div className="-mt-5 min-h-screen rounded-t-2xl bg-white dark:bg-gray-900">
          <div className="container flex gap-10 py-16 max-sm:flex-col">
            <div className="flex-1">
              <h2 className="mb-8 text-center font-vazirBold text-base dark:text-white">
                ارسال پیام به پشتیبانی
              </h2>
              <form className="flex flex-col gap-3 rounded-md border p-10 shadow-md">
                <label className="text-center font-vazirMedium" htmlFor="">
                  سوال خود را برای ما ارسال کنید
                </label>
                <input
                  type="email"
                  placeholder="ایمیل"
                  className="rounded-lg border p-2 shadow-md outline-0"
                />
                <textarea
                  placeholder="پیام خود را بنویسید..."
                  className="rounded-lg border p-2 shadow-md outline-0"
                  name=""
                  id=""
                  rows={4}
                ></textarea>
                <button className="rounded-md bg-yellow-400 p-2 font-vazirMedium text-base shadow-md transition-all hover:bg-yellow-500">
                  ارسال
                </button>
              </form>
              <div className="flex items-center justify-between gap-5">
                <button
                  onClick={() => setIsOpen(1)}
                  className="mt-10 flex flex-1 flex-col items-center justify-center gap-2 rounded-md border p-2 shadow-md"
                >
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M19.56 7.119a8.998 8.998 0 01.001 9.763M15.548 8.452a5.017 5.017 0 11-7.096 7.095 5.017 5.017 0 017.096-7.095"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.321 7.55l2.584-3.138a1.003 1.003 0 011.483-.072l1.273 1.273a1.002 1.002 0 01-.072 1.483L16.45 9.68"
                      fill="#F0C807"
                    ></path>
                    <path
                      d="M14.321 7.55l2.584-3.138a1.003 1.003 0 011.483-.072l1.273 1.273a1.002 1.002 0 01-.072 1.483L16.45 9.68"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.679 16.45l-2.584 3.138a1.003 1.003 0 01-1.483.072l-1.273-1.273a1.002 1.002 0 01.072-1.483L7.55 14.32"
                      fill="#F0C807"
                    ></path>
                    <path
                      d="M9.679 16.45l-2.584 3.138a1.003 1.003 0 01-1.483.072l-1.273-1.273a1.002 1.002 0 01.072-1.483L7.55 14.32"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.551 9.68l-3.14-2.585a1.003 1.003 0 01-.072-1.483L5.612 4.34a1.002 1.002 0 011.483.072l2.584 3.14"
                      fill="#F0C807"
                    ></path>
                    <path
                      d="M7.551 9.68l-3.14-2.585a1.003 1.003 0 01-.072-1.483L5.612 4.34a1.002 1.002 0 011.483.072l2.584 3.14"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.449 14.321l3.139 2.584c.457.376.49 1.064.072 1.483l-1.273 1.273a1.002 1.002 0 01-1.483-.072L14.32 16.45"
                      fill="#F0C807"
                    ></path>
                    <path
                      d="M16.449 14.321l3.139 2.584c.457.376.49 1.064.072 1.483l-1.273 1.273a1.002 1.002 0 01-1.483-.072L14.32 16.45M16.882 19.561a8.998 8.998 0 01-9.763 0M4.439 7.118a8.998 8.998 0 00.001 9.763M16.881 4.44a8.998 8.998 0 00-9.763-.001"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>راهنما</span>
                </button>
                <button
                  onClick={() => setIsOpen(2)}
                  className="mt-10 flex flex-1 flex-col items-center justify-center gap-2 rounded-md border p-2 shadow-md"
                >
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 17H18C17.448 17 17 16.552 17 16V11C17 10.448 17.448 10 18 10H19C20.105 10 21 10.895 21 12V15C21 16.105 20.105 17 19 17Z"
                      fill="#F0C807"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 17H5C3.895 17 3 16.105 3 15V12C3 10.895 3.895 10 5 10H6C6.552 10 7 10.448 7 11V16C7 16.552 6.552 17 6 17Z"
                      fill="#F0C807"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M18.5 10V9.5C18.5 5.91 15.59 3 12 3V3C8.41 3 5.5 5.91 5.5 9.5V10"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.625 21.25H11.375C10.685 21.25 10.125 20.69 10.125 20C10.125 19.31 10.685 18.75 11.375 18.75H12.625C13.315 18.75 13.875 19.31 13.875 20C13.875 20.69 13.315 21.25 12.625 21.25Z"
                      fill="#F0C807"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13.875 20H16C17.105 20 18 19.105 18 18V17"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>تماس</span>
                </button>
                <button
                  onClick={() => setIsOpen(3)}
                  className="mt-10 flex flex-1 flex-col items-center justify-center gap-2 rounded-md border p-2 shadow-md"
                >
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.374 12.718L19.88 9.663C20.581 9.189 21 8.398 21 7.552C21 6.142 19.858 5 18.449 5H5.56601C4.15701 5 3.01501 6.142 3.01501 7.551C3.01501 8.397 3.43401 9.188 4.13501 9.663L8.64101 12.718C10.674 14.096 13.341 14.096 15.374 12.718Z"
                      fill="#F0C807"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3 7.55103V17C3 18.657 4.343 20 6 20H18C19.657 20 21 18.657 21 17V7.55203"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>ارسال ایمیل</span>
                </button>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="mb-5 text-center font-vazirBold text-base dark:text-white">
                سوالات متداول
              </h2>

              <FaqList list={faqDate} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed right-0 top-0 flex h-screen w-full cursor-default flex-col items-center justify-center  bg-black/60 transition-all duration-500 max-sm:px-5 ${isOpen === 2 ? 'visible z-50 opacity-100' : 'invisible z-0 opacity-0'}`}
        onClick={closeHandler}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`rounded-lg bg-white px-5 py-10 shadow transition-all duration-500 dark:bg-gray-700 dark:text-white max-[600px]:w-[450px] max-[490px]:w-[300px] min-[600px]:w-[500px] ${isOpen === 2 ? 'translate-y-0' : 'translate-y-96'}`}
        >
          <button
            onClick={closeHandler}
            className="absolute -top-10 left-2 font-vazirBold text-4xl text-white"
          >
            &times;
          </button>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="pb-5 font-vazirBold text-lg">تماس با پشتیبانی</div>
            <section>
              <p className="mb-2 text-right">
                برای تماس تلفنی با پشتیبانی جاجیگا می توانید از ساعت
                <strong className="font-BKoodak">8 صبح</strong> الی
                <strong className="font-BKoodak">12 شب</strong> با شماره و داخلی
                های زیر تماس حاصل فرمایید:
              </p>
              <p className="font-BKoodak text-base font-bold">
                شماره تماس: 01391001391
              </p>
              <div className="mt-5">
                <div className="flex flex-col gap-5 text-gray-500">
                  <p className="font-BKoodak">
                    پیگیری رزرو یا بررسی پرداخت: داخلی 1
                  </p>
                  <p className="font-BKoodak">
                    ویرایش یا انتشار اقامتگاه: داخلی 2
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-center gap-4 rounded-md bg-yellow-400 p-2 font-vazirMedium text-base shadow-md transition-all hover:bg-yellow-500">
                  <LiaPhoneVolumeSolid size={20} className="rotate-[-90deg]" />
                  <a href="tel:01391001391">تماس تلفنی با پشتیبان</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div
        className={`fixed right-0 top-0 flex h-screen w-full cursor-default flex-col items-center justify-center  bg-black/60 transition-all duration-500 max-sm:px-5 ${isOpen === 3 ? 'visible z-50 opacity-100' : 'invisible z-0 opacity-0'}`}
        onClick={closeHandler}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`rounded-lg bg-white px-5 py-10 shadow transition-all duration-500 dark:bg-gray-700 dark:text-white max-[600px]:w-[450px] max-[490px]:w-[300px] min-[600px]:w-[500px] ${isOpen === 3 ? 'translate-y-0' : 'translate-y-96'}`}
        >
          <button
            onClick={closeHandler}
            className="absolute -top-10 left-2 font-vazirBold text-4xl text-white"
          >
            &times;
          </button>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="pb-5 font-vazirBold text-lg">
              ارسال ایمیل/نامه به جاجیگا
            </div>
            <section>
              <div className="mb-2 text-right">
                از ایمیل می‌توانید به منظور ارسال مکاتبات رسمی، ارسال رزومه و
                پیشنهاد یا انتقاد خود به ما استفاده کنید:
                <div className="relative my-5 flex justify-center">
                  <div
                    className={`tooltip tooltip-open absolute transition-all ${showTooltip ? 'visible translate-y-0' : 'invisible -z-10 translate-y-5'}`}
                    data-tip="کپی شد"
                  ></div>
                  <button
                    onClick={handleButtonClick}
                    className="btn btn-ghost mx-auto  flex w-fit items-center justify-center gap-2 rounded-md bg-yellow-400 p-2 px-4 font-vazirMedium text-base shadow-md transition-all hover:bg-yellow-500"
                  >
                    <p>info@jajiga.com</p>
                    <BiEnvelope />
                  </button>
                </div>
                <p className="sc-c1a7c107-0 cUZHNR">
                  <strong>آدرس پستی جاجیگا:</strong> پارک علم و فناوری گیلان -
                  مرکز رشد رودسر - کد پستی ۴۴۸۱۸۳۶۱۸۱
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div
        className={`fixed right-0 top-0 h-screen w-full bg-black/60 transition-all duration-500 ${isOpen === 1 ? 'visible z-50 opacity-100' : 'invisible z-0 opacity-0'}`}
        onClick={closeHandler}
      >
        <div className="relative w-[530px] max-[600px]:w-[450px] max-[490px]:w-[330px]">
          <button className="absolute -left-3 top-2 font-vazirBold text-4xl text-white">
            &times;
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`absolute top-0 z-50 h-screen w-[500px] overflow-y-scroll rounded-s-xl bg-white pt-3 shadow transition-all duration-500 dark:border-l-4 dark:border-l-gray-800 dark:bg-gray-900 max-[600px]:w-[420px] max-[490px]:w-[300px] ${isOpen === 1 ? 'right-0' : '-right-[420px]'}`}
          >
            <HelpSection modal={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
