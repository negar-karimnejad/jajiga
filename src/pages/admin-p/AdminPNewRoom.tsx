import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import Button from '../../components/ui/Button';
import { Room } from '../../redux/store/room';
import useRooms from '../../hooks/useRooms';

const initialValues: Room = {
  id: Math.floor(Math.random() * 10000),
  title: '',
  description: '',
  code: 0,
  reserved: 0,
  images: [''],
  capacity: 0,
  max_capacity: 0,
  foundation_meterage: 0,
  area_meterage: 0,
  zone: '',
  residence_type: '',
  bedroom: 0,
  share_house: false,
  extra_person_charge: 0,
  features: [''],
  min_stay: 0,
  max_stay: 0,
  price: 0,
  location: {
    lat: 0,
    lng: 0,
  },
  discount: [
    {
      day: 0,
      off: 0,
    },
  ],
  housing_space: [
    {
      title: '',
      rooms: [''],
    },
  ],
  cancellation_policy: '',
  residence_policy: [''],
  entrance_hour: 0,
  leaving_hour: 0,
  category: [''],
  reviews: 0,
};

export const RoomSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'عنوان اقامتگاه باید حداقل 5 کاراکتر باشد')
    .required('عنوان اقامتگاه را وارد کنید'),
  description: Yup.string()
    .min(10, 'توضیحات اقامتگاه باید حداقل 10 کاراکتر باشد')
    .required('توضیحات اقامتگاه را وارد کنید'),
  zone: Yup.string().required('منطقه اقامتگاه را وارد کنید'),
  reserved: Yup.number().required('تعداد رزرو اقامتگاه را وارد کنید'),
  code: Yup.number().required('کد اقامتگاه را وارد کنید'),
  residence_type: Yup.string().required('نوع اقامتگاه را وارد کنید'),
  capacity: Yup.number().required('ظرفیت استاندارد اقامتگاه را وارد کنید'),
  max_capacity: Yup.number().required('حداکثر ظرفیت اقامتگاه را وارد کنید'),
  foundation_meterage: Yup.number().required(
    'متراژ زیربنا اقامتگاه را وارد کنید',
  ),
  area_meterage: Yup.number().required('متراژ محوطه اقامتگاه را وارد کنید'),
  bedroom: Yup.number().required('تعداد اتاق خواب اقامتگاه را وارد کنید'),
  price: Yup.number().required('نرخ هر شب اقامتگاه را وارد کنید'),
  max_stay: Yup.number().required('حداکثر اقامت را وارد کنید'),
});

function AdminPNewRoom() {
  const [isLoading, setIsisLoading] = useState(false);
  const { addRoom } = useRooms();

  const submitSiginpHandler = async (
    values: Room,
    { resetForm }: FormikHelpers<Room>,
  ) => {
    try {
      setIsisLoading(true);
      await addRoom(values);
      Swal.fire({
        title: 'اقامتگاه با موفقیت اضافه شد',
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
      <h2 className="py-8 font-vazirBold text-2xl dark:text-white text-gray-600">
        افزودن اقامتگاه جدید
      </h2>
      <div className="rounded-md bg-white dark:bg-gray-800">
        <div className="p-5">
          <Formik
            initialValues={initialValues}
            validationSchema={RoomSchema}
            onSubmit={submitSiginpHandler}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="flex w-full items-center max-md:flex-col md:gap-5">
                  <Field className="hidden" id="id" name="id" />
                  <Field className="hidden" id="created_at" name="created_at" />
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
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      عنوان اقامتگاه
                    </label>
                  </div>

                  <div className="relative h-20 w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.zone && errors.zone ? 'error-input border-b-2 border-red-500' : ''}`}
                      type="text"
                      id="zone"
                      name="zone"
                      disabled={isLoading}
                      placeholder=""
                    />
                    <ErrorMessage
                      name="zone"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="zone"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      منطقه
                    </label>
                  </div>
                </div>
                <div className="flex w-full items-center max-md:flex-col md:gap-5">
                  <div className="relative h-20 w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.reserved && errors.reserved ? 'error-input border-b-2 border-red-500' : ''}`}
                      type="number"
                      id="reserved"
                      name="reserved"
                      placeholder=""
                      disabled={isLoading}
                    />
                    <ErrorMessage
                      name="reserved"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="reserved"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      تعداد رزرو
                    </label>
                  </div>

                  <div className="relative h-20 w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.code && errors.code ? 'error-input border-b-2 border-error' : ''}`}
                      type="number"
                      id="code"
                      name="code"
                      placeholder=""
                      disabled={isLoading}
                    />
                    <ErrorMessage
                      name="code"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="code"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      کد اقامتگاه
                    </label>
                  </div>
                </div>
                <div className="flex w-full items-center max-md:flex-col md:gap-5">
                  <div className="relative h-20 w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.residence_type && errors.residence_type ? 'error-input border-b-2 border-red-500' : ''}`}
                      type="text"
                      id="residence_type"
                      name="residence_type"
                      placeholder=""
                      disabled={isLoading}
                    />
                    <ErrorMessage
                      name="residence_type"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="residence_type"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      نوع اقامتگاه
                    </label>
                  </div>

                  <div className="relative h-20 w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.capacity && errors.capacity ? 'error-input border-b-2 border-red-500' : ''}`}
                      type="number"
                      id="capacity"
                      name="capacity"
                      disabled={isLoading}
                      placeholder=""
                    />
                    <ErrorMessage
                      name="capacity"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="capacity"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      ظرفیت استاندارد
                    </label>
                  </div>
                </div>
                <div className="flex w-full items-center max-md:flex-col md:gap-5">
                  <div className="relative h-20 w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.max_capacity && errors.max_capacity ? 'error-input border-b-2 border-red-500' : ''}`}
                      type="number"
                      id="max_capacity"
                      name="max_capacity"
                      placeholder=""
                      disabled={isLoading}
                    />
                    <ErrorMessage
                      name="max_capacity"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="max_capacity"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      حداکثر ظرفیت
                    </label>
                  </div>

                  <div className="relative h-20 w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.foundation_meterage && errors.foundation_meterage ? 'error-input border-b-2 border-red-500' : ''}`}
                      type="number"
                      id="foundation_meterage"
                      name="foundation_meterage"
                      disabled={isLoading}
                      placeholder=""
                    />
                    <ErrorMessage
                      name="foundation_meterage"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="foundation_meterage"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      متراژ زیربنا
                    </label>
                  </div>
                </div>
                <div className="flex w-full items-center max-md:flex-col md:gap-5">
                  <div className="relative h-20 w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.area_meterage && errors.area_meterage ? 'error-input border-b-2 border-red-500' : ''}`}
                      type="number"
                      id="area_meterage"
                      name="area_meterage"
                      placeholder=""
                      disabled={isLoading}
                    />
                    <ErrorMessage
                      name="area_meterage"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="area_meterage"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      متراژ محوطه
                    </label>
                  </div>

                  <div className="relative h-20 w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.bedroom && errors.bedroom ? 'error-input border-b-2 border-red-500' : ''}`}
                      type="number"
                      id="bedroom"
                      name="bedroom"
                      disabled={isLoading}
                      placeholder=""
                    />
                    <ErrorMessage
                      name="bedroom"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="bedroom"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      تعداد اتاق خواب
                    </label>
                  </div>
                </div>
                <div className="flex w-full items-center max-md:flex-col md:gap-5">
                  <div className="relative h-20 w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.price && errors.price ? 'error-input border-b-2 border-red-500' : ''}`}
                      type="number"
                      id="price"
                      name="price"
                      placeholder=""
                      disabled={isLoading}
                    />
                    <ErrorMessage
                      name="price"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="price"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      متراژ محوطه
                    </label>
                  </div>

                  <div className="relative h-20 w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.max_stay && errors.max_stay ? 'error-input border-b-2 border-red-500' : ''}`}
                      type="number"
                      id="max_stay"
                      name="max_stay"
                      disabled={isLoading}
                      placeholder=""
                    />
                    <ErrorMessage
                      name="max_stay"
                      component="div"
                      className="text-[11px] text-error"
                    />
                    <label
                      htmlFor="max_stay"
                      className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                      حداکثر اقامت
                    </label>
                  </div>
                </div>
                <div className="relative w-full">
                  <Field
                    className={`peer block min-h-32 w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 ${touched.description && errors.description ? 'error-input border-b-2 border-red-500' : ''}`}
                    type="text"
                    id="description"
                    name="description"
                    disabled={isLoading}
                    placeholder=""
                    as="textarea"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-[11px] text-error"
                  />
                  <label
                    htmlFor="title"
                    className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                  >
                    توضیحات اقامتگاه
                  </label>
                </div>
                <div className="my-5 flex items-center justify-between">
                  {/* <div>
                    <input
                      id="images"
                      name="images"
                      type="file"
                      onChange={(event) => {
                        if (
                          event.currentTarget.files &&
                          event.currentTarget.files[0]
                        ) {
                          setFieldValue('images', event.currentTarget.files[0]);
                        }
                      }}
                      className={`peer block w-full appearance-none rounded-t-lg py-1  focus:outline-none focus:ring-0 dark:text-white ${touched.images && errors.images ? 'error-input border-b-2 border-red-500' : ''}`}
                      disabled={isLoading}
                    />
                    <ErrorMessage
                      name="images"
                      component="div"
                      className="text-[11px] text-error"
                    />
                  </div> */}
                  <Button
                    style="w-40 rounded-md bg-yellow-400 p-2 text-gray-800 transition-all hover:bg-yellow-500"
                    type="submit"
                    disabled={isLoading}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>
                        {isLoading ? 'در حال ثبت...' : 'ثبت اقامتگاه'}
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

export default AdminPNewRoom;
