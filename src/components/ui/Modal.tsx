import { ReactNode } from 'react';
import Button from './Button';

function Modal({
  children,
  isOpen,
  closeModalHandler,
}: {
  children: ReactNode;
  isOpen: boolean;
  closeModalHandler: () => void;
}) {
  return (
    <div
      className={`fixed right-0 top-0 flex h-screen w-full cursor-default flex-col items-center justify-center  bg-black/60 transition-all duration-500 max-sm:px-5 ${isOpen ? 'visible z-50 opacity-100' : 'invisible z-0 opacity-0'}`}
      onClick={closeModalHandler}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-lg bg-white px-5 py-10 shadow transition-all duration-500 dark:bg-gray-700 dark:text-white max-[600px]:w-[450px] max-[490px]:w-[300px] min-[600px]:w-[500px] ${isOpen ? 'translate-y-0' : 'translate-y-96'}`}
      >
        <Button
          style="absolute w-5 h-5 -top-10 left-2 font-vazirBold text-4xl text-white"
          onClick={closeModalHandler}
        >
          &times;
        </Button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
