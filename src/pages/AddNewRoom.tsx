import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import Button from '../components/ui/Button';
import useRooms from '../hooks/useRooms';
import { Room } from '../redux/store/room';

function AddNewRoom() {
  const { addRoom } = useRooms();

  const initialValues: Room = {
    id: Math.floor(Math.random() * 10000),
    title: '',
    description: '',
  };

  const NewRoomSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, 'عنوان باید حداقل 3 کاراکتر باشد')
      .required('لطفا عنوان اقامتگاه را وارد کنید'),
    description: Yup.string()
      .min(10, 'توضیحات باید حداقل 10 کاراکتر باشد')
      .required('لطفا توضیحات اقامتگاه را وارد کنید'),
  });

  const submitHandler = (values: Room, { resetForm }: FormikHelpers<Room>) => {
    try {
      addRoom(values);
      Swal.fire({
        title: 'اقامتگاه جدید با موفقیت افزوده شد',
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
        text: 'متاسفانه عملیات انجام نشد',
        toast: true,
        timer: 5000,
        position: 'top-right',
        showConfirmButton: false,
        icon: 'error',
      });
    }
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-700 dark:bg-gray-900">
      {/* Logo */}
      <div className="absolute left-5 top-5 h-36 w-36">
        <svg
          fill="currentColor"
          viewBox="0 0 1578.85999 500"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id="bg"
              x1="250"
              y1="502"
              x2="250"
              y2="2"
              gradientTransform="matrix(1 0 0 -1 0 502)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#cc0001"></stop>
              <stop offset="1" stopColor="#840000"></stop>
            </linearGradient>
          </defs>
          <path
            id="text"
            fill="#cc0001"
            d="M698.719 151.325v124.202a83.61836 83.61836 0 0 1-3.934 26.273 53.17238 53.17238 0 0 1-12.364 20.653q-8.43 8.71349-21.778 13.628-13.35 4.92-32.174 4.918H564.12v-33.158h62.382q11.23654 0 18.687-2.529a31.37366 31.37366 0 0 0 11.943-6.884 23.87039 23.87039 0 0 0 6.322-10.397 43.98961 43.98961 0 0 0 1.827-12.785V151.325zM747.423 341h-36.53l66.597-168.6q5.33551-13.488 15.033-18.967 9.69452-5.4795 24.869-5.479 14.8905 0 24.587 5.479 9.696 5.4795 14.753 18.967L920.801 341h-36.812l-57.604-152.583q-2.53052-6.46051-9.273-6.463-6.744 0-9.555 6.463zM1070.605 151.325v124.202a83.62016 83.62016 0 0 1-3.934 26.273 53.18417 53.18417 0 0 1-12.364 20.653q-8.43 8.71349-21.778 13.628-13.34848 4.92-32.174 4.918h-64.35v-33.158h62.383q11.235 0 18.686-2.529a31.36664 31.36664 0 0 0 11.943-6.884 23.87039 23.87039 0 0 0 6.322-10.397 43.95633 43.95633 0 0 0 1.826-12.785V151.325zM1137.879 151.325V341h-33.158V151.325zM1335.47705 151.325v33.158h-78.11694q-27.54309 0-40.043 14.472-12.507 14.475-12.505 47.349 0 32.601 12.364 47.068 12.36145 14.475 40.184 14.471h31.47095q14.04748 0 20.23205-7.446 6.17853-7.443 6.182-19.249 0-11.51848-5.76-17.843-5.76306-6.324-17.563-6.323h-42.15V228.04h45.522q25.56592 0 37.93506 14.471 12.36145 14.4765 12.364 39.2a80.71611 80.71611 0 0 1-3.231 23.183 48.781 48.781 0 0 1-10.396 18.827 49.82884 49.82884 0 0 1-18.266 12.645q-11.103 4.638-27.11694 4.637h-29.223q-41.592 0-63.646-23.463-22.06348-23.46149-22.059-71.234 0-48.051 22.059-71.515 22.0545-23.46 63.646-23.463h78.11682zM1405.483 341h-36.53l66.598-168.6q5.334-13.488 15.033-18.967 9.69452-5.4795 24.868-5.479 14.8905 0 24.587 5.479 9.696 5.4795 14.754 18.967L1578.86 341h-36.812l-57.604-152.583q-2.53052-6.46051-9.272-6.463-6.744 0-9.55505 6.463z"
          ></path>
          <path
            d="M500 400a99.99932 99.99932 0 0 1-100 100H100A99.99933 99.99933 0 0 1 0 400V100A99.99933 99.99933 0 0 1 100 0h300a99.99933 99.99933 0 0 1 100 100z"
            fill="url(#bg)"
          ></path>
          <path
            d="M500 400a99.99932 99.99932 0 0 1-100 100h-88L69.756 255.392 231 152l90 14 92.634-16.041L500 238z"
            opacity="0.2"
          ></path>
          <path
            d="M427.973 283.845a106.739 106.739 0 0 0-5.154-16.2 113.03028 113.03028 0 0 0-21.516-33.949c-1.787-1.996-22.475-22.174-26.191-25.784a.69841.69841 0 0 0-.564-.265.60181.60181 0 0 0-.535.237c-.003-.001-46.729 46.974-46.742 46.987l-.002.002a.69.69 0 0 0-.201.498.76444.76444 0 0 0 .293.617l18.802 18.519s5.41 5.249 7.602 8.084a44.9073 44.9073 0 1 1-80.361 27.571 45.81966 45.81966 0 0 1 10.171-28.735l130.49-130.08a.82321.82321 0 0 0 .296-.619.78123.78123 0 0 0-.725-.769l-93.81.112-72.823-72.706H247a.90822.90822 0 0 0-.557-.227.84071.84071 0 0 0-.533.205l-.004-.001S69.194 254.101 69.208 254.115a.6029.6029 0 0 0-.206.503.782.782 0 0 0 .756.772l.002.015c13.621-.002 92.283-.014 92.312-.021a.7.7 0 0 0 .546-.307s81.495-81.834 82.063-82.436a.79194.79194 0 0 1 1.111-.031c-.501-.47 24.219 24.15 24.219 24.15a.85215.85215 0 0 1 .014 1.184c.551-.59-32.954 33.572-34.971 35.743l-.465.459.014.02a112.84506 112.84506 0 1 0 196.398 75.863 114.351 114.351 0 0 0-3.028-26.184z"
            fill="#fff"
          ></path>
        </svg>
      </div>
      {/* Logo */}
      <div className="flex h-full w-full items-center justify-center p-5">
        <div className="rounded-lg bg-white px-5 py-10 shadow transition-all duration-500 dark:bg-gray-700 dark:text-white max-[600px]:w-[450px] max-[490px]:w-[300px] min-[600px]:w-[500px]">
          <Formik
            initialValues={initialValues}
            validationSchema={NewRoomSchema}
            onSubmit={submitHandler}
          >
            {({ errors, touched }) => (
              <Form>
                <p className="pt-5 text-sm">
                  لطفا مشخصات صحیح اقامتگاه را وارد کنید
                </p>
                <Field className="hidden" type="text" id="id" name="id" />
                <div>
                  <Field
                    className={`input input-bordered my-2 w-full dark:bg-white dark:text-gray-800 ${touched.title && errors.title ? 'error-input border-2 border-error' : ''}`}
                    type="text"
                    id="title"
                    name="title"
                    placeholder="عنوان"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-[11px] text-error"
                  />
                </div>
                <div>
                  <Field
                    className={`input input-bordered my-2 w-full dark:bg-white dark:text-gray-800 ${touched.description && errors.description ? 'error-input border-2 border-error' : ''}`}
                    type="text"
                    id="description"
                    name="description"
                    placeholder="توضیحات"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-[11px] text-error"
                  />
                </div>
                <div className="mt-4 text-center">
                  <Button
                    style="w-40 rounded-full bg-yellow-400 p-2 text-gray-800 transition-all hover:bg-yellow-500"
                    type="submit"
                  >
                    افزودن
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

export default AddNewRoom;
