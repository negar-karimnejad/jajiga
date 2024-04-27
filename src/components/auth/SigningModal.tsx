import { useAuthModal } from '../../hooks/useAuthModal';

function SigningModal() {
  const { isOpen, closeModalHandler } = useAuthModal();

  return (
    <div
      className={`fixed right-0 top-0 flex h-screen w-full cursor-default flex-col items-center justify-center bg-black/60 transition-all duration-500 max-sm:px-5 ${isOpen ? 'visible z-50 opacity-100' : 'invisible z-0 opacity-0'}`}
      onClick={closeModalHandler}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-lg bg-white px-5 py-10 shadow transition-all duration-500 dark:bg-gray-700 dark:text-white max-[490px]:w-[300px] md:w-[500px] ${isOpen ? 'translate-y-0' : 'translate-y-96'}`}
      >
        <button
          onClick={closeModalHandler}
          className="absolute -top-10 left-2 font-vazirBold text-4xl text-white"
        >
          &times;
        </button>
        <h2 className="font-vazirBold text-2xl">ثبت نام</h2>
        <form action="">
          <p className="pt-5 text-sm">لطفا مشخصات صحیح خود را وارد کنید</p>
          <input
            type="text"
            placeholder="نام"
            className="input input-bordered my-2 w-full dark:bg-white dark:text-gray-800"
          />
          <input
            type="text"
            placeholder="نام خانوادگی"
            className="input input-bordered my-2 w-full dark:bg-white dark:text-gray-800"
          />
          <input
            type="password"
            placeholder="رمز عبور"
            className="input input-bordered my-2 w-full dark:bg-white dark:text-gray-800"
          />
          <div className="mt-4 text-center">
            <button className="w-40 rounded-full bg-yellow-400 p-2 text-gray-800 transition-all hover:bg-yellow-500">
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigningModal;
