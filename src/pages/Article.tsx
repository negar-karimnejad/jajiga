import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { CiCalendarDate } from 'react-icons/ci';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Yup from 'yup';
import ArticleSocials from '../components/article/ArticleSocials';
import ArticleMenuList from '../components/articles/ArticleMenuList';
import ArticlesFooter from '../components/articles/ArticlesFooter';
import ArticlesHeader from '../components/articles/ArticlesHeader';
import ArticleAuthor from '../components/articles/ArticleAuthor';
import Button from '../components/ui/Button';
import { useArticle } from '../hooks/useArticle';
import { useArticles } from '../hooks/useArticles';
import convertToPersianDate from '../utilities/convertToPersianDate';
import Swal from 'sweetalert2';

interface articleCommentsValue {
  fullname: string;
  email: string;
  content: string;
}

const initialValues: articleCommentsValue = {
  fullname: '',
  email: '',
  content: '',
};

const articleCommentsSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(3, 'نام باید حداقل 3 کاراکتر باشد')
    .required('لطفا نام و نام خانوادگی خود را وارد کنید'),
  email: Yup.string()
    .email('ایمیل نامعتبر است')
    .required('لطفا ایمیل خود را وارد کنید'),
  content: Yup.string()
    .min(10, 'دیدگاه باید حداقل 10 کاراکتر باشد')
    .required('لطفا دیدگاه خود را وارد کنید'),
});

function Article() {
  const { id } = useParams();
  const title = id ? id.replaceAll('-', ' ') : '';
  const { article, addComment } = useArticle(title);
  const { articles } = useArticles();

  const submitHandler = (
    values: articleCommentsValue,
    { resetForm }: FormikHelpers<articleCommentsValue>,
  ) => {
    try {
      addComment(values);
      Swal.fire({
        text: 'دیدگاه شما منتظر بررسی است. دیدگاه شما بعد از تأیید قابل نمایش خواهد شد.',
        toast: false,
        position: 'center',
        showConfirmButton: true,
        icon: 'success',
        customClass: { icon: 'm-auto mt-4' },
        confirmButtonText: 'باشه',
      }).then((result) => {
        if (result.isConfirmed) {
          resetForm();
        }
      });
    } catch (error) {
      Swal.fire({
        text: 'متاسفانه دیدگاه ثبت نشد',
        toast: true,
        timer: 5000,
        position: 'top-right',
        showConfirmButton: false,
        icon: 'error',
      });
    }
  };

  if (!article) return;

  return (
    <div className="bg-gray-200 dark:bg-gray-900">
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
                    className="mb-5"
                    navigation={{
                      nextEl: '.article-swiper-button-next',
                      prevEl: '.article-swiper-button-prev',
                    }}
                    loop={true}
                    allowTouchMove={false}
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
                    {articles.slice(0, 5).map((article) => (
                      <SwiperSlide
                        key={article.id}
                        className="flex flex-col gap-5"
                      >
                        <Link
                          to={`/article/${article.title.replaceAll(' ', '-')}`}
                          className="group flex"
                        >
                          <div className="h-16 w-24 overflow-hidden transition-all group-hover:brightness-75">
                            <img
                              className="h-full w-24 object-cover"
                              loading="lazy"
                              src={article.cover}
                              alt=""
                            />
                          </div>
                          <div className="mr-3 flex flex-1 items-center">
                            <p className="flex w-full flex-col font-vazirMedium text-sm leading-6 text-gray-600 transition-all group-hover:text-sky-500 dark:text-gray-200">
                              {article.title}
                            </p>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    navigation={{
                      nextEl: '.article-swiper-button-next',
                      prevEl: '.article-swiper-button-prev',
                    }}
                    loop={true}
                    allowTouchMove={false}
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
                    {articles.slice(5, 10).map((article) => (
                      <SwiperSlide
                        key={article.id}
                        className="flex flex-col gap-5"
                      >
                        <Link
                          to={`/article/${article.title.replaceAll(' ', '-')}`}
                          className="group flex"
                        >
                          <div className="h-16 w-24 overflow-hidden transition-all group-hover:brightness-75">
                            <img
                              className="h-full w-24 object-cover"
                              loading="lazy"
                              src={article.cover}
                              alt=""
                            />
                          </div>
                          <div className="mr-3 flex flex-1 items-center">
                            <p className="flex w-full flex-col font-vazirMedium text-sm leading-6 text-gray-600 transition-all group-hover:text-sky-500 dark:text-gray-200">
                              {article.title}
                            </p>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
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
                  to="/article/category/knowing"
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
                    <ArticleAuthor id={article.author_id} />
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
                  <ArticleSocials />
                </div>
                <p className="mt-5 text-justify text-base leading-8 text-gray-600 dark:text-gray-200">
                  {article.description}
                </p>
              </div>
              <div className="border bg-white p-4 py-8  shadow-lg shadow-gray-300 dark:border-0 dark:bg-gray-800 dark:shadow-gray-950">
                <h3 className="container mb-5 font-vazirBold text-2xl dark:text-white">
                  <span className="font-persianNums text-2xl">۱</span> دیدگاه
                </h3>

                <Formik
                  initialValues={initialValues}
                  onSubmit={submitHandler}
                  validationSchema={articleCommentsSchema}
                >
                  {({ errors, touched }) => (
                    <Form className="container flex flex-col gap-5">
                      <div className="flex flex-1 flex-col gap-2 text-sm">
                        <label htmlFor="" className="text-sm">
                          دیدگاه
                        </label>
                        <Field
                          name="content"
                          className={`rounded-md border p-2 outline-0 dark:bg-white dark:text-gray-600 ${touched.content && errors.content ? 'error-input border-2 border-error' : ''}`}
                          id="content"
                          as="textarea"
                        />
                        <ErrorMessage
                          name="content"
                          component="div"
                          className="text-[11px] text-error"
                        />
                      </div>
                      <div className="flex justify-between gap-5 max-sm:flex-col sm:items-center">
                        <div className="flex h-24 flex-1 flex-col gap-2 text-sm">
                          <label htmlFor="">نام کامل * </label>
                          <Field
                            id="fullname"
                            name="fullname"
                            type="text"
                            className="w-full rounded-md border p-2.5 outline-0 dark:bg-white dark:text-gray-600"
                          />

                          <ErrorMessage
                            name="fullname"
                            component="div"
                            className="text-[11px] text-error"
                          />
                        </div>
                        <div className="flex h-24 flex-1 flex-col gap-2 text-sm">
                          <label htmlFor="">ایمیل کامل *</label>
                          <Field
                            id="email"
                            name="email"
                            type="email"
                            className="w-full rounded-md border p-2.5 outline-0 dark:bg-white dark:text-gray-600"
                          />

                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-[11px] text-error"
                          />
                        </div>
                        <Button
                          type="submit"
                          style="hover:bg-sky-500 bg-sky-400 text-white font-vazirMedium rounded-md"
                        >
                          ثبت دیدگاه
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>

                {article.comments?.length > 0 &&
                  article.comments.map((comment) => (
                    <div key={comment.id} className="container py-6">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-5">
                          <svg
                            width="60px"
                            height="60px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6ZM17.8946 17.4473L17.0002 17C17.8946 17.4473 17.8939 17.4487 17.8939 17.4487L17.8932 17.4502L17.8916 17.4532L17.8882 17.46L17.88 17.4756C17.8739 17.4871 17.8666 17.5004 17.858 17.5155C17.8409 17.5458 17.8186 17.5832 17.7906 17.6267C17.7346 17.7138 17.6558 17.8254 17.5497 17.9527C17.3369 18.208 17.0163 18.5245 16.5549 18.8321C15.6228 19.4534 14.1751 20 12.0001 20C8.31494 20 6.76549 18.4304 6.26653 17.7115C5.96463 17.2765 5.99806 16.7683 6.18066 16.4031C6.91705 14.9303 8.42234 14 10.069 14H13.7642C15.5134 14 17.1124 14.9883 17.8947 16.5528C18.0354 16.8343 18.0354 17.1657 17.8946 17.4473Z"
                              fill="#f1cd00"
                            />
                          </svg>
                          <div className="flex flex-col gap-1">
                            <div className="font-vazirBold text-base dark:text-white">
                              {comment.fullname}
                            </div>
                            <span className="font-persianNums text-[12px] text-gray-400">
                              {convertToPersianDate(comment.createdAt)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mr-20 mt-2 text-base leading-6 text-gray-500 dark:text-gray-300 max-sm:text-justify">
                        {comment.content}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="max-lg:hidden lg:col-span-2">
              <div className="grid h-60 w-20 gap-3 border bg-white p-5 shadow-md shadow-gray-300 dark:border-0 dark:bg-gray-800 dark:shadow-gray-950">
                <ArticleSocials />
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
