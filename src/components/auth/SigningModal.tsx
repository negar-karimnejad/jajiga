/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import { useAuthModal } from '../../hooks/useAuthModal';
import { UserProps } from '../../redux/store/auth';
import Button from '../ui/Button';

const initialValues: UserProps = {
  fullname: '',
  email: '',
  password: '',
};

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(3, 'نام باید حداقل 3 کاراکتر باشد')
    .required('لطفا نام و نام خانوادگی خود را وارد کنید'),
  email: Yup.string()
    .email('ایمیل نامعتبر است')
    .required('لطفا ایمیل خود را وارد کنید'),
  password: Yup.string()
    .min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد')
    .required('لطفا رمز عبور دلخواه خود را وارد کنید'),
});

function SigningModal() {
  const { signupFunc, isLoading } = useAuth();
  const { isOpen, closeModalHandler } = useAuthModal();

  const submitHandler = async (
    values: UserProps,
    { resetForm }: FormikHelpers<UserProps>,
  ) => {
    try {
      await signupFunc(values);
      Swal.fire({
        title: 'ثبت نام با موفقیت انجام شد',
        toast: false,
        position: 'center',
        showConfirmButton: true,
        icon: 'success',
        customClass: { icon: 'm-auto mt-4' },
        confirmButtonText: 'باشه',
      }).then((result) => {
        if (result.isConfirmed) {
          closeModalHandler();
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

  useEffect(() => {
    // Disable body scroll when the modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed right-0 top-0 z-50 flex h-screen w-full cursor-default flex-col items-center justify-center bg-black/60 transition-all duration-500 max-md:justify-end ${isOpen ? 'visible z-50 opacity-100' : 'invisible z-0 opacity-0'}`}
      onClick={closeModalHandler}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-lg bg-white px-5 py-10 shadow transition-all duration-500 dark:bg-gray-700 dark:text-white max-md:w-full min-[600px]:w-[500px] ${isOpen ? 'translate-y-0' : 'translate-y-96'}`}
      >
        <Button
          style="absolute w-5 h-5 -top-10 left-2 font-vazirBold text-4xl text-white"
          onClick={closeModalHandler}
        >
          &times;
        </Button>
        <h2 className="font-vazirBold text-2xl">ثبت نام</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={submitHandler}
        >
          {({ errors, touched }) => (
            <Form>
              <p className="pt-5 text-sm">لطفا مشخصات صحیح خود را وارد کنید</p>
              <div>
                <Field
                  className={`input input-bordered my-2 w-full dark:bg-white dark:text-gray-800 ${touched.fullname && errors.fullname ? 'error-input border-2 border-error' : ''}`}
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="نام و نام خانوادگی"
                  disabled={isLoading}
                />
                <ErrorMessage
                  name="fullname"
                  component="div"
                  className="text-[11px] text-error"
                />
              </div>
              <div>
                <Field
                  className={`input input-bordered my-2 w-full dark:bg-white dark:text-gray-800 ${touched.email && errors.email ? 'error-input border-2 border-error' : ''}`}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ایمیل"
                  disabled={isLoading}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-[11px] text-error"
                />
              </div>
              <div>
                <Field
                  className={`input input-bordered my-2 w-full dark:bg-white dark:text-gray-800 ${touched.password && errors.password ? 'error-input border-2 border-error' : ''}`}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="رمز کاربری"
                  disabled={isLoading}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-[11px] text-error"
                />
              </div>
              <div className="mt-4 text-center">
                <Button
                  style="w-40 rounded-full bg-yellow-400 p-2 text-gray-800 transition-all hover:bg-yellow-500"
                  type="submit"
                  disabled={isLoading}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>{isLoading ? 'در حال ثبت نام...' : 'ثبت نام'}</span>
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
  );
}

export default SigningModal;
