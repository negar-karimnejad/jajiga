import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../../components/ui/Button';
import useRooms from '../../hooks/useRooms';
import { RoomSchema } from '../../pages/admin-p/AdminPNewRoom';
import { Room } from '../../redux/store/room';

function AdminPEditRoom({
  room,
  closeModal,
}: {
  room: Room;
  closeModal: () => void;
}) {
  const initialValues: Room = {
    id: room.id,
    title: room.title,
    description: room.description,
    area_meterage: room.area_meterage,
    bedroom: room.bedroom,
    capacity: room.capacity,
    code: room.code,
    category: room.category,
    entrance_hour: room.entrance_hour,
    reserved: room.reserved,
    images: [''],
    max_capacity: room.max_capacity,
    foundation_meterage: room.foundation_meterage,
    zone: room.zone,
    residence_type: room.residence_type,
    share_house: false,
    features: [],
    min_stay: 0,
    max_stay: 0,
    extra_person_charge: 0,
    location: {
      lat: 0,
      lng: 0,
    },
    discount: [],
    housing_space: [],
    cancellation_policy: '',
    residence_policy: [],
    leaving_hour: 0,
    price: room.price,
    reviews: 0,
  };

  const [isLoading, setIsisLoading] = useState(false);
  const { editRoom } = useRooms();

  const submitEditHandler = async (
    values: Room,
    { resetForm }: FormikHelpers<Room>,
  ) => {
    try {
      setIsisLoading(true);
      await editRoom(values);
      Swal.fire({
        title: 'اقامتگاه با موفقیت ویرایش شد',
        toast: false,
        position: 'center',
        showConfirmButton: true,
        icon: 'success',
        customClass: { icon: 'm-auto mt-4' },
        confirmButtonText: 'باشه',
      }).then((result) => {
        if (result.isConfirmed) {
          resetForm();
          closeModal();
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
    <div className="h-full overflow-y-auto">
      <h2 className="pt-5 font-vazirBold text-2xl dark:text-white text-gray-600">
        ویرایش اقامتگاه
      </h2>
      <div className="container rounded-md bg-white dark:bg-gray-700">
        <div className="py-3">
          <Formik
            initialValues={initialValues}
            validationSchema={RoomSchema}
            onSubmit={submitEditHandler}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="w-full items-center gap-5">
                  <Field className="hidden" id="id" name="id" />
                  <div className="relative h-[4.5rem] w-full">
                    <Field
                      type="text"
                      id="title"
                      name="title"
                      placeholder=""
                      disabled={isLoading}
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 ${touched.title && errors.title ? 'error-input border-b-2 border-red-500' : ''}`}
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
                  <div className="flex w-full items-center  gap-5">
                    <div className="relative h-[4.5rem] w-full">
                      <Field
                        className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 ${touched.zone && errors.zone ? 'error-input border-b-2 border-red-500' : ''}`}
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
                    <div className="relative h-[4.5rem] w-full">
                      <Field
                        className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 ${touched.residence_type && errors.residence_type ? 'error-input border-b-2 border-red-500' : ''}`}
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
                  </div>
                </div>
                <div className="flex w-full items-center  gap-5">
                  <div className="relative h-[4.5rem] w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 ${touched.price && errors.price ? 'error-input border-b-2 border-red-500' : ''}`}
                      type="number"
                      id="price"
                      name="price"
                      disabled={isLoading}
                      placeholder=""
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
                      نرخ هر شب
                    </label>
                  </div>
                  <div className="relative h-[4.5rem] w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 ${touched.code && errors.code ? 'error-input border-b-2 border-error' : ''}`}
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
                <div className="flex w-full items-center  gap-5">
                  <div className="relative h-[4.5rem] w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 ${touched.capacity && errors.capacity ? 'error-input border-b-2 border-red-500' : ''}`}
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
                  <div className="relative h-[4.5rem] w-full">
                    <Field
                      className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 ${touched.bedroom && errors.bedroom ? 'error-input border-b-2 border-red-500' : ''}`}
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
                <div className="relative w-full">
                  <Field
                    className={`peer block max-h-40 min-h-32 w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 ${touched.description && errors.description ? 'error-input border-b-2 border-red-500' : ''}`}
                    type="text"
                    id="description"
                    name="description"
                    disabled={isLoading}
                    placeholder="توضیحات اقامتگاه"
                    as="textarea"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-[11px] text-error"
                  />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <Button
                    style="w-full rounded-md bg-yellow-400 p-2 text-gray-800 transition-all hover:bg-yellow-500"
                    type="submit"
                    disabled={isLoading}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>
                        {isLoading ? 'در حال ویرایش...' : 'ویرایش اقامتگاه'}
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

export default AdminPEditRoom;
