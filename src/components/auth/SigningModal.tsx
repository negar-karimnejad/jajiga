/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useAuthModal } from '../../hooks/useAuthModal';
import Button from '../ui/Button';
import Signin from './Signin';
import Signup from './Signup';

function SigningModal() {
  const [isRegistered, setIsRegistered] = useState(true);
  const { isOpen, closeModalHandler } = useAuthModal();

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
        className={`max-md:fixed bottom-0 right-0 rounded-lg bg-white px-5 py-10 shadow transition-all duration-500 dark:bg-gray-800 dark:text-white max-md:w-full min-[600px]:w-[500px] ${isOpen ? 'translate-y-0' : 'translate-y-96'}`}
      >
        <Button
          style="absolute w-5 h-5 -top-10 left-2 font-vazirBold text-4xl text-white"
          onClick={closeModalHandler}
        >
          &times;
        </Button>
        <div className="flex justify-between text-center">
          <h2 className="font-vazirBold text-2xl">
            {isRegistered ? 'ورود' : 'ثبت نام'}
          </h2>
          <button
            className="text-[12px] hover:underline text-blue-500 dark:text-yellow-300"
            onClick={() => setIsRegistered((prev) => !prev)}
          >
            {isRegistered ? 'هنوز ثبت نام نکرده ام' : 'از قبل حساب کاربری دارم'}
          </button>
        </div>
        {isRegistered ? (
          <Signin closeModalHandler={closeModalHandler} />
        ) : (
          <Signup closeModalHandler={closeModalHandler} />
        )}
      </div>
    </div>
  );
}

export default SigningModal;
