import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import Button from '../../components/ui/Button';
import { Article } from '../../redux/store/articles';

const initialValues: Article = {
  id: Math.floor(Math.random() * 100000),
  created_at: new Date(),
  title: '',
  description: '',
  cover: '',
  author_id: null,
  category: {
    id: 1,
    color: '',
    title: '',
    en_title: '',
  },
  published_at: new Date(),
  readingMinutes: '',
  keyword: '',
};

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email('ایمیل نامعتبر است')
    .required('لطفا ایمیل خود را وارد کنید'),
});
function AdminPNewArticle() {
  const isLoading = false;

  const submitSiginpHandler = async (
    values: Article,
    { resetForm }: FormikHelpers<Article>,
  ) => {
    console.log(values);

    try {
      //   await signinFunc(values);
      Swal.fire({
        title: 'ورود با موفقیت انجام شد',
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
    } catch (error: any) {
      Swal.fire({
        text: error.message,
        toast: true,
        timer: 5000,
        position: 'top-right',
        showConfirmButton: false,
        icon: 'error',
      });
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
            {({ errors, touched }) => (
              <Form>
                <div className="flex w-full items-center gap-5">
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
                <div className="flex w-full items-center gap-5">
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

                <div className="form-body">
                  <div className="row">
                    <div className="col-md-4">
                      <h4 className="box-title mt-20">اپلود تصویر</h4>
                      <div className="product-img text-start">
                        <img src="images/product/product-9.png" alt="" />
                        <div className="input-group my-3">
                          <label
                            className="input-group-text btn-primary"
                            htmlFor="inputGroupFile01"
                          >
                            اپلود تصاویر دیگر
                          </label>
                          <input
                            type="file"
                            className="form-control border"
                            id="inputGroupFile01"
                          />
                        </div>
                        <button className="btn btn-success">ویرایش</button>
                        <button className="btn-danger btn">حذف</button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="box-title mt-40">توضیحات کلی</h4>
                      <div className="table-responsive">
                        <table className="no-border td-padding table">
                          <tbody>
                            <tr>
                              <td>
                                <input
                                  type="text"
                                  className="form-control border"
                                  placeholder="برند"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control border"
                                  placeholder="فروشنده"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="text"
                                  className="form-control border"
                                  placeholder="نحوه ارسال"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control border"
                                  placeholder="بیشتر"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="text"
                                  className="form-control border"
                                  placeholder="رنگ"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control border"
                                  placeholder="گیف پک"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="z-20 mt-4 text-center">
                  {/* <div className="form-actions mt-10">
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-check"></i> ثبت
              </button>
              <button type="button" className="btn-danger btn">
                لغو
              </button>
            </div> */}
                  <Button
                    style="w-40 rounded-full bg-yellow-400 p-2 text-gray-800 transition-all hover:bg-yellow-500"
                    type="submit"
                    //   disabled={isLoading}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>{isLoading ? 'در حال ورود...' : 'ورود'}</span>
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
