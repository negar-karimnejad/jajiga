import { useEffect, useState } from 'react';
import LikeAndShareButtons from '../LikeAndShareButtons';

function RoomAccessibility() {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollYPosition(newScrollYPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToRef = (ref: HTMLElement | null) => {
    ref?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`duration-400 sticky top-[77px] max-lg:top-[62px] z-20 h-14 items-center justify-between rounded-b-lg bg-black/80 px-8 py-3 shadow-lg transition-all dark:bg-gray-950/90 max-md:hidden ${scrollYPosition > 400 ? 'flex' : 'hidden'}`}
    >
      <ul className="flex items-center gap-8 text-sm text-white">
        <li className="cursor-pointer" onClick={() => scrollToTop()}>
          تصاویر
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToRef(document.getElementById('featuresRef'))}
        >
          مشخصات
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToRef(document.getElementById('calenderRef'))}
        >
          نرخ
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToRef(document.getElementById('mapRef'))}
        >
          نقشه
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToRef(document.getElementById('commentsRef'))}
        >
          نظرات
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToRef(document.getElementById('hostRef'))}
        >
          میزبان
        </li>
      </ul>

      <LikeAndShareButtons />
    </div>
  );
}

export default RoomAccessibility;
