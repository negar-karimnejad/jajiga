import { ReactNode } from 'react';
import Button from './Button';

function Modal({
  children,
  isOpen,
  centered = true,
  closeModalHandler,
}: {
  children: ReactNode;
  isOpen: boolean;
  centered?: boolean;
  closeModalHandler: () => void;
}) {
  
  return (
    <div
      className={`fixed right-0 top-0 z-50 flex h-full w-full cursor-default flex-col items-center overflow-y-auto bg-black/60 transition-all duration-500 max-sm:px-5 ${centered ? 'justify-center' : 'py-20'} ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      onClick={closeModalHandler}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`min-h-fit rounded-lg bg-white px-5 py-10 shadow  transition-all duration-500  dark:text-white max-[600px]:w-[450px] max-[490px]:w-[300px]  ${centered ? 'dark:bg-gray-700 min-[600px]:w-[500px]' : 'dark:bg-gray-800 min-[600px]:w-[750px]'} ${isOpen ? 'translate-y-0' : 'translate-y-96'}`}
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
