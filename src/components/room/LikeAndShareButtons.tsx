import { useEffect, useState } from 'react';
import { BsShare } from 'react-icons/bs';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { useWishes } from '../../context/WishesContext';
import ShareModal from './ShareModal';
import { useShareModal } from '../../hooks/useShareModal';

function LikeAndShareButtons({ id }: { id: number }) {
  const [wishTooltip, setWishTooltip] = useState('');

  const { toggleWish, wishes } = useWishes();
  const { openModal } = useShareModal();

  const hasWish = wishes.includes(id);

  useEffect(() => {
    if (wishTooltip) {
      const timer = setTimeout(() => setWishTooltip(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [wishTooltip]);

  const toggleHandler = (id: number) => {
    toggleWish(id);
    setWishTooltip(
      hasWish ? 'از علاقه مندی ها حذف شد' : 'به علاقه مندی ها اضافه شد',
    );
  };

  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={() => toggleHandler(id)}
          className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md  bg-white/90 hover:opacity-90 active:ring-2 active:ring-gray-100/50 dark:bg-gray-800/90 dark:active:ring-gray-600/50"
        >
          {hasWish ? (
            <div className="group">
              <GoHeartFill className="my-2 text-red-600" size={18} />
              <div
                className={`absolute -bottom-9 left-1/2 w-fit -translate-x-1/2 transform whitespace-nowrap rounded-md bg-white p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:bg-white ${wishTooltip ? '' : 'hidden'}`}
              >
                {wishTooltip}
              </div>
              <div
                className={`invisible absolute -bottom-9 left-1/2 w-fit -translate-x-1/2 transform whitespace-nowrap rounded-md bg-white/90 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:bg-white/85 group-hover:visible ${wishTooltip ? 'hidden' : ''}`}
              >
                حذف از علاقه مندی ها
              </div>
            </div>
          ) : (
            <div className="group">
              <GoHeart size={18} className="my-2 dark:text-gray-200" />
              <div
                className={`absolute -bottom-9 left-1/2 w-fit -translate-x-1/2 transform whitespace-nowrap rounded-md bg-white/90 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:bg-white/85 ${wishTooltip ? '' : 'hidden'}`}
              >
                {wishTooltip}
              </div>
              <div
                className={`invisible absolute -bottom-9 left-1/2 w-fit -translate-x-1/2 transform whitespace-nowrap rounded-md bg-white/90 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:bg-white/85 group-hover:visible ${wishTooltip ? 'hidden' : ''}`}
              >
                افزودن به علاقه مندی ها
              </div>
            </div>
          )}
        </button>
        <div
          onClick={openModal}
          className="group relative flex h-8 w-8 items-center justify-center rounded-md bg-white/90 hover:opacity-95 active:ring-2 active:ring-gray-100/50 dark:bg-gray-800/90 dark:text-white dark:active:ring-gray-600/50"
        >
          <BsShare size={18} />
          <div className="invisible absolute -bottom-9 left-1/2 w-fit -translate-x-1/4 transform whitespace-nowrap rounded-md bg-white/90 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:left-3 after:h-3 after:w-3 after:rotate-45 after:bg-white group-hover:visible">
            اشتراک گذاری
          </div>
        </div>
      </div>

      <ShareModal id={id} />
    </>
  );
}

export default LikeAndShareButtons;
