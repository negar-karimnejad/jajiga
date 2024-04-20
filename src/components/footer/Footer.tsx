import { PiInstagramLogo, PiTelegramLogo } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="rounded-t-3xl bg-gray-100">
      <div className="container grid grid-cols-12 justify-between gap-10 py-10">
        <div className="col-span-12 flex flex-col gap-8 lg:col-span-9">
          <div className="flex flex-col justify-between gap-7 md:flex-row">
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
            <div>
              <p className="mb-5 text-center font-vazirBold text-sm text-gray-700">
                نصب اپلیکیشن جاجیگا
              </p>
              <div className="flex gap-3">
                <div className="flex w-full flex-col gap-3">
                  <Link
                    target="_blank"
                    to="https://cafebazaar.ir/app/com.jajiga.app"
                  >
                    <img
                      src="/images/app-store/Bazzar.png"
                      className="h-12 w-full rounded-md bg-black object-contain md:h-10"
                      alt="phone"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://myket.ir/app/com.jajiga.app"
                  >
                    <img
                      src="/images/app-store/Myket.png"
                      className="h-12 w-full rounded-md bg-black object-contain md:h-10"
                      alt="phone"
                    />
                  </Link>
                </div>
                <div className="flex w-full flex-col gap-3">
                  <Link
                    target="_blank"
                    to="https://play.google.com/store/apps/details?id=com.jajiga.app"
                  >
                    <img
                      src="/images/app-store/PlayStore.png"
                      className="h-12 w-full rounded-md bg-black object-contain md:h-10"
                      alt="phone"
                    />
                  </Link>

                  <img
                    src="/images/app-store/WebApp.png"
                    className="h-12 w-full rounded-md bg-black object-contain md:h-10"
                    alt="phone"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="mb-5 text-center font-vazirBold text-sm text-gray-700">
                با ما همراه شوید
              </p>
              <div className="flex w-full justify-center gap-2 md:flex-col">
                <Link
                  target="_blank"
                  className="flex h-12 w-full items-center justify-center gap-3 rounded-md bg-black bg-gradient-to-r from-purple-600 via-red-600 to-orange-500 shadow md:h-10 md:w-40"
                  to="https://www.instagram.com/jajiga.iran"
                >
                  <span
                    className="font-vazirMedium text-base text-white"
                    style={{ direction: 'ltr' }}
                  >
                    700 k
                  </span>
                  <PiInstagramLogo size={30} className="text-white" />
                </Link>
                <Link
                  target="_blank"
                  className="flex h-12 w-full items-center justify-center gap-3 rounded-md bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 shadow md:h-10 md:w-40"
                  to="https://t.me/jajiga"
                >
                  <span
                    className="font-vazirMedium text-base text-white"
                    style={{ direction: 'ltr' }}
                  >
                    20 k
                  </span>
                  <PiTelegramLogo size={25} className="text-white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2  md:grid-cols-5">
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا شمال
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره کلبه چوبی
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا رامسر
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا استخردار
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              سوئیت مشهد
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا کردان
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا ماسال
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره سوئیت در کیش
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا اطراف تهران
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره سوئیت استانبول
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا سواد کوه
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              سوئیت قشم
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا انزلی
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا چالوس
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره سوئیت در تهران
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره سوئیت در شیراز
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا رشت
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا در فیلبند
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره سوئیت در اصفهان
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا محمودآباد
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              ویلا استخردار شمال
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              رزرو اقامتگاه بوم گردی
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا گیلان
            </Link>
            <Link
              className="rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to=""
            >
              اجاره ویلا ساحلی شمال
            </Link>
          </div>
        </div>
        <div className="col-span-12 flex flex-col items-center lg:col-span-3">
          <p className="mb-5 text-center font-vazirBold text-sm text-gray-700">
            با خیال راحت به جاجیگا اعتماد کنید
          </p>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 flex h-[94px] w-[94px] items-center justify-center rounded-[30px] bg-white shadow lg:col-span-6">
              <img
                src="images/footer/enamad.png"
                className="h-20 w-20 p-1"
                alt=""
              />
            </div>
            <div className="col-span-3 flex h-[94px] w-[94px] items-center justify-center rounded-[30px] bg-white shadow lg:col-span-6">
              <img
                src="images/footer/ecunion.png"
                className="h-20 w-20 p-1"
                alt=""
              />
            </div>
            <div className="col-span-3 flex h-[94px] w-[94px] items-center justify-center rounded-[30px] bg-white shadow lg:col-span-6">
              <img
                src="images/footer/vmfg.png"
                className="h-20 w-20 p-1"
                alt=""
              />
            </div>
            <div className="col-span-3 flex h-[94px] w-[94px] items-center justify-center rounded-[30px] bg-white shadow lg:col-span-6">
              <img
                src="images/footer/mjwm.png"
                className="h-20 w-20 p-1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-t-3xl bg-gray-300 py-4 text-center text-[11px] text-gray-500">
        <p>
          کلیه حقوق این وبسایت متعلق به شرکت تجارت الکترونیک لوتوس آرمانی (سهامی
          خاص) می‌باشد.
        </p>
      </div>
    </div>
  );
}

export default Footer;
