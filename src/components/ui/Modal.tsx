import { ReactNode, useEffect } from 'react';
import Button from './Button';

function Modal({
  children,
  isOpen,
  centered = true,
  editRoom,
  closeModalHandler,
}: {
  children: ReactNode;
  isOpen: boolean;
  centered?: boolean;
  editRoom?: boolean;
  closeModalHandler: () => void;
}) {
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
      className={`fixed right-0 top-0 z-50 flex h-screen w-full cursor-default flex-col items-center bg-black/60 transition-all duration-500 ${centered ? 'justify-end min-[600px]:justify-center' : 'py-20'} ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      onClick={closeModalHandler}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`max-md:fixed bottom-0 right-0 w-full rounded-lg bg-white px-5 shadow transition-all duration-500 dark:text-white ${editRoom ? 'h-[560px]' : 'min-h-fit'} ${centered ? 'dark:bg-gray-700 min-[600px]:w-[500px]' : 'dark:bg-gray-800 min-[600px]:w-[750px]'} ${isOpen ? 'translate-y-0' : 'translate-y-96'}`}
      >
        <Button
          style="absolute w-5 h-5 -top-10 min-[600px]:left-2 left-3 font-vazirBold text-4xl text-white"
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
