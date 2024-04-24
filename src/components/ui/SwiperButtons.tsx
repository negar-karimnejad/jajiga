import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function SwiperButtons() {
  return (
    <>
      <div className="swiper-button-next invisible absolute -right-20 bottom-0 top-0 z-40 m-auto flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 transition-all group-hover:visible group-hover:-right-16 max-xl:hidden">
        <FaChevronRight
          size={23}
          className="invisible text-gray-400 transition-all hover:text-red-600 group-hover:visible"
        />
      </div>
      <div className="swiper-button-prev invisible absolute -left-20 bottom-0 top-0 z-40 m-auto flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 transition-all group-hover:visible group-hover:-left-16 max-xl:hidden">
        <FaChevronLeft
          size={23}
          className="invisible text-gray-400 transition-all hover:text-red-600 group-hover:visible"
        />
      </div>
    </>
  );
}

export default SwiperButtons;
