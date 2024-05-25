import { CiCalendarDate } from 'react-icons/ci';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MagSocials from '../components/article/MagSocials';
import ArticleMenuList from '../components/articles/ArticleMenuList';
import ArticlesFooter from '../components/articles/ArticlesFooter';
import ArticlesHeader from '../components/articles/ArticlesHeader';
import MagAuthor from '../components/articles/MagAuthor';
import Button from '../components/ui/Button';
import { useArticle } from '../hooks/useArticle';
import convertToPersianDate from '../utilities/convertToPersianDate';

function Article() {
  const { id } = useParams();
  const title = id ? id.replaceAll('-', ' ') : '';
  const { article } = useArticle(title);

  if (!article) return;

  return (
    <div className="bg-base-200 dark:bg-gray-900">
      <ArticlesHeader id={id} />
      <img
        src={article.cover}
        alt=""
        className="h-72 w-full object-cover sm:h-80 md:h-96 lg:h-[500px]"
      />
      <div className="container">
        <div className="my-10">
          <div className="flex grid-cols-12 flex-col-reverse max-lg:gap-10 lg:grid lg:gap-12">
            <div className="col-span-12 h-fit lg:col-span-4">
              <div className="mb-8 border bg-white shadow-md shadow-gray-300 dark:border-0 dark:shadow-gray-950 max-lg:hidden">
                <ArticleMenuList />
              </div>
              <div className="border bg-white p-4 py-8 shadow-lg shadow-gray-300 dark:border-0 dark:bg-gray-800 dark:shadow-gray-950">
                <h3 className="mb-5 font-vazirBold text-lg dark:text-white">
                  آخرین پست ها
                </h3>
                <div className="relative">
                  <Swiper
                    navigation={{
                      nextEl: '.article-swiper-button-next',
                      prevEl: '.article-swiper-button-prev',
                    }}
                    loop={true}
                    // slidesPerView={1}
                    modules={[Navigation]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 250,
                      },
                      700: {
                        slidesPerView: 2,
                        spaceBetween: 100,
                      },
                      1024: {
                        slidesPerView: 1,
                        spaceBetween: 250,
                      },
                    }}
                  >
                    <SwiperSlide className="flex flex-col gap-5">
                      <Link to="" className="group flex">
                        <div className="h-16 w-24 overflow-hidden transition-all group-hover:brightness-75">
                          <img
                            className="h-full w-24 object-cover"
                            loading="lazy"
                            src="/images/popular/anzali.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mr-3 flex flex-1 items-center">
                          <p className="flex w-full flex-col font-vazirMedium text-sm leading-6 text-gray-600 transition-all group-hover:text-sky-500 dark:text-gray-200">
                            دریاچه قو یکی از مناظر زلال و سرسبز رامسر
                          </p>
                        </div>
                      </Link>
                      <Link to="" className="group flex">
                        <div className="h-16 w-24 overflow-hidden transition-all group-hover:brightness-75">
                          <img
                            className="h-full w-24 object-cover"
                            loading="lazy"
                            src="/images/popular/anzali.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mr-3 flex flex-1 items-center">
                          <p className="flex w-full flex-col font-vazirMedium text-sm leading-6 text-gray-600 transition-all group-hover:text-sky-500 dark:text-gray-200">
                            دریاچه قو یکی از مناظر زلال و سرسبز رامسر
                          </p>
                        </div>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col gap-5">
                      <Link to="" className="group flex">
                        <div className="h-16 w-24 overflow-hidden transition-all group-hover:brightness-75">
                          <img
                            className="h-full w-24 object-cover"
                            loading="lazy"
                            src="/images/popular/anzali.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mr-3 flex flex-1 items-center">
                          <p className="flex w-full flex-col font-vazirMedium text-sm leading-6 text-gray-600 transition-all group-hover:text-sky-500 dark:text-gray-200">
                            دریاچه قو یکی از مناظر زلال و سرسبز رامسر
                          </p>
                        </div>
                      </Link>
                      <Link to="" className="group flex">
                        <div className="h-16 w-24 overflow-hidden transition-all group-hover:brightness-75">
                          <img
                            className="h-full w-24 object-cover"
                            loading="lazy"
                            src="/images/popular/anzali.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mr-3 flex flex-1 items-center">
                          <p className="flex w-full flex-col font-vazirMedium text-sm leading-6 text-gray-600 transition-all group-hover:text-sky-500 dark:text-gray-200">
                            دریاچه قو یکی از مناظر زلال و سرسبز رامسر
                          </p>
                        </div>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col gap-5">
                      <Link to="" className="group flex">
                        <div className="h-16 w-24 overflow-hidden transition-all group-hover:brightness-75">
                          <img
                            className="h-full w-24 object-cover"
                            loading="lazy"
                            src="/images/popular/anzali.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mr-3 flex flex-1 items-center">
                          <p className="flex w-full flex-col font-vazirMedium text-sm leading-6 text-gray-600 transition-all group-hover:text-sky-500 dark:text-gray-200">
                            دریاچه قو یکی از مناظر زلال و سرسبز رامسر
                          </p>
                        </div>
                      </Link>
                      <Link to="" className="group flex">
                        <div className="h-16 w-24 overflow-hidden transition-all group-hover:brightness-75">
                          <img
                            className="h-full w-24 object-cover"
                            loading="lazy"
                            src="/images/popular/anzali.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mr-3 flex flex-1 items-center">
                          <p className="flex w-full flex-col font-vazirMedium text-sm leading-6 text-gray-600 transition-all group-hover:text-sky-500 dark:text-gray-200">
                            دریاچه قو یکی از مناظر زلال و سرسبز رامسر
                          </p>
                        </div>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col gap-5">
                      <Link to="" className="group flex">
                        <div className="h-16 w-24 overflow-hidden transition-all group-hover:brightness-75">
                          <img
                            className="h-full w-24 object-cover"
                            loading="lazy"
                            src="/images/popular/anzali.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mr-3 flex flex-1 items-center">
                          <p className="flex w-full flex-col font-vazirMedium text-sm leading-6 text-gray-600 transition-all group-hover:text-sky-500 dark:text-gray-200">
                            دریاچه قو یکی از مناظر زلال و سرسبز رامسر
                          </p>
                        </div>
                      </Link>
                      <Link to="" className="group flex">
                        <div className="h-16 w-24 overflow-hidden transition-all group-hover:brightness-75">
                          <img
                            className="h-full w-24 object-cover"
                            loading="lazy"
                            src="/images/popular/anzali.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mr-3 flex flex-1 items-center">
                          <p className="flex w-full flex-col font-vazirMedium text-sm leading-6 text-gray-600 transition-all group-hover:text-sky-500 dark:text-gray-200">
                            دریاچه قو یکی از مناظر زلال و سرسبز رامسر
                          </p>
                        </div>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col gap-5">
                      <Link to="" className="group flex">
                        <div className="h-16 w-24 overflow-hidden transition-all group-hover:brightness-75">
                          <img
                            className="h-full w-24 object-cover"
                            loading="lazy"
                            src="/images/popular/anzali.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mr-3 flex flex-1 items-center">
                          <p className="flex w-full flex-col font-vazirMedium text-sm leading-6 text-gray-600 transition-all group-hover:text-sky-500 dark:text-gray-200">
                            دریاچه قو یکی از مناظر زلال و سرسبز رامسر
                          </p>
                        </div>
                      </Link>
                      <Link to="" className="group flex">
                        <div className="h-16 w-24 overflow-hidden transition-all group-hover:brightness-75">
                          <img
                            className="h-full w-24 object-cover"
                            loading="lazy"
                            src="/images/popular/anzali.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mr-3 flex flex-1 items-center">
                          <p className="flex w-full flex-col font-vazirMedium text-sm leading-6 text-gray-600 transition-all group-hover:text-sky-500 dark:text-gray-200">
                            دریاچه قو یکی از مناظر زلال و سرسبز رامسر
                          </p>
                        </div>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col gap-5">
                      <Link to="" className="group flex">
                        <div className="h-16 w-24 overflow-hidden transition-all group-hover:brightness-75">
                          <img
                            className="h-full w-24 object-cover"
                            loading="lazy"
                            src="/images/popular/anzali.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mr-3 flex flex-1 items-center">
                          <p className="flex w-full flex-col font-vazirMedium text-sm leading-6 text-gray-600 transition-all group-hover:text-sky-500 dark:text-gray-200">
                            دریاچه قو یکی از مناظر زلال و سرسبز رامسر
                          </p>
                        </div>
                      </Link>
                      <Link to="" className="group flex">
                        <div className="h-16 w-24 overflow-hidden transition-all group-hover:brightness-75">
                          <img
                            className="h-full w-24 object-cover"
                            loading="lazy"
                            src="/images/popular/anzali.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mr-3 flex flex-1 items-center">
                          <p className="flex w-full flex-col font-vazirMedium text-sm leading-6 text-gray-600 transition-all group-hover:text-sky-500 dark:text-gray-200">
                            دریاچه قو یکی از مناظر زلال و سرسبز رامسر
                          </p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  </Swiper>

                  <div className="article-swiper-button-next absolute -top-12 left-7 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-all hover:bg-gray-400 dark:bg-gray-900 dark:hover:bg-gray-950">
                    <FaChevronRight
                      size={15}
                      className="text-gray-700 transition-all dark:text-gray-300"
                    />
                  </div>
                  <div className="article-swiper-button-prev absolute -top-12 left-0 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-all hover:bg-gray-400 dark:bg-gray-900 dark:hover:bg-gray-950">
                    <FaChevronLeft
                      size={15}
                      className="text-gray-700 transition-all dark:text-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 -mt-24 space-y-10 lg:col-span-6">
              <div className="border bg-white p-10 py-8 shadow-lg shadow-gray-300 dark:border-0 dark:bg-gray-800 dark:shadow-lg dark:shadow-gray-950">
                <Link
                  to="category/knowing"
                  className="w-fit rounded-full bg-sky-600 px-2 py-1 text-[11px] text-white transition-all hover:bg-amber-50 hover:text-gray-700"
                  style={{ backgroundColor: article.category.color }}
                >
                  {article.category.title}
                </Link>
                <h2 className="my-5 font-vazirBold text-2xl dark:text-white">
                  {article.title}
                </h2>
                <div className="flex gap-3 text-[13px] max-sm:flex-col sm:items-center">
                  <div className="flex items-center gap-3">
                    <MagAuthor id={article.author_id} />
                    <div className="flex items-center gap-1">
                      <CiCalendarDate
                        size={17}
                        className="text-gray-600 dark:text-gray-300"
                      />
                      <p className="whitespace-nowrap pt-1.5 font-persianNums text-[11px] tracking-wider text-gray-400">
                        {convertToPersianDate(article.created_at)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock
                      size={13}
                      className="text-gray-600 dark:text-gray-300"
                    />
                    <p className="whitespace-nowrap font-persianNums text-[11px] tracking-wider text-gray-400">
                      زمان مطالعه:{' '}
                      <span className="font-persianNums">
                        {article.readingMinutes}
                      </span>{' '}
                      دقیقه
                    </p>
                  </div>
                </div>
                <div className="mt-5 grid h-10 grid-cols-4 gap-2 lg:hidden">
                  <MagSocials />
                </div>
                <p className="mt-5 text-justify leading-8 text-gray-600 dark:text-gray-200">
                  {article.description}
                </p>
              </div>
              <div className="border bg-white p-4 py-8  shadow-lg shadow-gray-300 dark:border-0 dark:bg-gray-800 dark:shadow-gray-950">
                <h3 className="container mb-5 font-vazirBold text-2xl dark:text-white">
                  <span className="font-persianNums text-2xl">۱</span> دیدگاه
                </h3>
                <form className="container flex flex-col gap-5">
                  <label htmlFor="" className="text-sm">
                    دیدگاه
                  </label>
                  <textarea
                    name=""
                    rows={8}
                    className="rounded-md border p-2 outline-0 dark:bg-white dark:text-gray-600"
                    id=""
                  ></textarea>
                  <div className="flex justify-between gap-5 max-sm:flex-col sm:items-end">
                    <label
                      htmlFor=""
                      className="flex flex-1 flex-col gap-2 text-sm"
                    >
                      نام کامل *
                      <input
                        type="text"
                        className="w-full rounded-md border p-2 outline-0 dark:bg-white dark:text-gray-600"
                      />
                    </label>
                    <label
                      htmlFor=""
                      className="flex flex-1 flex-col gap-2 text-sm"
                    >
                      ایمیل کامل *
                      <input
                        type="text"
                        className="w-full rounded-md border p-2 outline-0 dark:bg-white dark:text-gray-600"
                      />
                    </label>
                    <Button style="hover:bg-sky-500 bg-sky-400 text-white font-vazirMedium rounded-md">
                      ثبت دیدگاه
                    </Button>
                  </div>
                </form>

                <div className="container mt-16">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-5">
                      <img
                        alt=""
                        src="https://storage.jajiga.com/public/avatar/small/2204092311001456388.jpg"
                        className="h-14 w-14 rounded-full"
                      />
                      <div className="flex flex-col gap-2">
                        <div className="font-vazirBold text-base dark:text-white">
                          حمید
                        </div>
                        <span className="font-persianNums text-[12px] text-gray-400">
                          27 فروردین 1403
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-gray-700 dark:text-gray-400">
                    دشت دریاسر بسیار زیباست خصوصا اگر از سمت قله سیالان فرود
                    بیایید و بعد از عبور از خط برف و علف زار های البرز مرتفع به
                    جنگل و سپس به این دشت برسی تجربه ای ناب در حرکت در داخل مه و
                    جنگل .فوق العاده ست مسیری فوق العاده که ما به اتفاق دوستان
                    تجربه نمودیم{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="max-lg:hidden lg:col-span-2">
              <div className="grid h-60 w-20 gap-3 border bg-white p-5 shadow-md shadow-gray-300 dark:border-0 dark:bg-gray-800 dark:shadow-gray-950">
                <MagSocials />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArticlesFooter />
    </div>
  );
}

export default Article;
