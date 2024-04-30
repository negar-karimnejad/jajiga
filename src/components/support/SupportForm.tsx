import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

interface SendMessageValues {
  supportEmail: string;
  message: string;
}
const initialValues: SendMessageValues = {
  supportEmail: '',
  message: '',
};

const SignupSchema = Yup.object().shape({
  supportEmail: Yup.string()
    .email('ایمیل نامعتبر است')
    .required('لطفا ایمیل خود را وارد کنید'),
  message: Yup.string()
    .min(5, 'متن پیام باید حداقل 5 کاراکتر باشد')
    .required('لطفا پیام خود را وارد کنید'),
});

function SupportForm() {
  const submitHandler = (
    values: SendMessageValues,
    { resetForm }: FormikHelpers<SendMessageValues>,
  ) => {
    try {
      Swal.fire({
        text: 'پیام شما با موفقیت ارسال شد',
        toast: true,
        showConfirmButton: false,
        position: 'top-right',
        timer: 3000,
        icon: 'success',
      }).then(() => {
        console.log(values);
        resetForm();
      });
    } catch (error) {
      Swal.fire({
        text: 'متاسفانه پیام ارسال نشد',
        toast: true,
        timer: 3000,
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
      onSubmit={submitHandler}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col gap-3 rounded-md border p-10 shadow-md">
          <label
            className="text-center font-vazirMedium dark:text-gray-400"
            htmlFor=""
          >
            سوال خود را برای ما ارسال کنید
          </label>
          <Field
            className={`rounded-lg border p-2 shadow-md outline-0 dark:bg-white ${touched.supportEmail && errors.supportEmail ? 'error-input border-2 border-error' : ''}`}
            type="email"
            placeholder="ایمیل"
            id="supportEmail"
            name="supportEmail"
          />
          <ErrorMessage
            name="supportEmail"
            component="div"
            className="text-[11px] text-error"
          />
          <Field
            as="textarea"
            placeholder="پیام خود را بنویسید..."
            className={`rounded-lg border p-2 shadow-md outline-0 dark:bg-white ${touched.message && errors.message ? 'error-input border-2 border-error' : ''}`}
            type="message"
            id="message"
            name="message"
            rows="4"
          />
          <ErrorMessage
            name="message"
            component="div"
            className="text-[11px] text-error"
          />
          <button
            type="submit"
            className="rounded-md bg-yellow-400 p-2 font-vazirMedium text-base text-gray-800 shadow-md transition-all hover:bg-yellow-500"
          >
            ارسال
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default SupportForm;
