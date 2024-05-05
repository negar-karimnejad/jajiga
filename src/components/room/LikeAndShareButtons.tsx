import { useState } from 'react';
import { BsShare } from 'react-icons/bs';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import ShareModal from './ShareModal';

function LikeAndShareButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModalHandler = () => {
    setIsOpen(false);
  };
  const isLike = true;

  return (
    <>
      <div className="flex gap-2">
        <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-white/90 dark:bg-gray-800/80">
          {isLike ? (
            <>
              <GoHeartFill className="my-2 text-red-600" size={18} />
              {/* <div className="absolute -bottom-9 left-1/2 w-fit -translate-x-1/2 transform whitespace-nowrap rounded-md bg-white/90 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:bg-white/85">
                    حذف از علاقه مندی ها
                  </div>
                  <div className="absolute -bottom-9 left-1/2 w-fit -translate-x-1/2 transform whitespace-nowrap rounded-md bg-white/90 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:bg-white/85">
                    به علاقه مندی ها اضافه شد
                  </div> */}
            </>
          ) : (
            <>
              <GoHeart size={18} className="my-2" />
              {/* <div className="absolute -bottom-9 left-1/2 w-fit -translate-x-1/2 transform whitespace-nowrap rounded-md bg-white/90 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:bg-white/85">
                    افزودن به علاقه مندی ها
                  </div>
                  <div className="absolute -bottom-9 left-1/2 w-fit -translate-x-1/2 transform whitespace-nowrap rounded-md bg-white/90 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:bg-white/85">
                    از علاقه مندی ها حذف شد
                  </div> */}
            </>
          )}
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="relative flex h-8 w-8 items-center justify-center rounded-md bg-white/90 dark:bg-gray-800/80"
        >
          <BsShare size={18} />
          {/* <div className="absolute -bottom-9 left-1/2 w-fit -translate-x-1/4 transform whitespace-nowrap rounded-md bg-white/90 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-3 after:h-3 after:w-3 after:rotate-45 after:bg-white/85">
                اشتراک گذاری
              </div> */}
        </div>
      </div>
      <ShareModal isOpen={isOpen} closeModalHandler={closeModalHandler} />
    </>
  );
}

export default LikeAndShareButtons;
