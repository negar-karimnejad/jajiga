import { BiChevronDown } from 'react-icons/bi';
import FaqList from '../components/ui/FaqList';

function Jobs() {
  return (
    <div>
      <div
        className="bg-yellow-400 pb-20 pt-10 md:pb-32"
        style={{ clipPath: 'polygon(0px 0px, 100% 0%, 100% 95%, 0px 88%)' }}
      >
        <div className="container flex gap-10 max-md:flex-col-reverse md:items-end">
          <div className="flex  w-96 flex-col items-start justify-between text-justify md:h-96">
            <div>
              <h2 className="text-2xl">جاجیگا</h2>
              <p className="my-5 text-lg">مثل خونه خودته :)</p>
              <p className="mb-5 text-base">
                جاجیگا، فقط یه استارتاپ که توش کار می‌کنیم نیست، جاجیگا خونه
                ماست، جایی که توش یاد می‌گیریم، رشد می‌کنیم و در یک کلام زندگی
                می‌کنیم.
              </p>
            </div>
            <button className="flex rounded-full bg-gray-100 px-3 py-2 shadow-lg transition-all hover:bg-gray-300 md:mx-auto">
              <span className="font-BKoodak">7 فرصت های شغلی</span>
              <BiChevronDown size={24} />
            </button>
          </div>
          <div className="relative max-sm:w-[200px]">
            <img
              src="images/jobs/job-1.png"
              alt=""
              className="rounded-lg shadow-lg"
            />

            <p className="absolute -bottom-5 left-0 font-BKoodak text-[12px] text-gray-500 md:-left-16 md:bottom-14 md:-rotate-90">
              باغ چای | پاییز 98
            </p>
          </div>
        </div>
      </div>
      <div className="my-10 flex flex-col gap-16 md:gap-28">
        <div className="container grid grid-cols-12 max-md:hidden">
          <div className="col-span-3 max-md:hidden"></div>
          <p className="col-span-12 text-justify leading-7 text-gray-600 md:col-span-9 md:mx-10 md:text-base">
            از ارزش‌های تیمی ما سخت‌کوشی، صداقت و صمیمیت هستند؛ صفاتی که در کنار
            تلاش‌های اعضای تیم در نقش‌های مختلف، جاجیگا رو به یک کسب و کار پیشرو
            در حیطه جذاب گردشگری و ایرانگردی در ایران تبدیل کرده.
          </p>
        </div>
        <div className="relative md:px-10">
          <div className="absolute -top-24 right-12 w-52 opacity-10 max-xl:hidden">
            <img src="/images/patterns/dot.png" alt="" />
          </div>
          <div className="container relative">
            <img
              src="/images/jobs/job-2.png"
              className="rounded-md shadow-lg shadow-gray-300"
              alt=""
            />
            <p className="absolute -bottom-6 left-5 font-BKoodak text-[12px] text-gray-400 md:-left-16 md:bottom-14 md:-rotate-90">
              خانواده جاجیگا | پاییز 1400
            </p>
          </div>
        </div>

        <div className="relative md:px-10">
          <div className="absolute -top-2 left-16 z-0 w-36 opacity-10 max-xl:hidden">
            <img src="/images/patterns/dot.png" alt="" />
          </div>
          <div className="container grid grid-cols-12 items-end justify-between gap-10">
            <div className="relative col-span-12 md:col-span-7">
              <img
                src="/images/jobs/job-3.png"
                alt=""
                className="w-full rounded-2xl shadow-lg shadow-gray-300"
              />
              <p className="righ-5 absolute -bottom-6 font-BKoodak text-[12px] text-gray-400 md:-right-16 md:bottom-14 md:-rotate-90">
                دفتر جاجیگا | 1400
              </p>
            </div>
            <p className="col-span-12 text-justify leading-7 text-gray-600 md:hidden">
              از ارزش‌های تیمی ما سخت‌کوشی، صداقت و صمیمیت هستند؛ صفاتی که در
              کنار تلاش‌های اعضای تیم در نقش‌های مختلف، جاجیگا رو به یک کسب و
              کار پیشرو در حیطه جذاب گردشگری و ایرانگردی در ایران تبدیل کرده.
            </p>
            <div className="relative z-10 col-span-12 md:col-span-5">
              <img
                src="/images/jobs/job-4.png"
                alt=""
                className="w-full rounded-2xl object-cover shadow-lg shadow-gray-300 lg:h-80"
              />
              <p className="absolute -bottom-6 left-5 font-BKoodak text-[12px] text-gray-400 md:-left-16 md:bottom-14 md:-rotate-90">
                لاهیجان | بهار 99
              </p>
            </div>
          </div>
          <div className="container my-10 grid grid-cols-12 items-center justify-between gap-10">
            <p className="col-span-12 text-justify leading-7 text-gray-600 md:col-span-5">
              همونقدر که حال امروز جاجیگا برامون مهمه، آینده و مسیر رسیدن به
              هدف‌های دوردست هم برامون مهمه، مسیری پرچالش که امیدوارانه طی
              می‌کنیم تا بتونیم تأثیری ماندگار بر زندگی خودمون، هموطنامون و بر
              صنعت گردشگری ایران عزیز به جا بگذاریم.
            </p>

            <div className="relative col-span-12 md:col-span-7">
              <img
                src="/images/jobs/job-5.png"
                alt=""
                className="w-full rounded-2xl object-cover shadow-lg shadow-gray-300 lg:h-80"
              />
              <p className="absolute -bottom-6 left-5 font-BKoodak text-[12px] text-gray-400 md:-left-16 md:bottom-14 md:-rotate-90">
                لاهیجان | بهار 99
              </p>
            </div>
          </div>
          <div className="container grid grid-cols-12 justify-between gap-10">
            <div className="relative col-span-12 md:col-span-7">
              <img
                src="/images/jobs/job-6.png"
                alt=""
                className="w-full rounded-2xl shadow-lg shadow-gray-300"
              />
              <p className="righ-5 absolute -bottom-6 font-BKoodak text-[12px] text-gray-400 md:-right-16 md:bottom-14 md:-rotate-90">
                الکامپ تهران | بهار 98
              </p>
            </div>

            <div className="col-span-12 flex flex-col justify-between gap-6 md:col-span-5 ">
              <div className="relative">
                <img
                  src="/images/jobs/job-7.png"
                  alt=""
                  className="w-full rounded-2xl object-cover shadow-lg shadow-gray-300 lg:h-80"
                />
                <p className="absolute -bottom-6 left-5 font-BKoodak text-[12px] text-gray-400 md:-left-16 md:bottom-14 md:-rotate-90">
                  لاهیجان | پاییز 1400
                </p>
              </div>
              <div className="relative">
                <img
                  src="/images/jobs/job-8.png"
                  alt=""
                  className="rounded-2xl object-cover shadow-lg shadow-gray-300"
                />
                <p className="absolute -bottom-6 left-5 font-BKoodak text-[12px] text-gray-400 md:-left-16 md:bottom-14 md:-rotate-90">
                  الکامپ تهران | بهار 98
                </p>
              </div>
            </div>
          </div>
          <div className="container my-20 grid grid-cols-12 justify-between gap-10">
            <div className="relative col-span-12 md:col-span-7 md:mt-20">
              <img
                src="/images/jobs/job-10.png"
                alt=""
                className="w-full rounded-2xl shadow-lg shadow-gray-300"
              />
              <p className="righ-5 absolute -bottom-6 font-BKoodak text-[12px] text-gray-400 md:-right-16 md:bottom-14 md:-rotate-90">
                هویج بستنی | تابستان 98
              </p>
            </div>

            <div className="col-span-12 md:col-span-5 ">
              <div className="relative">
                <img
                  src="/images/jobs/job-9.png"
                  alt=""
                  className="w-full rounded-2xl object-cover shadow-lg shadow-gray-300 lg:h-80"
                />
                <p className="absolute -bottom-6 left-5 font-BKoodak text-[12px] text-gray-400 md:-left-16 md:bottom-14 md:-rotate-90">
                  لاهیجان | پاییز 1400
                </p>
              </div>
            </div>
          </div>
          <div className="container my-10 grid grid-cols-12 items-center justify-between">
            <p className="col-span-12 text-justify text-base leading-7 text-gray-600 md:col-span-4">
              ما در جاجیگا به دنبال شکل دادن خانواده‌ای توانمند، صمیمی و
              خوشحالیم و برای تحقق این هدف مشتاقانه در پی جوان‌هایی با انگیزه،
              کوشا، مسئولیت‌پذیر و خوش‌قلب هستیم. جوان‌هایی که حداقل مهارت‌های
              مورد نیاز کسب و کار رو دارا باشن و مهمتر از اون، از انگیزه و
              پشتکار لازم برای آموختن و ارتقا مهارت‌های فردی و گروهی‌شون
              برخوردار باشن.
            </p>
            <div className="col-span-1"></div>
            <div className="relative col-span-12 md:col-span-7">
              <img
                src="/images/jobs/job-11.png"
                alt=""
                className="rounded-2xl shadow-lg shadow-gray-300"
              />
              <p className="absolute -bottom-6 left-5 font-BKoodak text-[12px] text-gray-400 md:-left-16 md:bottom-14 md:-rotate-90">
                گیله بوم | بهار 97
              </p>
            </div>
          </div>
          <div className="container my-10 flex gap-10 max-md:flex-col">
            <div className="relative h-full w-full">
              <img
                src="/images/jobs/job-12.png"
                alt=""
                className="h-80 w-full rounded-2xl object-cover shadow-lg shadow-gray-300"
              />
              <p className="absolute -bottom-6 left-5 font-BKoodak text-[12px] text-gray-400">
                ویلای چمخاله | بهار 97
              </p>
            </div>
            <div className="relative h-full w-full">
              <img
                src="/images/jobs/job-13.png"
                alt=""
                className="h-80 w-full rounded-2xl object-cover shadow-lg shadow-gray-300"
              />
              <p className="absolute -bottom-6 left-5 font-BKoodak text-[12px] text-gray-400">
                تراس جاجیگا | تابستان 99
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-yellow-400 pb-20 pt-10 md:pb-32"
        style={{ clipPath: 'polygon(0px 0px, 100% 5%, 100% 100%, 0% 100%)' }}
      >
        <div className="container my-20 gap-10 md:w-2/3">
          <p className="mb-10 text-justify text-base leading-7 text-gray-600">
            پس اگر در رشته‌ای مرتبط متخصص و ماهر هستید، اگر سخت‌کوش و باانگیزه
            هستید، اگر ساکن گیلان هستید یا علاقه مندید ساکن گیلان زیبا بشید، اگر
            با ما هم عقیده هستید که با تکنولوژی امروز برای ساختن دنیا نیازی به
            تحمل دود و دم، ترافیک و استرس‌ شهرهای بزرگی مثل تهران نیست؛ اگه دوست
            دارید فاصله خونه تا محل کارتون به اندازه 10 دقیقه پیاده روی یا 3
            دقیقه دوچرخه سواری باشه، پس جاجیگا رو خونه خودتون بدونید و در اولین
            فرصت رزومه کاملتون رو برامون ارسال کنید.
          </p>
          <div className="mb-10 rounded-md border border-dashed border-gray-500 bg-yellow-300 p-2">
            امریه سربازی ویژه شرکت های دانش بنیان برای بعضی از مشاغل، پذیرفته
            می‌شود.
          </div>
          <p className="mb-10 text-base text-gray-600">
            لیست مهارتهای مورد نیازمون رو می تونید همین پایین مشاهده کنید:
          </p>

          <FaqList />

          <p className="text-center text-gray-700">
            همین حالا اقدام کنید
            <br />
            یادتون باشه فرصت‌های شغلی جاجیگا مثل ویلاهاش، زود پُر میشن :)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
