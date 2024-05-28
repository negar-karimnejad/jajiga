/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
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

function Signup({ closeModalHandler }: { closeModalHandler: () => void }) {
  const { signupFunc, signinFunc, isLoading } = useAuth();
  const [showpassword, setShowPassword] = useState(false);

  const submitSignupHandler = async (
    values: UserProps,
    { resetForm }: FormikHelpers<UserProps>,
  ) => {
    try {
      await signupFunc(values);
      await signinFunc({ email: values.email, password: values.password });
      Swal.fire({
        title: 'ثبت نام و ورود با موفقیت انجام شد',
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={submitSignupHandler}
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
            <div className="relative">
              <Field
                className={`input input-bordered my-2 w-full dark:bg-white dark:text-gray-800 ${touched.password && errors.password ? 'error-input border-2 border-error' : ''}`}
                type={showpassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="رمز کاربری"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute left-5 top-5 text-gray-700"
              >
                {showpassword ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
              </button>
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="text-[11px] text-error"
            />
          </div>
          <div className="z-20 mt-4 text-center">
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
  );
}

export default Signup;
