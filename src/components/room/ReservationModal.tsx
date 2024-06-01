/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import Button from '../ui/Button';
import ReservationForm from './ReservationForm';

function ReservationModal({
  isOpen,
  closeModalHandler,
}: {
  isOpen: boolean;
  closeModalHandler: () => void;
}) {
  useEffect(() => {
    //   Disable body scroll when the modal is open
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
        className={`rounded-lg bg-white px-5 py-10 shadow transition-all duration-500 dark:bg-gray-800 dark:text-white max-md:w-full min-[600px]:w-[500px] ${isOpen ? 'translate-y-0' : 'translate-y-96'}`}
      >
        <Button
          style="absolute w-5 h-5 -top-10 left-2 font-vazirBold text-4xl text-white"
          onClick={closeModalHandler}
        >
          &times;
        </Button>
        <ReservationForm />
      </div>
    </div>
  );
}

export default ReservationModal;
