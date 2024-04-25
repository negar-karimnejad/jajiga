import { GoKey } from 'react-icons/go';
import { GrDocumentUpdate } from 'react-icons/gr';
import { TfiSpray } from 'react-icons/tfi';
import FaqList from '../components/ui/FaqList';

function Guarantee() {
  return (
    <div>
      <div className="h-52 max-h-96 w-full bg-[url(/images/guarantee.webp)] bg-cover bg-right text-white lg:h-64">
        <div className="relative h-full">
          <div className="absolute bottom-0 top-0 m-auto flex h-full flex-col justify-center gap-3 max-sm:right-[36%] sm:right-[25%]">
            <h2 className="font-vazirBold text-lg md:text-2xl">
              ضمانت تحویل اقامتگاه
            </h2>
            <p className="max-md:text-[11px]">
              اگر خدماتی که دریافت می‌کنید با خدمات تعهد شده مطابق نباشد ما پول
              شما را برمی‌گردانیم
            </p>
          </div>
        </div>
      </div>
      <div className="-mt-5 flex justify-center rounded-3xl bg-white py-20 dark:border-t-4 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex max-w-4xl flex-col items-center justify-center gap-20">
          <div className="flex items-center justify-center gap-5 max-lg:container max-lg:-mt-28 max-lg:flex-col">
            <svg
              className="h-16 w-16"
              fill="currentColor"
              viewBox="0 0 28 32"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="#1a3347"
                d="M26.261 13.056v-6.823c-6.946 0.047-10.42-3.42-12.29-5.181-1.869 1.761-5.344 5.228-12.29 5.181v6.823c0 0-0.895 13.353 12.29 18.043 13.185-4.69 12.29-18.043 12.29-18.043z"
              ></path>
              <path
                fill="#fff"
                d="M13.972 29.466l-0.202-0.081c-4.627-1.839-7.805-5.066-9.447-9.59-1.295-3.57-1.113-6.612-1.111-6.642l0.004-0.063-0.001-5.366 0.496-0.046c3.755-0.346 6.996-1.729 9.906-4.226l0.355-0.305 0.356 0.306c2.91 2.498 6.15 3.881 9.906 4.226l0.496 0.046 0.003 5.435c0.002 0.027 0.173 3.19-1.166 6.782-1.658 4.447-4.818 7.624-9.393 9.443l-0.202 0.080zM4.307 8.716l-0.005 4.512c-0.002 0.028-0.148 2.897 1.048 6.195 1.507 4.152 4.406 7.133 8.621 8.866 4.167-1.713 7.050-4.648 8.571-8.728 1.249-3.351 1.1-6.304 1.099-6.333l-0.004-0.068-0.001-4.442c-3.628-0.423-6.799-1.78-9.665-4.135-2.865 2.355-6.036 3.712-9.664 4.135z"
              ></path>
              <path
                fill="#fff"
                d="M20.516 17.314c-0.050-0.215-0.117-0.425-0.2-0.626-0.198-0.487-0.481-0.932-0.831-1.313-0.070-0.076-0.87-0.857-1.013-0.997-0.006-0.006-0.013-0.009-0.022-0.009s-0.015 0.003-0.020 0.008c-0.001 0-1.806 1.816-1.807 1.816s-0 0-0 0v0c-0.005 0.006-0.008 0.012-0.008 0.020 0 0.010 0.005 0.018 0.011 0.023l0.728 0.717c0 0 0.209 0.203 0.294 0.312 0.228 0.294 0.365 0.664 0.365 1.066 0 0.959-0.777 1.736-1.736 1.736s-1.736-0.777-1.736-1.736c0-0.417 0.148-0.808 0.393-1.112l5.046-5.030c0.007-0.006 0.011-0.014 0.011-0.023 0-0.016-0.012-0.029-0.028-0.030l-3.627 0.005-2.816-2.811c-0.005-0.006-0.014-0.009-0.022-0.009s-0.015 0.003-0.020 0.008c0 0 0 0-0.001 0s-6.832 6.833-6.832 6.834c-0.005 0.006-0.008 0.013-0.008 0.021 0 0.016 0.013 0.030 0.030 0.031v0c0.527 0 3.568-0 3.568-0.001 0.009-0.001 0.016-0.005 0.021-0.011 0 0 3.151-3.165 3.173-3.188s0.044-0.002 0.044-0.002c-0.019-0.019 0.937 0.935 0.937 0.935 0.022 0.022 0 0.044 0 0.044 0.021-0.022-1.275 1.298-1.352 1.382l-0.019 0.019 0.001 0.001c-0.704 0.775-1.132 1.803-1.132 2.932 0 2.409 1.954 4.363 4.363 4.363s4.363-1.954 4.363-4.363c0-0.349-0.041-0.689-0.117-1.013z"
              ></path>
            </svg>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-100 max-lg:text-center">
              هنگام قطعی کردن رزرو، مبلغ صورتحساب را بطور کامل به کیف پول خود
              شارژ می‌کنید.
              <br /> پس از تحویل اقامتگاه به شما و اطمینان از صحیح بودن رزرو،
              مبلغ اجاره بها به میزبان واریز می‌شود.
            </p>
          </div>
          <div className="rounded-2xl py-10 max-md:bg-gray-100 dark:max-md:bg-gray-900">
            <h3 className="mb-5 text-center font-vazirBold text-xl dark:text-white">
              ضمانت برگشت وجه پرداختی شما
            </h3>
            <div className="flex gap-5 max-lg:container max-md:flex-col">
              <div className="flex flex-col items-center justify-center gap-5 rounded-lg border border-gray-100 bg-white px-3 py-5 shadow-md dark:border-gray-800 dark:bg-gray-900 dark:shadow-lg dark:shadow-gray-950">
                <div className="rounded-full border-4 border-yellow-400 p-3 dark:text-white">
                  <GoKey size={40} />
                </div>
                <h3 className="font-vazirBold text-base dark:text-white">
                  اقامتگاه با مشخصات مطابقت ندارد!
                </h3>
                <p className="text-center text-sm leading-6 text-gray-700 dark:text-gray-300">
                  مبلغ پرداختی شما نزد جاجیگا محفوظ است. درصورتی که اقامتگاه
                  تحویل داده شده با مشخصات و آدرس ثبت شده در سند رزرو اختلاف
                  فاحش داشته باشد، حداکثر تا ساعت 10 صبح روز بعد از تاریخ شروع
                  رزرو مهلت دارید تا با ثبت شکایت و ارائه مدارک لازم، امکان
                  پیگیری را برای پشتیبانی جاجیگا فراهم نمایید. (پس از پایان مهلت
                  مذکور، مبلغ اجاره با میزبان تسویه خواهد شد).
                </p>
                <div className="w-5/6">
                  <button className="w-full rounded-full bg-yellow-400 p-2 text-gray-700 transition-all hover:bg-yellow-500 hover:text-gray-800 dark:text-black">
                    ثبت شکایت
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 rounded-lg border border-gray-100 bg-white px-3 py-5 shadow-md dark:border-gray-800 dark:bg-gray-900 dark:shadow-lg dark:shadow-gray-950">
                <div className="rounded-full border-4 border-yellow-400 p-3 dark:text-white">
                  <GrDocumentUpdate size={40} />
                </div>
                <h3 className="font-vazirBold text-base dark:text-white">
                  اقامتگاه به من تحویل داده نشده!
                </h3>
                <p className="text-center text-sm leading-6 text-gray-700 dark:text-gray-300">
                  مبلغ پرداختی شما نزد جاجیگا محفوظ است. درصورتی که اقامتگاهِ
                  رزرو شده، در تاریخ و ساعت درج شده در سند رزرو، به شما تحویل
                  نشده باشد، حداکثر تا ساعت 10 صبح روز بعد از تاریخ شروع رزرو
                  مهلت دارید تا با ثبت شکایت امکان پیگیری را برای پشتیبانی
                  جاجیگا فراهم نمایید. (نکته: پس از پایان مهلت مذکور، مبلغ اجاره
                  بها با میزبان تسویه خواهد شد).
                </p>
                <div className="w-5/6">
                  <button className="w-full rounded-full bg-yellow-400 p-2 text-gray-700 transition-all hover:bg-yellow-500 hover:text-gray-800 dark:text-black">
                    ثبت شکایت
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 rounded-lg border border-gray-100 bg-white px-3 py-5 shadow-md dark:border-gray-800 dark:bg-gray-900 dark:shadow-lg dark:shadow-gray-950">
                <div className="rounded-full border-4 border-yellow-400 p-3 dark:text-white">
                  <TfiSpray size={40} />
                </div>
                <h3 className="font-vazirBold text-base dark:text-white">
                  اقامتگاه کثیف است و نظافت نشده{' '}
                </h3>
                <p className="text-center text-sm leading-6 text-gray-700 dark:text-gray-300">
                  مبلغ پرداختی شما نزد جاجیگا محفوظ است. درصورتیکه اقامتگاه
                  تحویل داده شده بصورت مناسب نظافت نشده و بصورت واضحی کثیف است،
                  حداکثر تا ساعت 10 صبح روز بعد از تاریخ شروع رزرو مهلت دارید تا
                  با ثبت شکایت و ارائه مدارک لازم، امکان پیگیری را برای پشتیبانی
                  جاجیگا فراهم نمایید. (پس از پایان مهلت مذکور، مبلغ اجاره با
                  میزبان تسویه خواهد شد).
                </p>
                <div className="w-5/6">
                  <button className="w-full rounded-full bg-yellow-400 p-2 text-gray-700 transition-all hover:bg-yellow-500 hover:text-gray-800 dark:text-black">
                    ثبت شکایت
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="max-lg:container">
            <div className="flex max-md:items-center gap-5 bg-gradient-to-l from-sky-950 to-sky-600 p-5 max-md:flex-col">
              <svg
                className="h-16 w-16 md:h-24 md:w-24"
                fill="currentColor"
                viewBox="0 0 28 32"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill="#1a3347"
                  d="M26.261 13.056v-6.823c-6.946 0.047-10.42-3.42-12.29-5.181-1.869 1.761-5.344 5.228-12.29 5.181v6.823c0 0-0.895 13.353 12.29 18.043 13.185-4.69 12.29-18.043 12.29-18.043z"
                ></path>
                <path
                  fill="#fff"
                  d="M13.972 29.466l-0.202-0.081c-4.627-1.839-7.805-5.066-9.447-9.59-1.295-3.57-1.113-6.612-1.111-6.642l0.004-0.063-0.001-5.366 0.496-0.046c3.755-0.346 6.996-1.729 9.906-4.226l0.355-0.305 0.356 0.306c2.91 2.498 6.15 3.881 9.906 4.226l0.496 0.046 0.003 5.435c0.002 0.027 0.173 3.19-1.166 6.782-1.658 4.447-4.818 7.624-9.393 9.443l-0.202 0.080zM4.307 8.716l-0.005 4.512c-0.002 0.028-0.148 2.897 1.048 6.195 1.507 4.152 4.406 7.133 8.621 8.866 4.167-1.713 7.050-4.648 8.571-8.728 1.249-3.351 1.1-6.304 1.099-6.333l-0.004-0.068-0.001-4.442c-3.628-0.423-6.799-1.78-9.665-4.135-2.865 2.355-6.036 3.712-9.664 4.135z"
                ></path>
                <path
                  fill="#fff"
                  d="M20.516 17.314c-0.050-0.215-0.117-0.425-0.2-0.626-0.198-0.487-0.481-0.932-0.831-1.313-0.070-0.076-0.87-0.857-1.013-0.997-0.006-0.006-0.013-0.009-0.022-0.009s-0.015 0.003-0.020 0.008c-0.001 0-1.806 1.816-1.807 1.816s-0 0-0 0v0c-0.005 0.006-0.008 0.012-0.008 0.020 0 0.010 0.005 0.018 0.011 0.023l0.728 0.717c0 0 0.209 0.203 0.294 0.312 0.228 0.294 0.365 0.664 0.365 1.066 0 0.959-0.777 1.736-1.736 1.736s-1.736-0.777-1.736-1.736c0-0.417 0.148-0.808 0.393-1.112l5.046-5.030c0.007-0.006 0.011-0.014 0.011-0.023 0-0.016-0.012-0.029-0.028-0.030l-3.627 0.005-2.816-2.811c-0.005-0.006-0.014-0.009-0.022-0.009s-0.015 0.003-0.020 0.008c0 0 0 0-0.001 0s-6.832 6.833-6.832 6.834c-0.005 0.006-0.008 0.013-0.008 0.021 0 0.016 0.013 0.030 0.030 0.031v0c0.527 0 3.568-0 3.568-0.001 0.009-0.001 0.016-0.005 0.021-0.011 0 0 3.151-3.165 3.173-3.188s0.044-0.002 0.044-0.002c-0.019-0.019 0.937 0.935 0.937 0.935 0.022 0.022 0 0.044 0 0.044 0.021-0.022-1.275 1.298-1.352 1.382l-0.019 0.019 0.001 0.001c-0.704 0.775-1.132 1.803-1.132 2.932 0 2.409 1.954 4.363 4.363 4.363s4.363-1.954 4.363-4.363c0-0.349-0.041-0.689-0.117-1.013z"
                ></path>
              </svg>
              <div className="flex flex-col gap-7 max-md:text-center">
                <h3 className="font-vazirBold text-lg text-white">
                  ضمانت تحویل اقامتگاه
                </h3>
                <p className="leading-6 text-gray-300">
                  ساز و کار تحویل اقامتگاه جاجیگا به شما اطمینان میدهد تا
                  اقامتگاهی که رزرو کرده اید را با مشخصات ثبت شده آن در زمان
                  مقرر تحویل بگیرید و یا اینکه وجه واریزی خود را تمام و کمال و
                  بدون کسر هیچگونه کارمزدی پس بگیرید.
                </p>
                <p className="font-vazirBold text-gray-100">
                  پس با خیال راحت در جاجیگا، رزرو کنید.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-center font-vazirBold text-lg dark:text-white md:text-2xl">
              سوالات متداول
            </h2>
            <FaqList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guarantee;
