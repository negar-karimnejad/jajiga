import { FormEvent, useEffect, useState } from 'react';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { IoWalletOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';
import Application from '../components/home/Application';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';

function Finance() {
  const [showInfo, setShowInfo] = useState(0);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [money, setMoney] = useState('');
  const [gift, setGift] = useState('');
  const [activeButton, setActiveButton] = useState('transaction');

  useEffect(() => {
    if (value.length > 0 && value.length !== 24) {
      setError('شماره شبا باید 24 رقم باشد');
    } else {
      setError('');
    }
  }, [value.length]);

  useEffect(() => {
    if (value && !error) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [error, value]);

  const shabaSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: 'شماره شبا با موفقیت ثبت شد',
        toast: true,
        position: 'top-right',
        showConfirmButton: true,
        icon: 'success',
        customClass: { icon: 'm-auto mt-4' },
        confirmButtonText: 'باشه',
      }).then((result) => {
        if (result.isConfirmed) {
          setValue('');
        }
      });
    } catch (error) {
      Swal.fire({
        text: 'متاسفانه عملیات انجام نشد',
        toast: true,
        timer: 5000,
        position: 'top-right',
        showConfirmButton: false,
        icon: 'error',
      });
    }
  };
  const moneySubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Swal.fire({
      text: 'شماره شبا معتبر نیست.',
      toast: true,
      timer: 5000,
      position: 'top-right',
      showConfirmButton: false,
      icon: 'error',
    });
  };
  const giftSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Swal.fire({
      text: 'کد وارد شده معتبر نیست.',
      toast: true,
      timer: 5000,
      position: 'top-right',
      showConfirmButton: false,
      icon: 'error',
    });
  };

  return (
    <>
      <Application style="h-12" />
      <div className="mx-auto w-full border-b bg-white py-2 dark:border-0 dark:bg-gray-800 lg:gap-x-10">
        <div className="container flex items-center justify-between gap-x-3">
          <WhiteBgNavbar />
        </div>
      </div>
      <div className="relative">
        <div className="h-24 w-full bg-yellow-400">
          <div className="h-full w-full bg-[url(/images/patterns/pattern.png)]">
            <Breadcrumb pageLink="کیف پول" />
          </div>
        </div>
        <div className="-mt-5 rounded-t-2xl bg-gray-100 dark:bg-gray-800">
          <div className="container flex flex-col gap-4 py-10">
            <div className="flex gap-4 max-lg:flex-col">
              <div className="w-full rounded-lg border bg-white p-4 shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900">
                <div className="mb-5 flex items-center gap-2">
                  <div className="rounded-full bg-amber-200 p-2 text-black">
                    <IoWalletOutline size={18} />
                  </div>
                  <h5 className="mb-2 font-vazirMedium text-lg dark:text-white">موجودی</h5>
                </div>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    <div className="text-sm dark:text-gray-100">موجودی قابل برداشت</div>
                    <div
                      className="relative"
                      onMouseEnter={() => setShowInfo(1)}
                      onMouseLeave={() => setShowInfo(0)}
                    >
                      <IoMdInformationCircleOutline
                        size={18}
                        className="text-sky-500"
                      />
                      <div
                        className={`absolute -right-[120px] bottom-6 w-64 rounded-lg bg-neutral-700 px-3 py-3 text-sm leading-6 text-white shadow-lg after:absolute after:-bottom-1 after:left-0 after:right-0 after:m-auto after:h-2 after:w-2 after:rotate-45 after:bg-neutral-700 ${showInfo === 1 ? 'block' : 'hidden'}`}
                      >
                        بخشی از موجودی شما که می توانید آن را با ثبت "درخواست
                        واریز وجه" دریافت کنید.
                      </div>
                    </div>
                  </div>
                  <div className="h-1 w-1/2 border-b border-dashed border-gray-500 max-lg:hidden"></div>
                  <div className="text-[12px]">
                    <span className="font-persianNums">0</span> تومان
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    <div className="text-sm dark:text-gray-100">موجودی بلوکه شده</div>
                    <div
                      className="relative"
                      onMouseEnter={() => setShowInfo(2)}
                      onMouseLeave={() => setShowInfo(0)}
                    >
                      <IoMdInformationCircleOutline
                        size={18}
                        className="text-sky-500"
                      />
                      <div
                        className={`absolute -right-[120px] bottom-6 w-64 rounded-lg bg-neutral-700 px-3 py-3 text-sm leading-6 text-white shadow-lg after:absolute after:-bottom-1 after:left-0 after:right-0 after:m-auto after:h-2 after:w-2 after:rotate-45 after:bg-neutral-700 ${showInfo === 2 ? 'block' : 'hidden'}`}
                      >
                        بخشی از موجودی شما که در هنگام رزرو یک اقامتگاه یا در
                        هنگام واریز وجه به حساب بانکی شما بلوکه می شود.
                      </div>
                    </div>
                  </div>
                  <div className="h-1 w-1/2 border-b border-dashed border-gray-500 max-lg:hidden"></div>
                  <div className="text-[12px]">
                    <span className="font-persianNums">0</span> تومان
                  </div>
                </div>
              </div>
              <div className="w-full rounded-lg border bg-white p-4 shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900">
                <h5 className="mb-2 font-vazirMedium text-lg dark:text-white">شماره شبا</h5>
                <form onSubmit={shabaSubmitHandler}>
                  <div
                    className={`flex items-end justify-between gap-3 rounded-lg border px-4 py-2 ${error ? 'border-2 border-red-500' : ''}`}
                  >
                    <input
                      style={{ direction: 'ltr' }}
                      type="number"
                      id="shaba"
                      name="shaba"
                      value={value}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        setValue(e.target.value);
                        if (inputValue.length <= 24) {
                          setValue(inputValue);
                        } else {
                          setValue(inputValue.slice(0, 24)); // Truncate the value to 24 characters
                        }
                      }}
                      className="w-full font-persianNums text-sm outline-none bg-transparent dark:text-gray-50"
                    />
                    <div className="text-gray-500 dark:text-gray-300">IR</div>
                  </div>
                  <p className="text-[11px] text-error">{error}</p>

                  <span className="text-[12px] text-gray-500 dark:text-gray-300">
                    توجه: شماره شبای ثبت شده می‌بایست به نام{' '}
                    <span className="font-vazirBold text-[13px] text-gray-600 dark:text-gray-100">
                      «سارا نظری»
                      {/* TASK:نام یوزر را قرار بده */}
                    </span>{' '}
                    باشد؛ در غیر این صورت واریز وجه قابل انجام نخواهد بود.
                  </span>
                  <Button
                    disabled={isValid}
                    style="disabled:opacity-50 disabled:cursor-not-allowed w-fit float-left text-sm mt-8 rounded-md bg-green-400 p-2 px-3 text-white transition-all"
                    type="submit"
                  >
                    ثبت
                  </Button>
                </form>
              </div>
            </div>
            <div className="flex gap-4 max-lg:flex-col">
              <div className="w-full rounded-lg border bg-white p-4 shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900">
                <h5 className="mb-2 font-vazirMedium text-lg dark:text-white">
                  درخواست برداشت
                </h5>
                <form onSubmit={moneySubmitHandler}>
                  <div className="flex items-end justify-between gap-3 rounded-lg border px-4 py-2">
                    <input
                      style={{ direction: 'ltr' }}
                      type="number"
                      id="shaba"
                      name="shaba"
                      value={money}
                      onChange={(e) => setMoney(e.target.value)}
                      className="w-full font-persianNums text-sm outline-none bg-transparent dark:text-gray-50"
                    />
                    <div className="text-gray-500 dark:text-gray-300">تومان</div>
                  </div>
                  <span className="text-[12px] text-gray-500 dark:text-gray-300">
                    وجه درخواست‌شده، حداکثر ظرف 48 ساعت در روزهای کاری هفته به
                    حساب بانکی ثبت‌شده توسط شما واریز خواهد شد.
                  </span>
                  <Button
                    style="w-fit float-left text-sm mt-8 rounded-md bg-yellow-400 hover:bg-yellow-500 p-2 px-3 transition-all"
                    type="submit"
                  >
                    ثبت درخواست برداشت
                  </Button>
                </form>
              </div>
              <div className="w-full rounded-lg border bg-white p-4 shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900">
                <h5 className="mb-2 font-vazirMedium text-lg dark:text-white">
                  اعتبار سفر/هدیه
                </h5>
                <form onSubmit={giftSubmitHandler}>
                  <div className="flex items-end justify-between gap-3 rounded-lg border px-4 py-2">
                    <input
                      style={{ direction: 'ltr' }}
                      type="text"
                      id="shaba"
                      name="shaba"
                      value={gift}
                      onChange={(e) => setGift(e.target.value)}
                      className="w-full font-persianNums text-sm outline-none bg-transparent dark:text-gray-50"
                    />
                  </div>
                  <span className="text-[12px] text-gray-500 dark:text-gray-300">
                    ﮐﺪ اﻋﺘﺒﺎر ﺳﻔﺮ یا هدیه خود را در کادر بالا وارد ﮐﻨﯿﺪ.
                  </span>
                  <Button
                    disabled={!gift}
                    style="disabled:opacity-50 disabled:cursor-not-allowed w-fit float-left text-sm mt-8 rounded-md bg-yellow-400 p-2 px-3 text-white transition-all"
                    type="submit"
                  >
                    ثبت
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="container mb-0 flex gap-7">
            <button
              className={`pb-2 ${activeButton === 'transaction' ? 'border-b-2 border-b-gray-800 font-vazirBold dark:border-b-white dark:text-white' : ''}`}
              onClick={() => setActiveButton('transaction')}
            >
              تراکنش ها
            </button>
            <button
              className={`pb-2 ${activeButton === 'gift' ? 'border-b-2 border-b-gray-800 font-vazirBold dark:border-b-white dark:text-white' : ''}`}
              onClick={() => setActiveButton('gift')}
            >
              اعتبار/هدیه
            </button>
          </div>
          <div className="dark:bg-gray-900 pb-20 flex flex-col items-center justify-center gap-5 rounded-t-2xl bg-white py-16">
            <svg
              className="h-28 w-28"
              fill="currentColor"
              viewBox="0 0 113 130"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M73.12,82c-4.55,0-8.63-2.94-10.65-7.68l-.31-.72-.3-.7.66-.39L65.16,71l.85-.5.38.91.31.73a6.73,6.73,0,0,0,12.83,0l.31-.73.39-.91.85.5,2.63,1.55.66.38-.3.7-.31.73C81.74,79.07,77.67,82,73.12,82ZM46.43,82c-4.55,0-8.63-2.94-10.64-7.68l-.31-.72-.3-.7.65-.39L38.47,71l.85-.5.38.91.32.73a7.13,7.13,0,0,0,6.41,4.7,7.16,7.16,0,0,0,6.41-4.7l.31-.73.39-.91.85.5L57,72.52l.66.38-.3.7-.31.73C55.06,79.07,51,82,46.43,82ZM60.21,97.09A4.13,4.13,0,1,0,61.78,105a4.26,4.26,0,0,0,1.86-1.52,4.13,4.13,0,0,0-3.43-6.42ZM126,48v3H114V48.87L121.2,41H115V38h11v2.37L119.33,48Zm-5-26v5H101V23.27L111.9,10H101V5h19V8.86L108.74,22Z"
                transform="translate(-13 -5)"
                style={{ fill: 'rgb(155, 155, 155)' }}
              ></path>
              <path
                d="M103,135H19a5.85,5.85,0,0,1-2.3-.44,5.63,5.63,0,0,1-1.95-1.31,5.84,5.84,0,0,1-1.31-1.94A5.93,5.93,0,0,1,13,129V29a6,6,0,0,1,6-6H75a16.64,16.64,0,0,1,10.25,4.25l19.5,19.5a14.5,14.5,0,0,1,3,4.75A14.29,14.29,0,0,1,109,57v72a6,6,0,0,1-.45,2.3,6,6,0,0,1-3.25,3.25,6,6,0,0,1-2.3.45ZM21,31v96h80V63H75a6,6,0,0,1-6-6V31Zm56,.6V55h23.4A6.86,6.86,0,0,0,99,52.45L79.55,33A6.72,6.72,0,0,0,77,31.6Z"
                transform="translate(-13 -5)"
                style={{ fill: 'rgb(225, 224, 225)' }}
              ></path>
            </svg>
            <h3 className="font-vazirBold text-lg text-gray-700 dark:text-white">
              {activeButton === 'transaction'
                ? 'هنوز هیچ تراکنشی وجود ندارد'
                : 'هنوز هیچ هدیه ای وجود ندارد'}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Finance;
