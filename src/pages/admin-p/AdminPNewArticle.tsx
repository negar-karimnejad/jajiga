import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import Button from '../../components/ui/Button';
import { useArticles } from '../../hooks/useArticles';
import { Article } from '../../redux/store/articles';

const initialValues: Article = {
  id: Math.floor(Math.random() * 10000),
  created_at: new Date(),
  title: '',
  description: '',
  cover: '',
  author_id: null,
  category: {
    id: Math.floor(Math.random() * 100),
    color: 'red',
    title: 'جاجیگا',
    en_title: 'jajiga',
  },
  published_at: new Date(),
  readingMinutes: '',
  keyword: '',
};

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

function AdminPNewArticle() {
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
        title: 'مقاله با موفقیت ثبت شد',
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
      <h2 className="py-8 font-vazirBold text-2xl text-gray-600">
        افزودن میزبان جدید
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
                <div className="flex w-full items-center max-md:flex-col md:gap-5">
                  <Field className="hidden" id="id" name="id" />
                  <Field className="hidden" id="created_at" name="created_at" />
                  <Field className="hidden" id="category" name="category" />
                  <Field
                    className="hidden"
                    id="published_at"
                    name="published_at"
                  />
                  <div className="w-full">
                    <Field
                      className={`input input-bordered my-2 w-full dark:bg-white dark:text-gray-800 ${touched.title && errors.title ? 'error-input border-2 border-error' : ''}`}
                      type="text"
                      id="title"
                      name="title"
                      placeholder="عنوان مقاله"
                      disabled={isLoading}
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-[11px] text-error"
                    />
                  </div>
                  <div className="w-full">
                    <Field
                      className={`input input-bordered my-2 w-full dark:bg-white dark:text-gray-800 ${touched.author_id && errors.author_id ? 'error-input border-2 border-error' : ''}`}
                      type="number"
                      id="author_id"
                      name="author_id"
                      placeholder="نویسنده"
                      disabled={isLoading}
                    />
                    <ErrorMessage
                      name="author_id"
                      component="div"
                      className="text-[11px] text-error"
                    />
                  </div>
                </div>
                <div className="flex w-full items-center max-md:flex-col md:gap-5">
                  <div className="w-full">
                    <Field
                      className={`input input-bordered my-2 w-full dark:bg-white dark:text-gray-800 ${touched.readingMinutes && errors.readingMinutes ? 'error-input border-2 border-error' : ''}`}
                      type="number"
                      id="readingMinutes"
                      name="readingMinutes"
                      placeholder="مدت مطالعه"
                      disabled={isLoading}
                    />
                    <ErrorMessage
                      name="readingMinutes"
                      component="div"
                      className="text-[11px] text-error"
                    />
                  </div>
                  <div className="w-full">
                    <Field
                      className={`input input-bordered my-2 w-full dark:bg-white dark:text-gray-800 ${touched.keyword && errors.keyword ? 'error-input border-2 border-error' : ''}`}
                      type="text"
                      id="keyword"
                      name="keyword"
                      disabled={isLoading}
                      placeholder="تگ"
                    />
                    <ErrorMessage
                      name="keyword"
                      component="div"
                      className="text-[11px] text-error"
                    />
                  </div>
                </div>
                <div>
                  <Field
                    className={`input input-bordered my-2 w-full p-3 dark:bg-white dark:text-gray-800 ${touched.description && errors.description ? 'error-input border-2 border-error' : ''}`}
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
                    className={`my-2 w-full dark:bg-white dark:text-gray-800 ${touched.cover && errors.cover ? 'error-input border-2 border-error' : ''}`}
                    disabled={isLoading}
                  />
                  <ErrorMessage
                    name="cover"
                    component="div"
                    className="text-[11px] text-error"
                  />
                </div>
                <div className="z-20 mt-4 text-center">
                  <Button
                    style="w-full rounded-md my-5 bg-yellow-400 p-2 text-gray-800 transition-all hover:bg-yellow-500"
                    type="submit"
                    disabled={isLoading}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>{isLoading ? 'در حال ثبت...' : 'ثبت مقاله'}</span>
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

export default AdminPNewArticle;
