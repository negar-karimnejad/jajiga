import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import Footer from '../components/footer/Footer';
import Advantages from '../components/home/Advantages';
import Application from '../components/home/Application';
import Comments from '../components/home/Comments';
import Discount from '../components/home/Discount';
import Hero from '../components/home/Hero';
import Host from '../components/home/Host';
import JajigaArticle from '../components/home/JajigaMag';
import MoreInfos from '../components/home/MoreInfos';
import Popular from '../components/home/Popular';
import QuickSearch from '../components/home/QuickSearch';
import Logo from '../components/navbar/Logo';
import NavLinks from '../components/navbar/NavLinks';
import NavMenu from '../components/navbar/NavMenu';
import Navbar from '../components/navbar/Navbar';
import SearchResultModal from '../components/ui/SearchResultModal';
import SliderSection from '../components/ui/SliderSection';
import { useScroll } from '../hooks/useScroll';
import useSearch from '../hooks/useSearch';

function HomePage() {
  const arrowRef = useRef<HTMLDivElement>(null);
  const { scrollYPosition } = useScroll();
  const { searchResult, searchHandler, searchValue } = useSearch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchHandler(e.target.value);
  };

  useEffect(() => {
    // Disable body scroll when the modal is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    searchHandler(searchValue);
  }, [searchHandler, searchValue]);

  return (
    <>
      <Navbar scrollYPosition={scrollYPosition} />
      <div className="container navbar fixed left-0 right-0 top-0 z-30 mx-auto">
        <div className="flex-1 gap-10">
          <div className="cursor-pointer rounded-full bg-gray-300/50 px-2">
            <NavMenu
              isMenuOpen={isMenuOpen}
              openMenu={openMenu}
              closeMenu={closeMenu}
            />
          </div>
          <div className="flex shrink-0 gap-8 text-white max-md:hidden">
            <NavLinks />
          </div>
        </div>
        {scrollYPosition < 350 && <Logo withTitle={true} />}
      </div>

      <Hero />

      {/* Homepage main section */}
      <div className="relative bg-white dark:bg-gray-900">
        <Application style="absolute -top-12 right-0 h-14 rounded-t-2xl" />
        <Popular />
        <div ref={arrowRef}>
          <QuickSearch />
        </div>
        <Advantages />
        <SliderSection
          title="اقامتگاه های ممتاز"
          text="گلچینی از اقامتگاه های باکیفیت با میزبانهای مهمان نواز"
          nextBtn="premium-swiper-button-next"
          category="premium"
          prevBtn="premium-swiper-button-prev"
        />
        <SliderSection
          title="اقامتگاه های خاص"
          text="اقامتگاه های متفاوت و جذاب برای افراد خاص"
          nextBtn="specials-swiper-button-next"
          category="special"
          prevBtn="specials-swiper-button-prev"
        />
        <SliderSection
          title="اقامتگاه های رزرو فوری"
          text="رزرو فوری بدون نیاز به تایید میزبان"
          nextBtn="instantbooking-swiper-button-next"
          prevBtn="instantbooking-swiper-button-prev"
          category="fastbooking"
        />
        <Discount />
        <SliderSection
          title="ویلاهای لوکس و مجلل"
          text="ویلاهای لوکس و لاکچری برای مشکل پسندها"
          nextBtn="luxury-swiper-button-next"
          prevBtn="luxury-swiper-button-prev"
          category="luxray"
        />
        <SliderSection
          title="اقامتگاه های اقتصادی"
          text="اقامتگاه های با کیفیت و نرخ مناسب"
          nextBtn="economic-swiper-button-next"
          prevBtn="economic-swiper-button-prev"
          category="economic"
        />
        <Host />
        <SliderSection
          title="اجاره ویلا شمال"
          category="shomal"
          text="بهترین ویلاهای گیلان، مازندران و گلستان"
          nextBtn="shomal-swiper-button-next"
          prevBtn="shomal-swiper-button-prev"
        />
        <SliderSection
          category="tehran"
          title="اجاره ویلا اطراف تهران"
          text="ویلاهای کردان، دماوند، شهریار و سایر مناطق اطراف تهران"
          nextBtn="suburbtehran-swiper-button-next"
          prevBtn="suburbtehran-swiper-button-prev"
        />
        <SliderSection
          category="junub"
          title="اجاره سوئیت و اقامتگاه در جنوب"
          text="اقامتگاه های کیش، قشم، بوشهر، بندرعباس و چابهار"
          nextBtn="junub-swiper-button-next"
          prevBtn="junub-swiper-button-prev"
        />
        <Comments />
        <JajigaArticle />
        <MoreInfos />
        <Footer />
      </div>

      {/* Homepage hero content */}
      <div className="absolute left-0 right-0 top-36 z-20 mx-auto sm:w-96">
        <div className="relative">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center justify-center gap-4"
          >
            <label htmlFor="" className="font-vazirMedium text-lg text-white">
              اجاره ویلا در شمال و سراسر ایران زیبا
            </label>
            <div className="input input-bordered flex w-96 items-center gap-2 rounded-full pl-1 max-sm:w-72">
              <input
                type="text"
                className="grow text-gray-700 dark:text-white"
                placeholder="میخوای کجا بری؟"
                value={searchValue}
                onChange={changeHandler}
              />
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 p-1 text-gray-800 transition-all hover:bg-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </form>
          {searchResult.length > 0 && (
            <div className="absolute left-0 right-0 z-40 mx-auto mt-2 sm:w-96">
              <div className="rounded-lg border bg-white px-2 py-4 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                <SearchResultModal searchResult={searchResult} />
              </div>
            </div>
          )}
          <div className="absolute left-0 right-0 top-20 -z-10 mx-auto h-fit w-full text-white">
            <div className="mt-10 flex flex-col items-center text-white">
              <p className="font-vazirMedium text-2xl md:text-3xl">
                جاجیــــــــــگا
              </p>
              <p className="mt-3 font-vazirMedium text-sm md:text-base">
                مثل خونه خودته :)
              </p>
              <BiChevronDown
                onClick={() => {
                  arrowRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                  });
                }}
                size={45}
                className="animate-fade-down -mt-4 lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
