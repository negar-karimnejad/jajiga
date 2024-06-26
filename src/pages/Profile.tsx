/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import { GrEdit } from 'react-icons/gr';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import Application from '../components/home/Application';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import { useAuth } from '../hooks/useAuth';

const StyledDiv = ({
  title,
  value,
}: {
  title: string;
  value: string | undefined;
}) => {
  return (
    <div className="w-full border-b py-5 dark:border-b-gray-600">
      <h3 className="text-md font-vazirBold dark:text-white">{title}:</h3>
      <p className="mt-5 h-5 text-gray-500 dark:text-gray-300">{value}</p>
    </div>
  );
};

export const UpdateSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(3, 'نام باید حداقل 3 کاراکتر باشد')
    .required('لطفا نام و نام خانوادگی خود را وارد کنید'),
});

function Profile() {
  const { user, isLoading, updateFunc } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const closeEditingForm = () => setIsEditing(false);
  interface InitialValuesProps {
    fullname: string;
    email: string;
  }
  const initialValues: InitialValuesProps = {
    fullname: user?.user_metadata?.fullname || '',
    email: user?.email || '',
  };

  const submitUpdateHandler = async (
    values: InitialValuesProps,
    { resetForm }: FormikHelpers<InitialValuesProps>,
  ) => {
    try {
      await updateFunc({ fullname: values.fullname });
      Swal.fire({
        title: 'ویرایش با موفقیت انجام شد',
        toast: false,
        position: 'center',
        showConfirmButton: true,
        icon: 'success',
        customClass: { icon: 'm-auto mt-4' },
        confirmButtonText: 'باشه',
      }).then((result) => {
        if (result.isConfirmed) {
          resetForm();
          closeEditingForm();
        }
      });
    } catch (error: any) {
      console.error('Update failed:', error); // Add this log
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

  if (!user) return null;

  return (
    <>
      <Application style="h-12" />
      <div className="mx-auto w-full border-b bg-white py-2 dark:border-0 dark:bg-gray-800 lg:gap-x-10">
        <div className="container flex items-center justify-between gap-x-3">
          <WhiteBgNavbar />
        </div>
      </div>
      <div className="relative">
        <div className="h-24 w-full bg-yellow-400">
          <div className="h-full w-full bg-[url(/images/patterns/pattern.png)]">
            <Breadcrumb pageLink="حساب کاربری" />
          </div>
        </div>
        <div className="-mt-5 h-screen rounded-t-2xl bg-white dark:bg-gray-800">
          <div className="container gap-5 py-10">
            {!isEditing && (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="float-end mb-10 flex items-center gap-1 text-blue-600"
              >
                <GrEdit size={20} />
                ویرایش اطلاعات حساب کاربری
              </button>
            )}
            {isEditing ? (
              <Formik
                initialValues={initialValues}
                validationSchema={UpdateSchema}
                onSubmit={submitUpdateHandler}
              >
                {({ errors, touched }) => (
                  <Form>
                    <p className="pb-10 text-sm text-gray-400">
                      لطفا مشخصات صحیح خود را وارد کنید
                    </p>
                    <input
                      type="text"
                      name="id"
                      hidden
                      defaultValue={user.id}
                    />
                    <div className="grid w-full grid-cols-1 gap-x-20 md:grid-cols-2">
                      <div>
                        <label className="block w-full text-sm text-gray-700 dark:text-white">
                          نام و نام خانوادگی
                        </label>

                        <Field
                          className={`input input-bordered my-2 w-full dark:bg-white dark:text-gray-800 ${
                            touched.fullname && errors.fullname
                              ? 'error-input border-2 border-error'
                              : ''
                          }`}
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
                      <div className="">
                        <label className="block w-full text-sm text-gray-700 dark:text-white">
                          ایمیل{' '}
                          <span className="text-sm text-gray-500">
                            (غیر قابل تغییر)
                          </span>
                        </label>
                        <Field
                          className={`input input-bordered my-2 w-full dark:bg-white dark:text-gray-800 ${
                            touched.email && errors.email
                              ? 'error-input border-2 border-error'
                              : ''
                          }`}
                          type="email"
                          id="email"
                          name="email"
                          placeholder="ایمیل"
                          readOnly
                          disabled={isLoading}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-[11px] text-error"
                        />
                      </div>
                    </div>
                    <div className="z-20 mt-8 flex gap-2 text-center">
                      <Button
                        style="min-w-32 rounded-md bg-gray-200 p-3 text-gray-800 transition-all hover:bg-gray-300"
                        type="button"
                        disabled={isLoading}
                        onClick={closeEditingForm}
                      >
                        <div className="flex items-center justify-center gap-2">
                          لغو ویرایش
                        </div>
                      </Button>
                      <Button
                        style="min-w-32 rounded-md bg-yellow-400 p-3 text-gray-800 transition-all hover:bg-yellow-500"
                        type="submit"
                        disabled={isLoading}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <span>
                            {isLoading ? 'در حال ویرایش...' : 'ویرایش'}
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
            ) : (
              <div className="container grid w-full grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
                <StyledDiv
                  title={'نام و نام خانوادگی'}
                  value={user?.user_metadata?.fullname}
                />
                <StyledDiv title={'آدرس ایمیل'} value={user?.email} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
