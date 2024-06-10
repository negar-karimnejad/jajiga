import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import Button from '../../components/ui/Button';
import { useArticles } from '../../hooks/useArticles';
import { Article } from '../../redux/store/articles';

const SigninSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'عنوان مقاله باید حداقل 5 کاراکتر باشد')
    .required('لطفا عنوان مقاله را وارد کنید'),
  author_id: Yup.number().required('شناسه نویسنده را وارد کنید'),
  readingMinutes: Yup.number().required('مدت مطالعه را وارد کنید'),
  keyword: Yup.string()
    .min(2, 'تگ باید حداقل 2 کاراکتر باشد')
    .required('تگ را وارد کنید'),
  description: Yup.string()
    .min(10, 'توضیحات مقاله باید حداقل 10 کاراکتر باشد')
    .required('توضیحات مقاله را وارد کنید'),
  cover: Yup.string().required('کاور مقاله را آپلود کنید'),
});

function AdminPEditArticle({ article }: { article: Article }) {
  const initialValues: Article = {
    id: Math.floor(Math.random() * 10000),
    created_at: new Date(),
    title: article.title,
    description: article.description,
    cover: article.cover,
    author_id: article.author_id,
    category: {
      id: Math.floor(Math.random() * 100),
      color: 'sky',
      title: 'سفر به کجا؟',
      en_title: 'wherewhy',
    },
    published_at: new Date(),
    readingMinutes: article.readingMinutes,
    keyword: article.keyword,
  };

  const [isLoading, setIsisLoading] = useState(false);
  const { addArticle } = useArticles();

  const submitSiginpHandler = async (
    values: Article,
    { resetForm }: FormikHelpers<Article>,
  ) => {
    try {
      setIsisLoading(true);
      await addArticle(values);
      Swal.fire({
        title: 'مقاله با موفقیت ویرایش شد',
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
      const typedError = error as Error;
      Swal.fire({
        text: typedError.message,
        toast: true,
        timer: 5000,
        position: 'top-right',
        showConfirmButton: false,
        icon: 'error',
      });
    } finally {
      setIsisLoading(false);
    }
  };

  return (
    <div>
      <h2 className="pt-5 font-vazirBold text-2xl text-gray-600">
        ویرایش مقاله
      </h2>
      <div className="container rounded-md bg-white">
        <div className="p-5">
          <Formik
            initialValues={initialValues}
            validationSchema={SigninSchema}
            onSubmit={submitSiginpHandler}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form>
                <div className=" w-full items-center max-md:flex-col md:gap-5">
                  <Field className="hidden" id="id" name="id" />
                  <Field className="hidden" id="created_at" name="created_at" />
                  <Field className="hidden" id="category" name="category" />
                  <Field
                    className="hidden"
                    id="published_at"
                    name="published_at"
                  />
                  <div className="relative h-20 w-full">
                    <Field
                      type="text"
                      id="title"
                      name="title"
                      placeholder=""
                      disabled={isLoading}
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.title && errors.title ? 'error-input border-b-2 border-red-500' : ''}`}
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="title"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      عنوان مقاله
                    </label>
                  </div>
                  <div className="relative h-20 w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.keyword && errors.keyword ? 'error-input border-b-2 border-red-500' : ''}`}
                      type="text"
                      id="keyword"
                      name="keyword"
                      disabled={isLoading}
                      placeholder=""
                    />
                    <ErrorMessage
                      name="keyword"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="title"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      تگ
                    </label>
                  </div>
                </div>
                <div className="flex w-full items-center gap-5">
                  <div className="relative h-20 w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.author_id && errors.author_id ? 'error-input border-b-2 border-error' : ''}`}
                      type="number"
                      id="author_id"
                      name="author_id"
                      placeholder=""
                      disabled={isLoading}
                    />
                    <ErrorMessage
                      name="author_id"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="author_id"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      شناسه نویسنده
                    </label>
                  </div>
                  <div className="relative h-20 w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.readingMinutes && errors.readingMinutes ? 'error-input border-b-2 border-red-500' : ''}`}
                      type="number"
                      id="readingMinutes"
                      name="readingMinutes"
                      placeholder=""
                      disabled={isLoading}
                    />
                    <ErrorMessage
                      name="readingMinutes"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="title"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      مدت مطالعه
                    </label>
                  </div>
                </div>
                <div>
                  <Field
                    className={`peer block max-h-44 min-h-32 w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.description && errors.description ? 'error-input border-b-2 border-red-500' : ''}`}
                    type="text"
                    id="description"
                    name="description"
                    disabled={isLoading}
                    placeholder="توضیحات مقاله"
                    as="textarea"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-[11px] text-error"
                  />
                </div>
                <div className="my-5 flex items-center justify-between">
                  <div>
                    <input
                      id="cover"
                      name="cover"
                      type="file"
                      onChange={(event) => {
                        if (
                          event.currentTarget.files &&
                          event.currentTarget.files[0]
                        ) {
                          setFieldValue('cover', event.currentTarget.files[0]);
                        }
                      }}
                      className={`dark:bg-white dark:text-gray-800 ${touched.cover && errors.cover ? 'error-input border-2 border-error' : ''}`}
                      disabled={isLoading}
                    />
                    <ErrorMessage
                      name="cover"
                      component="div"
                      className="text-[11px] text-error"
                    />
                  </div>
                  <Button
                    style="w-full rounded-md bg-yellow-400 p-2 text-gray-800 transition-all hover:bg-yellow-500"
                    type="submit"
                    disabled={isLoading}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>
                        {isLoading ? 'در حال ویرایش...' : 'ویرایش مقاله'}
                      </span>
                      {isLoading && (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-dotted border-gray-800"></div>
                      )}
                    </div>
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default AdminPEditArticle;
