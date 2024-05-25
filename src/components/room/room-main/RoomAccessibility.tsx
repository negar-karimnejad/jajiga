import { useEffect, useState } from 'react';
import LikeAndShareButtons from '../LikeAndShareButtons';
import { useParams } from 'react-router-dom';

const navItems = [
  { id: 'imagesRef', label: 'تصاویر' },
  { id: 'featuresRef', label: 'مشخصات' },
  { id: 'calenderRef', label: 'نرخ' },
  { id: 'mapRef', label: 'نقشه' },
  { id: 'commentsRef', label: 'نظرات' },
  { id: 'hostRef', label: 'میزبان' },
];

// {containerRef,}: {containerRef: React.RefObject<HTMLDivElement>;}
function RoomAccessibility() {
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [activeNavItem, setActiveNavItem] = useState<null | string>('');
  const { id } = useParams();

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

  // const set = () =>
  //   setBbox(
  //     containerRef && containerRef.current
  //       ? containerRef.current.getBoundingClientRect()
  //       : {},
  //   );

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
    setActiveNavItem('imagesRef');
  };

  return (
    <div
      className={`duration-400 sticky top-[77px] z-40 h-14 items-center justify-between rounded-b-lg bg-black/80 px-8 py-3 shadow-lg transition-all dark:bg-gray-950/90 max-lg:top-[62px] max-md:hidden ${scrollYPosition > 400 ? 'flex' : 'hidden'}`}
    >
      <ul className="flex items-center gap-5 text-sm text-white lg:gap-8">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer ${activeNavItem === item.id ? 'rounded-full bg-yellow-500 px-2 py-0.5 text-black' : ''}`}
            onClick={() => {
              if (item.id === 'imagesRef') {
                scrollToTop();
              }
              setActiveNavItem(item.id);
              scrollToRef(document.getElementById(item.id));
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <LikeAndShareButtons id={Number(id)} />
    </div>
  );
}

export default RoomAccessibility;
