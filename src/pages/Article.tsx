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
import { useArticles } from '../hooks/useArticles';
import convertToPersianDate from '../utilities/convertToPersianDate';

function Article() {
  const { id } = useParams();
  const title = id ? id.replaceAll('-', ' ') : '';
  const { article } = useArticles(title);

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
          <div className="grid grid-cols-12 lg:gap-12">
            <div className="h-fit max-lg:hidden lg:col-span-4">
              <div className="mb-8 border bg-white shadow-md shadow-gray-300 dark:border-0 dark:shadow-gray-950">
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
                    slidesPerView={1}
                    spaceBetween={250}
                    modules={[Navigation]}
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
                  </Swiper>

                  <div className="article-swiper-button-next absolute -top-12 left-7 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-all hover:bg-gray-400 dark:bg-gray-900 dark:hover:bg-gray-950 max-xl:hidden">
                    <FaChevronRight
                      size={15}
                      className="text-gray-700 transition-all dark:text-gray-300"
                    />
                  </div>
                  <div className="article-swiper-button-prev absolute -top-12 left-0 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-all hover:bg-gray-400 dark:bg-gray-900 dark:hover:bg-gray-950 max-xl:hidden">
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
                >
                  سفر به کجا؟
                </Link>
                <h2 className="my-5 font-vazirBold text-2xl dark:text-white">
                  {article.title}
                </h2>
                <div className="flex items-center gap-3 text-[13px]">
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
              <div className="border bg-white p-4 py-8 shadow-lg shadow-gray-300 dark:border-0 dark:bg-gray-800 dark:shadow-gray-950">
                <h3 className="mb-5 font-vazirBold text-2xl dark:text-white">
                  <span className="font-persianNums text-2xl">۱</span> دیدگاه
                </h3>
                <form className="flex flex-col">
                  <label htmlFor="">دیدگاه</label>
                  <textarea name="" className='border rounded-md p-4' id=""></textarea>
                  <div className='max-sm:flex-col flex justify-between items-center'>
                    <label htmlFor="">نام کامل*</label>
                    <input type="text" className='border rounded-md p-4' />
                    <label htmlFor="">ایمیل کامل*</label>
                    <input type="text" className='border rounded-md p-4' />
                    <Button>ثبت دیدگاه</Button>
                  </div>
                </form>
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
