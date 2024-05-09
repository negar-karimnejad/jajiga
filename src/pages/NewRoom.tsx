import { ErrorMessage, Field, Formik, FormikHelpers } from 'formik';
import { Form } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import Button from '../components/ui/Button';
import { Room } from '../redux/store/room';

const initialValues: Room = {
  id: Math.floor(Math.random() * 10000),
  title: '',
  description: '',
  code: 0,
  reserved: 0,
  images: [],
  capacity: 0,
  max_capacity: 0,
  foundation_meterage: 0,
  area_meterage: 0,
  zone: '',
  residence_type: '',
  bedroom: 0,
  share_house: false,
  features: [],
  min_stay: 0,
  max_stay: 0,
  extra_person_charge: 0,
  discount: [],
  housing_space: [],
  cancellation_policy: '',
  residence_policy: [],
  entrance_hour: 0,
  leaving_hour: 0,
  host_id: 0,
  price: 0,
  category: [],
  rating: {
    total: 0,
    truth: 0,
    attitude: 0,
    clean: 0,
    location: 0,
    Delivery: 0,
    quality: 0,
  },
  reviews: 0,
};

function NewRoom() {
  const NewRoomSchema = Yup.object().shape({
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

  const submitHandler = (values: Room, { resetForm }: FormikHelpers<Room>) => {
    try {
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
        text: 'متاسفانه ثبت نام انجام نشد',
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
      validationSchema={NewRoomSchema}
      onSubmit={submitHandler}
    >
      {({ errors, touched }) => (
        <Form>
          <p className="pt-5 text-sm">لطفا مشخصات صحیح اقامتگاه را وارد کنید</p>
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
              placeholder="ایمیل"
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
              ثبت نام
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default NewRoom;
